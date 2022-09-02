import {createContext, useState} from "react";
import {useFetch} from "../hooks/useFetch";
import {URI_API} from "../components/const/const";

export const holidayContext = createContext({});

export const HolidayContextProvider = ({children}) => {
    const [holiday, setHoliday] = useState('');
    const [holidays] = useFetch(URI_API);

    const changeHoliday = (title) => {
        setHoliday(title)
    }

    return (
        <holidayContext.Provider value={{holiday, holidays, changeHoliday}}>
            {children}
        </holidayContext.Provider>
    )
};