import {createContext, useState} from "react";

export const testingContext = createContext({});

export const TestingContextProvider = ({children}) => {
    const [designer, setDesigner] = useState('Anastasia Ilina');

    return (
        <testingContext.Provider value={{designer, setDesigner}}>
            {children}
        </testingContext.Provider>
    )
};