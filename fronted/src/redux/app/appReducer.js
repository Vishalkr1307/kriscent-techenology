import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCESS, GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCESS } from "./actionType"

const init={
    isLoading:false,
    task:[],
    iserror:"",
    isAdded:false,



}
export const appreducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_TASK_REQUEST:
            return {...store,isLoading:true}
        case ADD_TASK_SUCESS:
            return {...store,isLoading:false,isAdded:true,task:[...store.task,payload]}
        case ADD_TASK_FAILURE:
            return {...store,iserror:payload}
        case GET_TASK_REQUEST:
            return {...store,isLoading:true}
        case GET_TASK_SUCESS:
            return {...store,isLoading:false,task:payload}
        case GET_TASK_FAILURE:
            return {...store,isLoading:true,iserror:payload}
        default:
            return {...store}
        
    }

}