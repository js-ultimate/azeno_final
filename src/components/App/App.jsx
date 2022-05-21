import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Train from '../Train/Train';
import Profile from '../Profile/Profile';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Link to="/profile">Profile</Link>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/train" element={<Train />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
