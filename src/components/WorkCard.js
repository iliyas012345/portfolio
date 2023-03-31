import "./WorkCard.css"
import React from 'react'

const WorkCard = (props) => {
  return (

    <div className="project-card">
                <img src={props.imgsrc} alt=""/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        
                        <a href={props.view}>
                          <button className="btn">view</button>
                        </a>

                        <a href={props.source}>
                          <button className="btn">source</button>
                        </a>
                        
                        
                    </div>
                </div>
            </div>
  )
}

export default WorkCard