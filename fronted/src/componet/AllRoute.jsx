import React from 'react'
import {Route,Routes} from "react-router-dom"
import { AdminLogin } from '../Admin/AdminLogin'
import { AdminRegister } from '../Admin/AdminRegister'
import { AdminTask } from '../Admin/AdminTask'
import { Admin } from '../Admin/Admin'
import { ReqAuth } from './ReqAuth'
import { AdminList } from '../Admin/AdminList'
import { EmployeeLogin } from '../Employee/EmployeeLogin'
import { EmployeeRegister } from '../Employee/EmployeeRegister'
import { EmployeeList } from '../Employee/EmployeeList'
import { EmployeeAuth } from './EmployeeAuth'

export const AllRoute = () => {
  return (
    <>
    {/* <Admin/> */}
    <Routes>
        <Route path='/login' element={<AdminLogin/>}></Route>
        <Route path='/register' element={<AdminRegister/>}></Route>
        <Route path='/task' element={<ReqAuth><AdminTask/></ReqAuth>}></Route>
        <Route path='/task/list' element={<AdminList/>}></Route>
        <Route path='/employeelogin' element={<EmployeeLogin/>}></Route>
        <Route path='/employeeregister' element={<EmployeeRegister/>}></Route>
        <Route path='/employeelist' element={<EmployeeAuth><EmployeeList/></EmployeeAuth>}></Route>
        
    </Routes>
    </>
  )
}
