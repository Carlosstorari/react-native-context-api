import { createContext, useEffect, useState } from 'react'
import { escuro, claro } from '../estilosGlobais'

export const TemaContext = createContext({})

export function TemaProvider({ children }) {
    const [temaAtual, setTemaAtual] = useState('escuro')

    const temas = {
        'escuro': escuro,
        'claro': claro
    }
    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual],
            //salvarTemaNoDispositivo
        }}>
            {children}
        </TemaContext.Provider>
    )
}