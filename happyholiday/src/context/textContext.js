import {createContext, useContext} from "react";
//import {useText} from "../hooks/useText";
import {holidayContext} from "./holidayContext";
import {useFetch} from "../hooks/useFetch";
import {URI_API} from "../components/const/const";

export const textContext = createContext({});

export const TextContextProvider = ({children}) => {
    const {holiday} = useContext(holidayContext);
    //const [text] = useText(holiday);
    const [{text}] = useFetch(holiday ? `${URI_API}text/${holiday}` : '');

    return (
        <textContext.Provider value={{text}}>
            {children}
        </textContext.Provider>
    )
}