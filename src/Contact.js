import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends Component {
    render(){
        return(
            <div>
                <h2>Get in touch</h2>
                <p style={{marginBottom: "2rem"}} >click on the links below to contact me.</p>
                
                <FontAwesomeIcon icon={["fa","envelope"]} size = "2x"/>
                <a
                href="chethana1681@gmail.com"
                style={{
                    textShadow: "0 ipx 0 rgba(0,0,0,0.1)",
                    margin: "0rem 2rem 0rem 0.5rem",
                    textDecoration: "none",
                    color: "wheat"
                }}
                >Mail</a>

                <FontAwesomeIcon icon={["fab","linkedin"]} size = "2x"/>
                <a
                href="www.linkedin.com/in/chethanats888777"
                style={{
                    textShadow: "0 ipx 0 rgba(0,0,0,0.1)",
                    margin: "0rem 2rem 0rem 0.5rem",
                    textDecoration: "none",
                    color: "wheat"
                }}
                >Linkedin</a>

                <FontAwesomeIcon icon={["fab","github"]} size = "2x"/>
                <a
                href="https://github.com/Chethana-16"
                style={{
                    textShadow: "0 ipx 0 rgba(0,0,0,0.1)",
                    margin: "0rem 2rem 0rem 0.5rem",
                    textDecoration: "none",
                    color: "wheat"
                }}
                >Github</a>
                
            </div>

        )
    }
}
export default Contact;
