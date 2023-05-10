import React from 'react'
import Project from './Project'
import countries from '../assets/countries.png'
import netMovies from '../assets/net-movies.png'
import budgetApp from '../assets/budget-app.png'
import bookstore from '../assets/bookstore.png'
import weatherApp from '../assets/weather-app.png'
import quiz from '../assets/quiz.png'

const Work = () => {
  return (
    <div className='project-section' id="work">
        <h1>Projects</h1>
        <div className="projects-div">
        <Project title={'01) COUNTRIES OF THE WORLD🌍'} img={countries} technology={['React', 'Redux', 'JavaScript', 'CSS', 'HTML']} repo={'https://github.com/Linushaddai99/Countries-Of-The-World'} demo={'https://linus-countries.netlify.app/'} about={'This is a web application where users are able to see all the countries in the world on the homepage, filter countries by region, click on a country to see more information, search for a country and toggle dark and light modes.'}/>
        <Project title={'02) NET MOVIES'} img={netMovies} technology={['JavaScript', 'CSS', 'HTML']} repo={'https://github.com/belalgamal46/Capstone-Project-2'} demo={'https://belalgamal46.github.io/Capstone-Project-2/dist/'} about={'Net Movies is a website that displays trending, comedy, action and animation movies. We get these movies and their details from an external Api. We also used an involvement Api to save the likes and comments of each movie.'}/>
        <Project title={'03) BUDGET APP'} img={budgetApp} technology={['Ruby', 'Ruby on Rails', 'Postgres', 'CSS', 'HTML']} repo={'https://github.com/Linushaddai99/Budget-app'} demo={'https://budget-application-wb4f.onrender.com/'} about={'Budget App is a mobile web application where you can manage your budget: You have a list of expenses associated with a category, so that you can see how much money you spent and on what.'}/>
        <Project title={'04) WEATHER APP'} img={weatherApp} technology={['JavaScript', 'CSS', 'HTML']} repo={'https://github.com/Linushaddai99/weather-app'} demo={'https://jisomspecial-weatherapp.netlify.app/'} about={'This is an application that helps you check the current weather condition of any city in the world. I made use of the openWeather api to complete this project'}/>
        <Project title={'05) BOOKSTORE'} img={bookstore} technology={['React', 'Redux', 'JavaScript', 'CSS', 'HTML']} repo={"https://github.com/Linushaddai99/Bookstore"} demo={'https://bookstore-n7yq.onrender.com/'} about={'Bookstore is a website that allows you to display a list of books, add a book and remove a selected book.'}/>
        <Project title={'06) QUIZ APP'} img={quiz} technology={['React', 'Redux', 'JavaScript', 'CSS',]} repo={'https://github.com/Linushaddai99/quiz-app'} demo={'https://quiz-app-7j3l.onrender.com/'} about={'In this web application, users are able to take a quiz of their choice by selecting the number, category, difficulty level and type of questions. Users can see their score at the end of the quiz.'}/>
        </div>
    </div>
  )
}

export default Work