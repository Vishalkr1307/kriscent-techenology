import { getLocalData, postLocalData } from "../../utlies/storage"
import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCESS, ADMIN_SIGNUP_FAILURE, ADMIN_SIGNUP_REQUEST, ADMIN_SIGNUP_SUCESS, EMPLOYEE_ALL_DATA_SUCESS, EMPLOYEE_LOGIN_FAILURE, EMPLOYEE_LOGIN_REQUEST, EMPLOYEE_LOGIN_SUCESS, EMPLOYEE_SIGNUP_FAILURE, EMPLOYEE_SIGNUP_REQUEST, EMPLOYEE_SIGNUP_SUCESS } from "./actionType"

const init={
    loading:false,
    isAuth:getLocalData("token")?true:false,
    token:getLocalData("token")||"",
    isError:"",
    isLogin:false,
    isElogin:false,
    employee:[],
    isEloading:false,
    isEAuth:getLocalData("Etoken")?true:false,
    Etoken:getLocalData("Etoken")||"",
    isEmpError:""

}
export const authReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADMIN_SIGNUP_REQUEST:
            return {...store,loading:true}
        case ADMIN_SIGNUP_SUCESS:
            return {...store,loading:false,isAuth:true,token:payload.token}
        case ADMIN_SIGNUP_FAILURE:
            return {...store,isError:payload,loading:true}

        case ADMIN_LOGIN_REQUEST:
            return {...store,loading:true}
        case ADMIN_LOGIN_SUCESS:
            postLocalData("token",payload.token)
            return {...store,isLogin:true,loading:false,isAuth:true,token:payload.token}
        case ADMIN_LOGIN_FAILURE:
            return {...store,isError:payload,loading:true}
        case EMPLOYEE_ALL_DATA_SUCESS:
            return {...store,employee:payload}
        case EMPLOYEE_SIGNUP_REQUEST:
            return {...store,isEloading:true}
        case EMPLOYEE_SIGNUP_SUCESS:
            postLocalData("Etoken",payload.token)

            return {...store,isEloading:false,isEAuth:true,Etoken:payload.token}
        case EMPLOYEE_SIGNUP_FAILURE:
            return {...store,isEloading:true,isEmpError:payload}
        case EMPLOYEE_LOGIN_REQUEST:
            return {...store,isEloading:true}
        case EMPLOYEE_LOGIN_SUCESS:
            postLocalData("Etoken",payload.token)
            return {...store,isEloading:false,isEAuth:true,Etoken:payload.token,isElogin:true}
        case EMPLOYEE_LOGIN_FAILURE:
            return {...store,isEloading:true,isEmpError:payload}

            

            
        default:
            return {...store}
    }

}