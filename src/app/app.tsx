import React from "react";
import './style/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../layout/header/header';
import { HomePage } from '../pages/home/home';
import { Settings } from '../pages/settings/settings';
import { Game } from '../pages/game/game';
import { StaticticPage } from '../pages/statistic/statistic';
import { Footer } from '../layout/footer/footer';
export const App = () => {
    return <BrowserRouter>
        <Header></Header>
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/game" element={<Game />}></Route>
                <Route path="/statistic" element={<StaticticPage />}></Route>
            </Routes>
        </div>
        <Footer></Footer>
    </BrowserRouter>
}