import React from "react";
import style from './Img.module.css';
import Logo from '../../../img/card-bg.jpg'

const Img = () => {
    return (
        <div className={style.image}>
            <img src={Logo} alt='Felicitation Card' />
        </div>
    )
};

export default Img;