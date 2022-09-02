import {createContext, useContext} from "react";
//import {useImage} from "../hooks/useImage";
import {holidayContext} from "./holidayContext";
import {useFetch} from "../hooks/useFetch";
import {URI_API} from "../components/const/const";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {
    const {holiday} = useContext(holidayContext);
    //const [img] = useImage(holiday);
    const [img] = useFetch(holiday ? `${URI_API}image/${holiday}` : '');


    return (
        <imgContext.Provider value={{img}}>
            {children}
        </imgContext.Provider>
    )
};