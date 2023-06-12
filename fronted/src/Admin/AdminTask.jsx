import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
    option,
    Alert,
    AlertIcon
  } from '@chakra-ui/react';
  import {useDispatch, useSelector} from "react-redux"
import { useEffect, useReducer } from 'react';
import { employeeALlData } from '../redux/auth/action';
import { addTaskData } from '../redux/app/action';
import { store } from '../redux/store';
import { Admin } from './Admin';
const initState={
  title:"",
  deadline:"",
  employee_id:""
}
const reducer=(store,{type,payload})=>{
  switch(type){
    case "title":
      return {...store,title:payload}
    case "deadline":
      return {...store,deadline:payload}
    case "employee_id":
      return {...store,employee_id:payload}
    default:
      return {...store}
  }

}
  
  export const AdminTask=()=>{
    const [text,setText]=useReducer(reducer,initState)
   
    

    
    const {employee,token}=useSelector((store)=>store.auth)
    const {isloading,isError,isAdded}=useSelector((store)=>store.app)
    const dispatch=useDispatch()
    const handleTask=()=>{
      dispatch(addTaskData(text,token))
      
      
    }
    
    
    useEffect(()=>{
      if(employee.length==0){
        dispatch(employeeALlData())

      }


    },[employee,dispatch])
    return (
      <>
      {/* <Admin/> */}
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Add-employee-Tasks</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              {isAdded && !isloading && !isError && text && <Stack>
                <Alert status='success'>
                  <AlertIcon/>
                  Your Task has been successfully added
                  

                </Alert>
                </Stack>}
              <FormControl id="title">
                <FormLabel>Title</FormLabel>
                <Input type="string" onChange={(e)=>setText({type:"title",payload:e.target.value})}/>
              </FormControl>
              <FormControl id="deadline">
                <FormLabel>Deadline</FormLabel>
                <Input type="datetime-local" onChange={(e)=>setText({type:"deadline",payload:e.target.value})} />
              </FormControl>
              <FormControl id="employee-id">
              <Select placeholder='Employee-id' onChange={(e)=>setText({type:"employee_id",payload:e.target.value})}>
                {employee.length>0 && employee.map((cv)=><option key={cv._id} value={cv._id}>{cv._id.slice(-7,-1)}-{cv.email.slice(0,5)}</option>)}
              </Select>
              </FormControl>

              <Stack spacing={10}>
                
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleTask}>
                  Add-Task
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </>
    );
  }