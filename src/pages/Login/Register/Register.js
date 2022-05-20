import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateToLogin = event =>{
        navigate('/login');
    }
    const handleRegister = event =>{
        event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
    }
    return (
        <div>
            <h2 className='text-primary text-center my-3'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="" placeholder='Your name' />
              
                <input type="email" name="email" id="" placeholder='Email Address' required/>
               
                <input type="password" name="password" id="" placeholder='Password' required />
             
                <input type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;