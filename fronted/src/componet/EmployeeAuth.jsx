import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../redux/store'
import { Navigate, useLocation } from 'react-router-dom'

export const EmployeeAuth = ({children}) => {
    const {isEAuth}=useSelector((store)=>store.auth)
    const location=useLocation()
    if(!isEAuth){
        alert("login required")
        return <Navigate to={'/employeelogin'} state={{Form:location}}/>
    }
    return children
  
}
