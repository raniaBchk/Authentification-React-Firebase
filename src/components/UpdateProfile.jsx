import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const UpdateProfile = () => {

  
  const {updateUserEmail,currentUser,updateUserPassword}=useAuth();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false)


  const emailRef=useRef()
  const passwordRef=useRef()
  const passwordConfirmationRef=useRef()
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmationRef.current.value ){
      return setError("password do not match")
    }

    // array fiha kamel promises dyalna
    const promises = [];
    setLoading(true);
    setError("");

    // if (emailRef.current.value !== currentUser.email) {

    //   //hna on ajoute la fonction updateUserEmail bch apres t'executa 
    //   promises.push(updateUserEmail(emailRef.current.value));
    // }


    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }


    // attendre que toutes les promesses soient resolues
    Promise.all(promises)
    .then(() => {
      navigate("/");
    })
    .catch(() => {
      setError("Failed to update account");
    })
    .finally(() => {
      setLoading(false);
    });
    
  }



  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error &&  <Alert variant='danger' >{error} </Alert>} 
          <Form  onSubmit={handleSubmit} >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                defaultValue={currentUser && currentUser.email}
                required
                
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmationRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button className="w-100 mt-3" type="submit" disabled={loading}>
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>
  )
}

export default UpdateProfile