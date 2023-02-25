import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from '../../firebase/Firebase';

export const AuthContex =createContext();
 const auth=getAuth(app);



const AuthProvider =({children}) => {
    const [loading,setLoding]=useState(true)

 


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


const updateuserProfile=(profile)=>{
    return updateProfile(auth.currentUser,profile)
}


    const Logout=()=>{
        setLoding(true);
        return signOut(auth)
    }
    const [user,setuser]=useState(null);
    
        useEffect(()=>{
          const unsubscribe =  onAuthStateChanged(auth,(currentuser=>{
            
                setuser(currentuser)
                setLoding(false)
            }))
            return ()=>unsubscribe();
    
        })
    
    
    
        const providerLogin=(provider)=>{
            return signInWithPopup(auth,provider)
        }

    const authInfo={user,createUser,providerLogin,Logout,signIn,loading,updateuserProfile}
    return (
        <div>
            <AuthContex.Provider value={authInfo}> 
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;