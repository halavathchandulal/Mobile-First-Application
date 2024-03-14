import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Login from './components/Login'
import Homepage from './components/Homepage'
import './App.css'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            loggedIn ? (
              <Navigate to='/homepage' />
            ) : (
              <Login onLogin={setLoggedIn} />
            )
          }
        />
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
