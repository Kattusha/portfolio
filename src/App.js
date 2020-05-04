import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import AuthorCard from "./components/authorCard/AuthorCard";
import Content from "./components/content/Content";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AuthorCard/>
            <Content/>
        </BrowserRouter>
    );
}

export default App;
