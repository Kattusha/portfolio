import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Slogan from "./components/slogan/Slogan";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import AboutSkills from "./components/skills/AboutSkills";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            {/*<Skills />*/}
            <AboutSkills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
