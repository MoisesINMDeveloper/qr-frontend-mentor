import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QrComponent from "@components/qr-component";
import "@styles/styles.css";
const App = () => {
    return (
        <BrowserRouter basename="/qr-frontend-mentor/">
            <Routes>
                <Route path="/" element={<QrComponent />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;