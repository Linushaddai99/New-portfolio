import React, { useState } from 'react'

const Navbar = () => {
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');
    const [sec, setSec] = useState('');
    const [annotaion, setAnnotation] = useState('AM');
    const [mobileNav, setMobileNav] = useState(false);
    const [theme, setTheme] = useState(false);

    const time = () => {

        const now = new Date();
    
        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();

        setHour(h);
        setMin(m);
        setSec(s);

        if(h >= 12) {
            setAnnotation('PM');
        }

    }

    setInterval(time, 1000);

    const handleMobileNav = () => {
        setMobileNav(!mobileNav);
        document.querySelector('.body').classList.toggle('blur')
    }

    const handleTheme = () => {
        setTheme(!theme);
        document.body.classList.toggle('light-mode')
    }

  return (
    <div className="nav-section">
        <div className="nav">
        <div>
            <h2>SHADDAI</h2>
        </div>

        <div className="navigation">
            <ul className="desktop-nav">
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#skillset">Skillset</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="time">
                <p>{hour} : {min} : {sec} {annotaion}</p>
                <span className="material-symbols-outlined theme" onClick={handleTheme}>{theme ? 'dark_mode' : 'light_mode'}</span>
            </div>

            <div className="mobile-nav">
                <button type="button" className="material-symbols-outlined mobile-menu" onClick={handleMobileNav}>menu</button>
                {  mobileNav ? 
                    <ul className='mobile-navigation'>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#skillset">Skillset</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul> : ""
                }
            </div>
        </div>
    </div>
    <div className="line"></div>
    </div>


  )
}

export default Navbar