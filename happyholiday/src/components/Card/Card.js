import React, {useEffect} from "react";
import style from './Card.module.css';
import Img from "./Img";
import Felicitation from "./Felicitation";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchTextId} from "../../store/textSlice";
import {fetchPictureId} from "../../store/pictureSlice";

const Card = () => {
    const {idText, idImg} = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        if (idImg && idText) {
           dispatch(fetchTextId(idText));
           dispatch(fetchPictureId(idImg));
        }
    }, [])

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