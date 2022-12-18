import { Button } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/useContext"



function PrivatePage({children}){

  const {isauth}= useContext(AuthContext)
  const navigate = useNavigate()
  
   if(isauth){
    return (
    
        <Navigate to="/"/>
    )
   }
  
   return children

   
}

export default PrivatePage