import { useState } from "react"
import { auth, googleProvider,  } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithRedirect ,signOut} from "firebase/auth"

export const Auth = ()=>{
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
     const signIn = async()=>{
        await createUserWithEmailAndPassword(auth, email, password)
     }
     const signInWithGeogle = async()=>{
        await signInWithRedirect(auth, googleProvider)
     }
     const LogOut = async()=>{
        await signOut(auth)
     }
   return(
    <>
    <div>
        <input 
        placeholder="Email"
        onChange={(e)=> setEmail(e.target.value)} 
        
        
        >
        
        </input>
        <input 
        placeholder="Password"
        type="password"
        onChange={(e)=> setPassword(e.target.value)}
        
        >
        
        </input>
        <button onClick={signIn}>
            Sign in
        </button>
      <button onClick={signInWithGeogle}>
        Sign in with Geogle
      </button>
      <button onClick={LogOut}>
      SignOut
      </button>
    </div>
    </>
   )
}