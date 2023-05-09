import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './stylesheets/App.css'
import './stylesheets/navbar.css'
import './stylesheets/home.css'
import './stylesheets/projects.css'
import './stylesheets/contact.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
