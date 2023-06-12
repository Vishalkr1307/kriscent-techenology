import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCESS, ADMIN_SIGNUP_FAILURE, ADMIN_SIGNUP_REQUEST, ADMIN_SIGNUP_SUCESS, EMPLOYEE_ALL_DATA_FAILURE, EMPLOYEE_ALL_DATA_REQUEST, EMPLOYEE_ALL_DATA_SUCESS, EMPLOYEE_LOGIN_FAILURE, EMPLOYEE_LOGIN_REQUEST, EMPLOYEE_LOGIN_SUCESS, EMPLOYEE_SIGNUP_FAILURE, EMPLOYEE_SIGNUP_REQUEST, EMPLOYEE_SIGNUP_SUCESS } from "./actionType";
import axios from "axios"

export const adminSignUpRequest=(payload)=>({
    type:ADMIN_SIGNUP_REQUEST,
    payload

})
export const adminSignUpSucess=(payload)=>({
    type:ADMIN_SIGNUP_SUCESS,
    payload
})
export const adminSignUpFailure=(payload)=>({
    type:ADMIN_SIGNUP_FAILURE,
    payload
})

export const employeeSignUpRequest=(payload)=>({
    type:EMPLOYEE_SIGNUP_REQUEST,
    payload

})
export const employeeSignUpSucess=(payload)=>({
    type:EMPLOYEE_SIGNUP_SUCESS,
    payload
})
export const employeeSignUpFailure=(payload)=>({
    type:EMPLOYEE_SIGNUP_FAILURE,
    payload
})
export const employeeLoginRequest=(payload)=>({
    type:EMPLOYEE_LOGIN_REQUEST,
    payload

})
export const employeeLoginSucess=(payload)=>({
    type:EMPLOYEE_LOGIN_SUCESS,
    payload
})
export const employeeLoginFailure=(payload)=>({
    type:EMPLOYEE_LOGIN_FAILURE,
    payload
})
export const adminLoginRequest=(payload)=>({
    type:ADMIN_LOGIN_REQUEST,
    payload

})
export const adminLoginSucess=(payload)=>({
    type:ADMIN_LOGIN_SUCESS,
    payload
})
export const adminLoginFailure=(payload)=>({
    type:ADMIN_LOGIN_FAILURE,
    payload
})
export const employeeAlldataRequest=(payload)=>({
    type:EMPLOYEE_ALL_DATA_REQUEST,
    payload
})
export const employeeAlldataSucesss=(payload)=>({
    type:EMPLOYEE_ALL_DATA_SUCESS,
    payload
})
export const employeeAlldataFailure=(payload)=>({
    type:EMPLOYEE_ALL_DATA_FAILURE,
    payload
});
export const employeeLogainData=(payload)=>(dispatch)=>{
    dispatch(employeeLoginRequest())
    axios.post("/employee/login",payload).then((res)=>dispatch(employeeLoginSucess(res.data))).catch((err)=>dispatch(employeeLoginFailure(err.response.data)))

}
export const employeeALlData=(payload)=>(dispatch)=>{
    dispatch(employeeAlldataRequest())
    axios.get("/employee").then((res)=>dispatch(employeeAlldataSucesss(res.data)))
    
}
export const employeeRegisterData=(payload)=>(dispatch)=>{
    dispatch(employeeSignUpRequest())
    axios.post("/employee/register",payload).then((res)=>dispatch(employeeSignUpSucess(res.data))).catch((err)=>dispatch(employeeSignUpFailure(err.response.data)))
}

export const adminLoginData=(payload)=>(dispatch)=>{
    dispatch(adminLoginRequest())
    axios.post("/auth/login",payload).then((res)=>dispatch(adminLoginSucess(res.data))).catch((err)=>dispatch(adminLoginFailure(err.response.data)))
    
}
export const adminRegisterData=(payload)=>(dispatch)=>{
    dispatch(adminSignUpRequest())
    axios.post("/auth/register",payload).then((res)=>dispatch(adminSignUpSucess(res.data))).catch((err)=>dispatch(adminSignUpFailure(err.response.data)))
}