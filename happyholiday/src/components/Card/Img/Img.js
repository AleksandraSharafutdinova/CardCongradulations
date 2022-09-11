import React from "react";
import style from './Img.module.css';
import Logo from '../../../img/card-bg.jpg'
import {useSelector} from "react-redux";
import Spinner from "../../Spinner";

const Img = () => {
     const {loading, urlImg} = useSelector(state => state.picture);

    return (
        <div className={style.image}>
            {loading === 'loading' ? <Spinner/> : <img src={urlImg || Logo} alt='Felicitation Card' />}
        </div>
    )
};

export default Img;
