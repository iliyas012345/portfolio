import "./Project.css"
import React, { Component } from 'react'

class ProjectImg extends Component {
    render(){

        return (
            <div className="projectimg">
                <div className="heading">
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>  
                </div>
            </div>
          )

    }
  
}

export default ProjectImg