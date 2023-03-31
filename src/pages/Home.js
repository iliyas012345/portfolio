import React from 'react'
import Footer from '../components/Footer'
import HomeImg from '../components/HomeImg'
import About from './About'
import Contact from './Contact'
import Project from './Project'


const Home = () => {
  return (
    <div>
        
        <HomeImg/>
        <About/>
       <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home