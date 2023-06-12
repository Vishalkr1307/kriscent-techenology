import React, { useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Button,
    Box,
    Container,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { delTaskData, getTaskData } from '../redux/app/action'
import { store } from '../redux/store'
import { Admin } from './Admin'

export const AdminList = () => {
    const {isLoading,task}=useSelector((store)=>store.app)
   const {token}=useSelector((store)=>store.auth)
   const tdStyle={
    maxWidth:"40px",
    overflow: "auto",

   }
    

    const dispatch=useDispatch()
    useEffect(()=>{
       if(task){
        dispatch(getTaskData())
       }
        

    },[task,dispatch])
    const handleDelete=(id)=>{
        
        dispatch(delTaskData(id,token))
    }
  return (
    <Container maxW={'fit-content'}>
    {/* <Admin/> */}
    
    <TableContainer width={'fit-content'} >
        <Heading textAlign={'center'}>Admin-task-list</Heading>
        <Table >
            <TableCaption>Task-List of employee</TableCaption>
            <Thead>
                <Tr backgroundColor={"yellowgreen"}>
                    <Th>title</Th>
                    <Th>deadline</Th>
                    <Th>employee-id</Th>
                    <Th>employee-name</Th>
                    <Th>Status</Th>
                    <Th>Comment</Th>
                    <Th>Button</Th>
                </Tr>
            </Thead>
            {task.length>0 && task.map((cv)=><Tbody key={cv._id}  >
                <Tr m={'auto'}>
                    <Th >{cv.title}</Th>
                    <Td >{cv.deadline}</Td>
                    <Td>{cv.employee_id._id}</Td>
                    <Td>{cv.employee_id.email}</Td>
                    <Td>{cv?.status}</Td>
                    <Td>{cv?.comment}</Td>
                    <Td><Button onClick={()=>handleDelete(cv._id)}>Del</Button></Td>
                </Tr>

            </Tbody>)}

        </Table>
    </TableContainer>
    </Container>
  )
}
