import "./HomeImg.css"
import React from 'react'
import{Link} from "react-router-dom"

const HomeImg = () => {
  return (
    <div className="homeimg">
        <div className="mask">
           <img className="into-img" src="https://www.appdevelopmentpros.com/wp-content/uploads/2021/09/Experience-Next-Level.png" alt="https://d1h9h5g2pln59q.cloudfront.net/MERN_Stack_Hero_bc2119602a.png"/> 
        </div>
        <div className="content">
          <p>HI, I'M A ILIYAS</p>
          <h1>Full Stack web Developer</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>

          
        </div>
    </div>
  )
}

export default HomeImg