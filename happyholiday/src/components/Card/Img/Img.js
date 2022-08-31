import React, {useContext} from "react";
import {imgContext} from '../../../context/imgContext'
import style from './Img.module.css';
import Logo from '../../../img/card-bg.jpg'

const Img = () => {
    const img = useContext(imgContext);
    //console.log(img)

    return (
        <div className={style.image}>
            <img src={Logo} alt='Felicitation Card' />
        </div>
    )
};

export default Img;
