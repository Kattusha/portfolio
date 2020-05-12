import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import AuthorCard from "./components/authorCard/AuthorCard";
import Content from "./components/content/Content";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Header/>
            <AuthorCard/>
            <Content/>
        </HashRouter>
    );
}

export default App;
