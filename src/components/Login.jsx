import { Alert, Button, Card, Form } from 'react-bootstrap'
import React, { useRef, useState } from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const Login = () => {

  const {login}=useAuth();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false)

  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const emailRef=useRef()
  const passwordRef=useRef()

  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();

   
    try{

      setError("")
      setLoading(true)
      await login(emailRef.current.value,passwordRef.current.value)
      navigate(redirectPath)
    }catch{
      setError("failed to login")
     
    }

    setLoading(false)
  
    
  }
  return (
  
    
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
       {error &&  <Alert variant='danger' > {error}</Alert> }
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control id="email" type="email" ref={emailRef}  required />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password" >Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Button  className="w-100 mt-3" type="submit" disabled={loading}>
            Log In
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign Up</Link>
    </div>
  </>
  )
}

export default Login