import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import AuthorCard from "./components/authorCard/AuthorCard";
import Skills from "./components/content/Skills";
import Projects from "./components/projects/Projects";
import Slogan from "./components/slogan/Slogan";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

function App() {
    return (
        <>
            <Header/>
            <AuthorCard/>
            <Content/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
