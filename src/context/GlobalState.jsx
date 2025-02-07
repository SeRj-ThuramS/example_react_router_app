import React, { createContext, useState, useContext } from 'react'


const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState(null)
    const setData = (data) => {
        setState({ ...state, data })
    }

    return (
        <GlobalContext.Provider value={{ state, setData }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalState = () => {
    return useContext(GlobalContext)
}