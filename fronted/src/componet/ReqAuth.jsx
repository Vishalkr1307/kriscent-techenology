import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Navigate, useLocation } from 'react-router-dom'

export const ReqAuth = ({children}) => {
    const location=useLocation()
    const {isAuth,isEAuth}=useSelector((store)=>store.auth)
    
    if(!isAuth){
        alert("login required")
        return <Navigate to={'/login'} state={{Form:location}}/>
    }
    
    return children
  
}
