import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import AuthorCard from "./components/authorCard/AuthorCard";
import Content from "./components/content/Content";

function App() {
    return (
        <>
            <Header/>
            <AuthorCard/>
            <Content/>
            {/*<Projects/>*/}
            {/*<Slogan/>*/}
            {/*<Contacts/>*/}
            {/*<Footer/>*/}
        </>
    );
}

export default App;
