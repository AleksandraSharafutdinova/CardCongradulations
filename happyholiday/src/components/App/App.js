import React from "react";
import './App.css'
import Card from "../Card";
import EmptyCard from "../EmptyCard/EmptyCard";
import {Routes, Route} from "react-router-dom";
import Layout from "../Layout";



const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<EmptyCard />} />
                <Route path='card/:holiday' element={<Card />} />
            </Route>
            <Route path='singleCard/:idText/:idImg' element={<Card />}/>
        </Routes>
    )
};

export default App;