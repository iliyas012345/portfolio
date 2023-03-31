import  "./Footer.css"
import React from 'react'
import { FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
           

            <div className="left">
                <div className="phone">
                  <h4>
                  <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                  8825980928
                  </h4>
                </div>

                
            </div>
            <div className="right">
              
            <div className="email">
                  <h4>
                  <FaMailBulk size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                  iliyasmohamed396@gmail.com
                  </h4>
                </div>
                
                </div>
        </div>
    </div>
  )
}

export default Footer