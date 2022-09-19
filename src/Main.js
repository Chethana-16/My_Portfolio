import React, {Component} from "react";
import {Route,NavLink,Link,HashRouter, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {library} from "@fortawesome/fontawesome-svg-core";
import{
    fab,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

library.add(fab,faLinkedin,
    faGithub,faEnvelope);   





class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
            <div>
            <Link className="logo" to="/">Chethana T S</Link>
            </div>
               
                <ul className= "header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/About" element = {<About />}/>
                <Route path="/Contact" element = {<Contact />}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;
