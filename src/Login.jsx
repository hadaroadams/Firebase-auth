import React from 'react'
import { useState ,useEffect} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from 'firebase/auth'
import './Login.css'
import { async } from '@firebase/util';
import { auth } from './firebase.config';
function Login() {
    const [reagisterEmail,setRegisterEmail] = useState('');
    const [reagisterPassword,setRegisterPassword] = useState('');
    const [loginEmail,setLoginEmail] =useState('')
    const [loginPassword,setLoginPassword] =useState('')
    const [user,setUser] = useState({})

    useEffect(()=>{
      onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    })},[])
    

    const register= async() =>{
      try{
      const user  = await createUserWithEmailAndPassword(auth,reagisterEmail,reagisterPassword)
      console.log(user)
      }
      catch(error){
        console.log(error.message)
      }
    }
    const login= async () =>{
       try{
      const user  = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
      console.log(user)
      }
      catch(error){
        console.log(error.message)
      }

    }
    const signout= async()=>{
      await signOut(auth)
    }
  return (
    <div className='Login'>
      <div className="reg">
            <h3>Register User</h3>
            <input type="email" placeholder='Email' onChange={e=>setRegisterEmail(e.target.value)}/>
            <input type="password" placeholder='password'  onChange={e=>setRegisterPassword(e.target.value)}/>
            <button onClick={register}>Create User</button>
       </div>
       <div>
            <h3>Login</h3>
            <input type="text" placeholder='Email' onChange={e=>setLoginEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={e=>setLoginPassword(e.target.value)} />
            <button onClick={login}>Login</button>
            <h3>User Logged in:</h3>
            <h3>{user?.email}</h3>
            <button onClick={signout}>Sign Out</button>
       </div>  
     
    </div>
  ) 
}

export default Login
