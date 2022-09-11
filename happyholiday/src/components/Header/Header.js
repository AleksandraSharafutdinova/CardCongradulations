import React from "react";
import Container from "../Container/Container";
import Choices from "./Choices";
import style from './Header.module.css'
import {useDispatch} from "react-redux";
import {fetchText} from "../../store/textSlice";
import {fetchPicture} from "../../store/pictureSlice";
import {useParams} from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const {holiday} = useParams();

    const onClickText = () => {
        if (holiday)
        dispatch(fetchText(holiday))
    };

    const onClickPicture = () => {
        if (holiday)
        dispatch(fetchPicture(holiday))
    }

    return (
        <header className={style.header}>
            <Container>
                <div className={style.wrapper}>
                    <div className={style.buttons}>
                        <button className={style.button} onClick={onClickText} disabled={!holiday}>Поменять поздравление</button>
                        <button className={style.button} onClick={onClickPicture} disabled={!holiday}>Поменять фон</button>
                    </div>
                    <Choices />
                </div>
            </Container>
        </header>
    )
};

export default Header;