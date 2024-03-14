import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import './index.css'

const Login = ({onLogin}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (username === 'dummy' && password === 'password') {
      onLogin(true)
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className='login-container'>
      <div className='container'>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <br />
            <Form.Control
              type='text'
              placeholder='Enter username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <br />
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {error && <p className='error-msg'>{error}</p>}

          <Button variant='primary' type='submit' className='login-button'>
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
