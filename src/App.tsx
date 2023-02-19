import React, {Suspense, useContext, useState} from 'react';
import './style/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./style/theme/useTheme";
import {classNames} from "./heplers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {focus: true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О Сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                   <Route path={'/about'} element={<AboutPageAsync/>} />
                   <Route path={'/'} element={<MainPageAsync />} />
               </Routes>
            </Suspense>
        </div>
    );
};

export default App;