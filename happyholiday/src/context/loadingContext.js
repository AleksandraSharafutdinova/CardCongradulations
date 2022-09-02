import {createContext, useState} from "react";

export const loadingContext = createContext({});

export const LoadingContextProvider = ({children}) => {
    const [load, setLoad] = useState(false);

    return (
        <loadingContext.Provider value={{ load, setLoad }}>
            {children}
        </loadingContext.Provider>
    )
};