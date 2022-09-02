import React from "react";
import Header from "../Header"
import Footer from "../Footer";
import './App.css'
import Card from "../Card";
import {TextContextProvider} from "../../context/textContext";
import {ImgContextProvider} from "../../context/imgContext";
import {HolidayContextProvider} from "../../context/holidayContext";
import {TestingContextProvider} from "../../context/testingContext";
import {LoadingContextProvider} from "../../context/loadingContext";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}

const App = () => {

    return (
        <div style={wrapper}>
            <LoadingContextProvider>
                <HolidayContextProvider>
                    <ImgContextProvider>
                        <TextContextProvider>
                            <Header />
                            <Card />
                            <TestingContextProvider>
                                <Footer />
                            </TestingContextProvider>
                        </TextContextProvider>
                    </ImgContextProvider>
                </HolidayContextProvider>
            </LoadingContextProvider>
        </div>
    )
};

export default App;