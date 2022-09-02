import React, {useContext} from "react";
import style from './Felicitation.module.css'
import {textContext} from "../../../context/textContext";

const Felicitation = () => {

    const {text} = useContext(textContext);
    const texting = 'Мы с удовольствием сгенерируем для Вас поздравление! Для этого просто выберите праздник:)'

    return (
        <p className={style.felicitation}>
            {text ?? texting}
        </p>
    )
};

export default Felicitation;