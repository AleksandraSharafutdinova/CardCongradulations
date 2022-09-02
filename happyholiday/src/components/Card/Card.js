import React from "react";
import style from './Card.module.css';
import Img from "./Img";
import Felicitation from "./Felicitation";

import {useContext} from "react";
import {loadingContext} from "../../context/loadingContext";
import Spinner from "../Spinner";

const Card = () => {

    const {load} = useContext(loadingContext);
    const spinner = load === true ? <Spinner/> : null;

    return (
        <div className={style.card}>
            <div className={style.wrapper}>
                {spinner}
                <Img />
                <Felicitation/>
            </div>
        </div>
    )
};

export default Card;