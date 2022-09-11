import React from "react";
import style from './Felicitation.module.css'
import {useSelector} from "react-redux";

const Felicitation = () => {

    const {text, loading} = useSelector(state => state.text);
    const texting = 'Мы с удовольствием сгенерируем для Вас поздравление! Для этого просто выберите праздник:)';

    return (
        <p className={style.felicitation}>
            {loading === 'loading' ? 'Loading...' :
                text === '' ? texting : text}
        </p>
    )
};

export default Felicitation;