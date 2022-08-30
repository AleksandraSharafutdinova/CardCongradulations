import React from "react";
import Header from "../Header"
import Footer from "../Footer";
import './App.css'
import Card from "../Card";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}

const App = () => {
    return (
        <div style={wrapper}>
            <Header />
            <Card />
            <Footer />
        </div>
    )
};

export default App;