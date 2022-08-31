import React, {useContext, useState} from "react";
import style from './Choices.module.css';
import {holidayContext} from "../../../context/holidayContext";

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const [holiday, setHoliday] = useState('Выбрать праздник');

    const hol = useContext(holidayContext)
    //console.log(hol.smt)

    const toggleChoices = () => {
        setIsOpenChoices(!isOpenChoices)
    };

    const changeHoliday = (title) => {
        setHoliday(title)
        toggleChoices();
    }

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>{holiday}</button>
            { isOpenChoices && (
                <ul className={style.list}>
                    {Object.entries(hol.smt).map(item => (
                        <li key={item[0]}
                            className={style.item}
                            onClick={() => {
                                changeHoliday(item[1])
                            }}>
                            {item[1]}
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    )
};

export default Choices