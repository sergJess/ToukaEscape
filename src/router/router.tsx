import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/home';
import {Settings} from '../pages/settings/settings';
export const Router = () => {
    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    </BrowserRouter>
}