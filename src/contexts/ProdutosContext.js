import { createContext, useEffect, useState } from 'react'
import { salvarProduto } from '../Servicos/Requisicoes/produtos'
import { pegarProdutos } from '../Servicos/Requisicoes/produtos'

export const ProdutosContext = createContext({})

export function ProdutosProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])

    const setupProdutosCarrinho = async () => {
        const resultado = await pegarProdutos();
        setCarrinho(resultado);
        setQuantidade(resultado.length) 
     }

    useEffect( () => {
       setupProdutosCarrinho()
    }, [])

    async function viuProduto(produto) {
        setQuantidade(quantidade + 1);

        const resultado = await salvarProduto(produto)

        let novoCarrinho = carrinho
        novoCarrinho.push(resultado)
        setCarrinho(novoCarrinho)

        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(produto)

        //'...'  faz uma copia do conjunto(set) e transforma em um array
        setUltimosVistos([...novoUltimosVistos])
    }

    return (
        <ProdutosContext.Provider value={{
            quantidade,
            carrinho,
            ultimosVistos,
            viuProduto
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}