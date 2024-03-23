import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState({})

    function login(email, senha) {
        if(email == 'carlos.storari95@gmail.com' && senha == 123) {
            setUsuario({
                nome: 'Carlos',
                email: email,
                endereco: 'rua Votorantim',
                telefone: '(19) 99999-9999'
            })
            return 'ok'
        }
        else {return 'Email ou senha incorreto'}
    }
    return (
        <AutenticacaoContext.Provider value={{
            usuario,
            login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}