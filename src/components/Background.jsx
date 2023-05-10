import React from 'react';
import Photo from '../assets/my-photo.jpg'

const Background = () => {
  return (
    <div className='background' id="about">
        <h2>Background</h2>
        <div className='display-background'>
            <div className="background-text">
                <p>Linus Shaddai loves creating user-friendly websites and adding creative elements to make them more memorable. 

                She is most excited by the different animations and interactions she can bring to a website. She loves to collaborate and peer program as it opens her up to other perspective of writing code.

                She is an easy going person who enjoys spending time with good people. She loves to see movies, make music, and going out to eat when she's not working.</p>
            </div>
            <div className='img-div'>
                <img src={Photo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Background