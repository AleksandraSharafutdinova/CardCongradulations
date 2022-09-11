import React, {useEffect, useState} from "react";
import style from './Choices.module.css';
import {useSelector, useDispatch} from "react-redux";
import {fetchHolidays} from "../../../store/holidaysSlice";
import {fetchText} from "../../../store/textSlice";
import {fetchPicture} from "../../../store/pictureSlice";
import {Link, useParams} from 'react-router-dom';

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const {holiday} = useParams();


    //7. теперь мы делаем наш запрос через юзСелектор и уже оттуда все достаем. также нам нужен будет dispatch
    const {holidays, loading} = useSelector(state => state.holidays)
    //8. диспатч позволяет вызывать те экшены, которые мы записали, именно ему мы передаем экшены, чтобы их вызвать
    const dispatch = useDispatch();
    //9. все, мы его получили, теперь с помощью него мы установим холидэй там, где он нам нужен, dispatch(setHolidayx(item[0]))

    //12.мне не очень понятно, что тут произошло, но вот так
    useEffect(() => {
        dispatch(fetchHolidays());
        if (holiday) {
            dispatch(fetchText(holiday));
            dispatch(fetchPicture(holiday));
        }
    }, [dispatch, holiday]);


    const toggleChoices = () => {
        if (loading !== 'success') return;
        setIsOpenChoices(!isOpenChoices)
    };

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>
                {loading !== 'success' ?
                    'Загрузка...' :
                    holidays[holiday] || 'Выбрать праздник'}</button>
            { isOpenChoices && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                        <li key={item[0]}
                            className={style.item}
                            onClick={() => {
                                toggleChoices();
                            }}>
                            <Link to={`card/${item[0]}`}>{item[1]}</Link>
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    )
};

export default Choices;