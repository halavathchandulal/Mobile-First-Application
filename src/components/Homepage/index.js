import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './index.css'

const Homepage = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10',
      )
      .then(response => {
        setJokes(response.data.jokes)
      })
      .catch(error => {
        console.error('Error fetching jokes:', error)
      })
  }, [])

  return (
    <div className='homepage-container'>
      <h2>Jokes</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Homepage
