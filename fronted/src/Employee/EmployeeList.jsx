import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskData } from '../redux/app/action'
import { Link } from 'react-router-dom'
import { UpdateItem } from '../componet/UpdateList'
import { store } from '../redux/store'
import { getLocalData } from '../utlies/storage'

export const EmployeeList = () => {
    const {isLoading,task}=useSelector((store)=>store.app)
    const Etoken=getLocalData("Etoken")
    const dispatch=useDispatch()
    useEffect(()=>{
        if(task.length==0){
            dispatch(getTaskData())

        }
        
    },[task,dispatch])
  return (
    <Box>
        <Heading textAlign={'center'}>Employee-Task-list</Heading>
        <TableContainer>
            <Table>
                <TableCaption>Employee work list</TableCaption>
                <Thead>
                    <Tr>
                        <Th>title</Th>
                        <Th>deadline</Th>
                        <Th>employe_id</Th>
                        <Th>Status</Th>
                        <Th>comment</Th>
                        <Th>Update-Status</Th>
                    </Tr>

                </Thead>
                {task.length>0 && task.map((cv)=>
                    <Tbody key={cv._id} >
                            <Tr>
                        
                                <Td>{cv?.title}</Td>
                                <Td>{cv?.deadline}</Td>
                                <Td>{cv?.employee_id?.email}</Td>
                                <Td>{cv?.status}</Td>
                                <Td>{cv?.comment}</Td>
                                <Td><UpdateItem id={cv._id} token={Etoken}/></Td>

                        
                            </Tr>
                    </Tbody>
                )}
            </Table>
        </TableContainer>


    </Box>
  )
}
