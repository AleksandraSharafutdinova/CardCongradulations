import React, {useContext} from "react";
import {imgContext} from '../../../context/imgContext'
import style from './Img.module.css';

const Img = () => {
     const img = useContext(imgContext);

    return (
        <div className={style.image}>
            <img src={img.img} alt='Felicitation Card' />
        </div>
    )
};

export default Img;
