import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkvalidData } from '../utils/validate';
//import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignForm]=useState(true);
  const [errorMessage, seterrormessage]=useState(null)
  const Navigate=useNavigate();
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  
  const handleButtonClick = ()=> {
//validate data
const message =checkvalidData(email.current.value, password.current.value);
seterrormessage(message);
if(message) return;

//signup/signin
if(!isSignInForm)
{
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    Navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+ errorMessage)
    // ..
  });

}
else
{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    Navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + "-"+ errorMessage);
  }); 
}

}
  const toggleSignInForm = () =>{
setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg' alt='logo'/>
    </div>
<form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
  <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
 
  
 {!isSignInForm &&
 (
  <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
 )} 
 <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
 
 <input ref={password} type='Password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
 <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
  <button className='p-4 my-6 bg-red-700 w-full rounded-lg'onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
  <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
    {isSignInForm? "New to Netflix? Sign Up Now"
    : "Already registered? Sign In Now."}
    </p>
</form>



    </div>
   
  )
}

export default Login
