import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import {TestingContextProvider} from "../../context/testingContext";
import {Outlet, Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import style from './Layout.module.css'

const Layout = () => {
    const {text: {idText}, picture: {idImg}} = useSelector(state => state);


    return (
        <div className={style.wrapper}>
            <Header />
            <Outlet />
            {idText && idImg && (
                <Link className={style.button} to={`singleCard/${idText}/${idImg}`}>
                    Поделиться открыткой!
                </Link>
            )}
            <TestingContextProvider>
                <Footer />
            </TestingContextProvider>
        </div>
    )
};

export default Layout;