import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCESS, DELETE_TASK_FAILURE, DELETE_TASK_REQUEST, DELETE_TASK_SUCESS, GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCESS, UPDATE_TASK_FAILURE, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCESS } from "./actionType";
import axios from "axios"

export const addTaskRequest=()=>({
    type:ADD_TASK_REQUEST,

})
export const addTaskSucess=(payload)=>({
    type:ADD_TASK_SUCESS,
    payload
})

export const addTaskFailure=(payload)=>({
    type:ADD_TASK_FAILURE

})
export const getTaskRequest=(payload)=>({
    type:GET_TASK_REQUEST
})
export const getTaskSucess=(payload)=>({
    type:GET_TASK_SUCESS,
    payload
})
export const getTaskFailure=(payload)=>({
    type:GET_TASK_FAILURE,
    payload
})

export const delTaskRequest=(payload)=>({
    type:DELETE_TASK_REQUEST
})
export const delTaskSucess=(payload)=>({
    type:DELETE_TASK_SUCESS,
    payload
})
export const delTaskFailure=(payload)=>({
    type:DELETE_TASK_FAILURE,
    payload
})

export const updateTaskRequest=(payload)=>({
    type:UPDATE_TASK_REQUEST
})
export const updateTaskSucess=(payload)=>({
    type:UPDATE_TASK_SUCESS,
    payload
})
export const updateTaskFailure=(payload)=>({
    type:UPDATE_TASK_FAILURE
})
export const updateTaskData=(payload,id,token)=>(dispatch)=>{
    
    dispatch(updateTaskRequest())
    axios.put(`/tasks/${id}`, payload,{
        headers:{Authorization: `Bearer ${token}`}
    }).then((res)=>dispatch(getTaskData()))
}


export const addTaskData=(payload,token)=>(dispatch)=>{
    dispatch(addTaskRequest())
    axios.post("/tasks", payload,{
        headers:{Authorization: `Bearer ${token}`}}
        
    ).then((res)=>dispatch(addTaskSucess(res.data))).catch((err)=>dispatch(addTaskFailure(err.response.data)))
    
}
export const getTaskData=(payload)=>(dispatch)=>{
    dispatch(getTaskRequest())
    axios.get("/tasks").then((res)=>dispatch(getTaskSucess(res.data))).catch((err)=>getTaskFailure(err.data))
}

export const delTaskData=(payload,token)=>(dispatch)=>{
    axios.delete(`/tasks/${payload}`,{
        headers:{Authorization: `Bearer ${token}`}
    }).then((res)=>dispatch(getTaskData()))
}