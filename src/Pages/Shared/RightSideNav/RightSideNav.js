import React, { useContext } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaWhatsapp, FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";
import Brandcarusel from '../BrandCrusel/Brandcarusel';
import { AuthContex } from '../../../ConTEXT/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
const {providerLogin}=useContext(AuthContex);
const provider= new GoogleAuthProvider();

const handlegooglebtn=()=>{
    providerLogin(provider)
    .then(result=>{
    const user=result.user;
    console.log(user)
    })
    .catch((error)=>{
        console.log('error',error)
    })
}



    return (
        <div>
            
              <ButtonGroup vertical>
                  <Button onClick={handlegooglebtn} className='mb-2' variant="outline-primary"> 
                  <FaGoogle></FaGoogle>
                  Login with Google!
                  </Button>
                    <Button   variant="outline-secondary">
                        <FaGithub></FaGithub>
                        
                        Login with Github!
                    
                    </Button>
                    </ButtonGroup>
            <div>
                <h5 className='mb-2'>Find us on!</h5>

            <ListGroup>
                <ListGroup.Item className='mb-2' ><FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2' > <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                <ListGroup.Item className='mb-2' ><FaYoutube></FaYoutube>   Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-2' > <FaTwitter></FaTwitter>   Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2' > <FaWhatsapp></FaWhatsapp>  Whatsapp</ListGroup.Item>
               
             </ListGroup>

            </div>
            <Brandcarusel></Brandcarusel>

            <div>
            

          

            </div>
        </div>
    );
};

export default RightSideNav;