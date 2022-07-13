import React, { createContext, useState } from 'react'
import Join from "./Join";
import Create from "./Create";
export const  JoinCreate = createContext(null);
function Queue() {
  const[show,setShow]=useState(false);
  return (
    <div>
      <JoinCreate.Provider>
    {show?<Join/>:<Create/>}
      </JoinCreate.Provider>
    </div>
  )
}

export default Queue