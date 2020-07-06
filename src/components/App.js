import React from 'react';
import './App.css';
import Header from "./header/Header";
import AuthorCard from "./authorCard/AuthorCard";
import Content from "./content/Content";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Header/>
            <AuthorCard/>
            <Content/>
        </HashRouter>
    )
}

export default App;
