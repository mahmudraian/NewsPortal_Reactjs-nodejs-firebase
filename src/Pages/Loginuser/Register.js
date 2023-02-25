import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../ConTEXT/AuthProvider/AuthProvider';


const Register = () => {
  const {createUser,updateuserProfile}=useContext(AuthContex);
  const [accepted,setAccepted]=useState()

  const updateprofileUser=(name,photo_url)=>{
    const profile ={
      displayNae:name,
      photoURL:photo_url

    }
    updateuserProfile(profile)
    .then(result=>{ })
      .catch((error)=>{
          console.log('error',error)
      })
  }


  const handleregister=event=>{
    event.preventDefault();
    const form= event.target;
    const name=form.name.value;
    const email=form.email.value;
    const photo=form.photo_url.value;
    const password=form.password.value;
   
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      updateprofileUser(name,photo);
      })
      .catch((error)=>{
          console.log('error',error)
      })
    
  }
 

  const handlecheck=event=>{
    setAccepted(event.target.checked);
  }


    return (
        <div>
          <h3>Register!</h3>
                  <Form  onSubmit={handleregister}>
                 
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Your Name" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
        <Form.Label>Photo url</Form.Label>
        <Form.Control name="photo_url" type="text" placeholder="Enter Photo url" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={handlecheck}
        type="checkbox" 
        label={ <>Accept <Link to='/tarms'>Tarms and Condition!</Link></>}
         />
      </Form.Group>
      <Button variant="primary" type="submit"   disabled={!accepted}>
        Register
      </Button>
    </Form>
        </div>
    );
};

export default Register;