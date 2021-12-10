import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutContainer from "../Container/AboutContainer";
// import ContactContainer from "../Container/ContactContainer";
// import GalleryContainer from "../Container/GalleryContainer";
// import MembersContainer from '../Container/MembersContainer';
// import YoutubeContainer from "../Container/YoutubeContainer";
import MainContainer from "../Container/MainContainer";
import Footer from './Footer';
import Header from './Header';


export default function Routers(){

    return(
        <BrowserRouter>
            <Header/>
        <Routes>
            <Route path='/' element={<MainContainer/>}/>
        </Routes>
            <Footer/>
        </BrowserRouter>
    )
};