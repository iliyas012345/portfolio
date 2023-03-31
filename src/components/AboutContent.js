import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>A motivated, goal oriented natural team player Wants to convert the challenges into opportunities. Aspiring Full-Stack Web developer who is proficient in both Front-end and Back-end frameworks.
               Looking forward to work in a high profile organization and use my current skills and capabilities to contribute to its profitability and growth.</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>

            
        </div>
        
    </div>
  )
}

export default AboutContent