import React from "react";
import Header from "../Header"
import Footer from "../Footer";
import './App.css'
import Card from "../Card";
import {TextContextProvider} from "../../context/textContext";
import {ImgContextProvider} from "../../context/imgContext";
import {HolidayContextProvider} from "../../context/holidayContext";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}

const App = () => {
    return (
        <div style={wrapper}>
            <HolidayContextProvider>
                <ImgContextProvider>
                    <TextContextProvider>
                        <Header />
                        <Card />
                        <Footer />
                    </TextContextProvider>
                </ImgContextProvider>
            </HolidayContextProvider>
        </div>
    )
};

export default App;