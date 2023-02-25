import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../ConTEXT/AuthProvider/AuthProvider';

const Login = () => {
const[logerror,setError]=useState(null)
const {signIn}=useContext(AuthContex)

const navigate= useNavigate();
const location = useLocation();
const from=location.state?.from?.pathname || "/"

const handlelogin=(event)=>{
    event.preventDefault();
    const form= event.target;
    const email=form.email.value;
    const password=form.password.value;
    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
      navigate(from,{replace:true})

      })
      .catch((error)=>{
          console.log('error',error)
          setError(error.message);
         
      }
      
      )

}


    return (
        <div>
                <h3>Login!</h3>
             <Form onSubmit={handlelogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
            {/* <p>{logerror}</p> */}
    {logerror? <span>{logerror}</span>:<p> {}</p>}
        </div>
    );
};

export default Login;