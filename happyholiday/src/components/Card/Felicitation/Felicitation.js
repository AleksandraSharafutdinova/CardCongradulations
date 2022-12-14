import React, {useContext} from "react";
import style from './Felicitation.module.css'
import {textContext} from "../../../context/textContext";

const Felicitation = () => {

    const {text} = useContext(textContext)

    return (
        <p className={style.felicitation}>
            {text}
        </p>
    )
};

export default Felicitation;