import React from 'react'
import Background from './Background'
import Skills from './Skills'
import Work from './Work'
import displayPhoto from '../assets/display-photo.svg'
import Contact from './Contact'

const Home = () => {

  return (
    <div className="container body">
        <div className="display-photo">
            <h1>FULLSTACK DEVELOPER</h1>
            <div className='typing-photo'>
                <img src={displayPhoto} alt="" />
            </div>
            <div>
              <a className="resume-btn" href="Resume.pdf" download="Shaddai's Resume"><span class="material-symbols-outlined">arrow_downward</span>Resume</a>
              <a className="resume-btn" href = "mailto: awajisomegak@gmail.com"><span class="material-symbols-outlined">arrow_upward</span>Email Me</a>
            </div>
        </div>
        <Background />

        <Skills />

        <Work />

        <div className='skillset' id="skillset">
          <h2>SKILLSET</h2>
          <p>I love developing user-friendly websites and adding creative elements to make them more memorable. </p>
          <h3>Front-End Developemnt</h3>
          <button>React</button>
          <button>Vue</button>
          <button>JavaScript</button>
          <button>TypeScript</button>
          <button>HTML</button>
          <button>CSS</button>
          <button>Boostrap</button>
          <button>Tailwind</button>

          <h3>Backend Developement</h3>
          <button>Ruby</button>
          <button>Ruby on Rails</button>
          <button>Postgres</button>

          <h3>Tools and Methods</h3>
          <button>Git</button>
          <button>GitHub</button>
          <button>Onrender</button>
          <button>Netlify</button>
          <button>Mobile/Responsive Developement</button>
          <button>Rspec</button>
          <button>TDD</button>

          <h3>Professional</h3>
          <button>Remote Pair-Programming</button>
          <button>Teamwork</button>
          <button>Mentoring</button>
        </div>

        <Contact />


    </div>

  )
}

export default Home