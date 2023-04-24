import React from 'react';
import './App.css';
import Header from "./header/Header";
import MainContent from "./main/MainContent";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
