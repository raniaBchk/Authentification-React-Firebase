import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Dashbord = () => {

  const {currentUser,logout}=useAuth();
  const [error,setError]=useState("");

  const navigate=useNavigate();

  const handleLogout=async()=>{


    setError("")
    try{

      await logout();
      navigate("/login")
    }
    catch{

      setError("failed to logout ")
    }

  }
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
       
        <strong>Email:</strong> {currentUser && currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      <Button className="btn btn-primary" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  </>
  )
}

export default Dashbord