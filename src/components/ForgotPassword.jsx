import React, { useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Alert, Button, Card, Form } from 'react-bootstrap'

const ForgotPassword = () => {



  const {resetPassword}=useAuth();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false)
  const [message, setMessage]=useState("")

  const emailRef=useRef()


  //const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();

   
    try{

      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("check your inbox to get a new password")
      // navigate("/")
    }catch{
      setError("failed to reset password")
     
    }

    setLoading(false)
  
    
  }




  return (
   
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4 ">Password Reset</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        {message && <Alert variant='success'>{message}</Alert> }
        <Form onSubmit={handleSubmit} >
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef}  required />
          </Form.Group>
          <Button  className="w-100 mt-3" type="submit" disabled={loading}>
            Reset Password
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          <Link to="/login">Login</Link>
        </div>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign Up</Link>
    </div>
  </>
  )
}

export default ForgotPassword