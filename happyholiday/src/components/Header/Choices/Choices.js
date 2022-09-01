import React, {useContext, useState} from "react";
import style from './Choices.module.css';
import {holidayContext} from "../../../context/holidayContext";

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const {holiday, holidays, changeHoliday} = useContext(holidayContext);

    const toggleChoices = () => {
        setIsOpenChoices(!isOpenChoices)
    };

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>{holidays[holiday] || 'Выбрать праздник'}</button>
            { isOpenChoices && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                        <li key={item[0]}
                            className={style.item}
                            onClick={() => {
                                changeHoliday(item[0]);
                                toggleChoices();
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