import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";

const LandingPage = () => {
    return (
        <>
            <Home/>
        </>
    );
};

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;