import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Dashbord from './components/Dashbord'
import UpdateProfile from './components/UpdateProfile'
import AuthProvider from './context/AuthContext';
import { Container } from "react-bootstrap";
import RequireAuth from './context/RequireAuth';

function App() {


  return (
  
    <AuthProvider>    
  
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <BrowserRouter basename="/Authentification-React-Firebase">
    
    <Routes>
    <Route path='/' element={
      <RequireAuth>
      <Dashbord/>
      </RequireAuth>
    
    }/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/update-profile' element={<UpdateProfile/>}/>
    
    </Routes>
    
    </BrowserRouter>
    
    </div>
    
    </Container>

    </AuthProvider>
  );
}

export default App;
