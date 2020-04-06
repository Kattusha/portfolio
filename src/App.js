import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import AuthorCard from "./components/main/AuthorCard";
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
            <AuthorCard/>
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
