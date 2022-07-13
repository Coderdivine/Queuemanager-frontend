import React, { createContext, useState } from 'react'
import Login from './Login'
import Register from './Register'
export const  LoginReigster = createContext(null);
function Auth() {
    const[login,setLogin]=useState(true);
  return (
    <div>
        <LoginReigster.Provider value={{login,setLogin}}>
       {login?<Login/>:<Register/>}
      </LoginReigster.Provider>
    </div>
  )
}

export default Auth