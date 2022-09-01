import {createContext, useState} from "react";
import {useHolidays} from "../hooks/useHolidays";

export const holidayContext = createContext({});

export const HolidayContextProvider = ({children}) => {
    const [holiday, setHoliday] = useState('');
    const [holidays] = useHolidays();

    const changeHoliday = (title) => {
        setHoliday(title)
    }

    return (
        <holidayContext.Provider value={{holiday, holidays, changeHoliday}}>
            {children}
        </holidayContext.Provider>
    )
};