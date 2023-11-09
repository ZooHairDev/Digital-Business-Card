import "./style.css"

import React from "react"

export default function Info() {
    return (
        <div>
            <img className="profile-photo" src="../images/profile-photo.jpg" />
            <h1 className="person-name">Zouhair Ouled Bouia</h1>
            <h3 className="profission">Aspiring Front-End Developer</h3>
            <h4 className="site">Contact Me</h4>
            <div className="websites">
                <a href="mailto:zouhair.ob@gmail.com" target="_blank" className="email">
                    <img src="../images/email-logo.png" />
                    <p>Email</p> 
                </a>
                <a href="https://www.linkedin.com/in/zouhairouled/" target="_blank" className="linkedin" >
                    <img src="../images/linkedin-logo.png" />
                    <p>Linkedin</p>            
                </a>
            </div>
        </div>
    )
}