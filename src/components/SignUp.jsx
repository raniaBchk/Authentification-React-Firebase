import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const SignUp = () => {

  const {signup}=useAuth();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false)


  const emailRef=useRef()
  const passwordRef=useRef()
  const passwordConfirmationRef=useRef()
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmationRef.current.value ){
      return setError("password do not match")
    }
    try{

      setError("")
      setLoading(true)
      await signup(emailRef.current.value,passwordRef.current.value)
      navigate("/")
    }catch{
      setError("failed to create count")
    }

    setLoading(false)
    
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error &&  <Alert variant='danger' >{error} </Alert>} 
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" type="email" ref={emailRef}  required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                ref={passwordRef}
                
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password-confirm">
                Password Confirmation
              </Form.Label>
              <Form.Control
                id="password-confirm"
                type="password"
                ref={passwordConfirmationRef}
                required
              />
            </Form.Group>
            <Button  className="w-100 mt-3" type="submit" disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}

export default SignUp