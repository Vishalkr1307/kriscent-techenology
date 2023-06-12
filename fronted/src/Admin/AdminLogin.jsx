import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { LoginForm } from '../componet/LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store'
import { adminLoginData } from '../redux/auth/action'
import { useLocation, useNavigate } from 'react-router-dom'
import { Admin } from './Admin'
import { AlertItem } from '../componet/Alert'

export const AdminLogin = () => {
    const data=useSelector((store)=>store.auth)
    var {loading,isAuth,token,isError,isLogin}=data
    const navigate=useNavigate()
    const location=useLocation()
    
    
    const dispatch=useDispatch()
    const onChange=(text)=>{
        if(text){
            dispatch(adminLoginData(text))

        }

    }
    useEffect(()=>{
      if(isAuth && !loading && isLogin){
        alert("You Account is logged in")
        navigate(location?.state?.Form?.pathname||"/task/list")
      }
      // console.log(location?.state?.Form?.pathname||"/task/list")
    },[isAuth])
    
    
  return (
    <Box>
      {/* <Admin/> */}
      {/* { !isLogin ?<LoginForm name={"admin"} onChange={onChange}d data={data} navigate={navigate} location={location}/>
      :<Heading textAlign={'center'}>You are already logged in.</Heading>}
       */}
        <LoginForm name={"admin"} onChange={onChange}d data={data} navigate={navigate} location={location}/>
    </Box>
  )
}
