import React from "react";
import style from './EmptyCard.module.css';

const EmptyCard = () => {

    return (
        <div className={style.card}>
            <p>Выберите повод для поздравления!</p>
        </div>
    )
};

export default EmptyCard;