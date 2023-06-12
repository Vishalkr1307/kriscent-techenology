import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RegisterForm } from '../componet/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import { adminRegisterData } from '../redux/auth/action'
import { useLocation, useNavigate } from 'react-router-dom'
import { Admin } from './Admin'

export const AdminRegister = () => {
    const data=useSelector((store)=>store.auth)
    
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()
    
    const onChange=(text)=>{
        if(text){

            dispatch(adminRegisterData(text))
        }

    }
    useEffect(()=>{
      if(data.isAuth){
        alert("Your account has been created")
        navigate("/login")
      }

    },[data.isAuth])
  return (
    <Box>
      {/* <Admin/> */}
        <RegisterForm name={"admin"} onChange={onChange} data={data} navigate={navigate} location={location}/>
    </Box>
  )
}
