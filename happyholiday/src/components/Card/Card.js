import React from "react";
import style from './Card.module.css';
import Img from "./Img";
import Felicitation from "./Felicitation";

const Card = () => {
    return (
        <div className={style.card}>
            <div className={style.wrapper}>
                <Img />
                <Felicitation/>
            </div>
        </div>
    )
};

export default Card;