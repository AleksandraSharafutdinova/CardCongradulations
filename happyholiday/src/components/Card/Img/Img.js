import React, {useContext} from "react";
import {imgContext} from '../../../context/imgContext'
import style from './Img.module.css';
import Logo from '../../../img/card-bg.jpg'

const Img = () => {
     const {img} = useContext(imgContext);

    return (
        <div className={style.image}>
            <img src={img.urlImg || Logo} alt='Felicitation Card' />
        </div>
    )
};

export default Img;
