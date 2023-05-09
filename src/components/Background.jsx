import React from 'react';
import Photo from '../assets/my-photo.png'

const Background = () => {
  return (
    <div className='background' id="about">
        <h2>Background</h2>
        <div className='display-background'>
            <div className="background-text">
                <p className='first-p'>I love creating user-friendly websites and adding creative elements to make them more memorable. </p>
                <p>I have always been interested in web development, so I decided to pursue a career in the tech industry. I originally majored in front end developemt, but my interests soon turned to back-end devlopement . I am looking forward to seeing where it takes me and how much i can achieve.</p>

                <p>I am most excited by the different animations and interactions I can bring to a website, designing static stuff is just not my thing. I have only recently discovered webgl and am looking forward to learning more about it and experimenting with different ways of interacting with the user in the future!</p>

                <p>I am an easy going person who enjoys spending time with good people. I love watching movies, playing videogames, and going out to eat when I am not working. I am extremely motivated to learn and grow as a developer.</p>
            </div>
            <div className='img-div'>
                {/* <img src={Photo} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default Background