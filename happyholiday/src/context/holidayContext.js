import {createContext, useState} from "react";

export const holidayContext = createContext({});

export const HolidayContextProvider = ({children}) => {
    const [smt, setSmt] = useState(
        {
            newYear: 'Новый год',
            birthdayW: 'День рождения Ж',
            birthdayM: 'День рождения М',
            womanDay: '8 марта',
            knowDay: 'День знаний',
        }
    )

    return (
        <holidayContext.Provider value={{smt, setSmt}}>
            {children}
        </holidayContext.Provider>
    )
};