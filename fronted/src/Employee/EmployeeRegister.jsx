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
    Alert,
    AlertIcon
  } from '@chakra-ui/react';
   import { Link as RLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeeLogainData, employeeRegisterData } from '../redux/auth/action';
  const initState={
    email:"",
    password:"",
  }
  const reducer=(store,{type,payload})=>{
    switch(type){
        case "email":
            return {...store,email: payload}
        case "password":
            return {...store,password: payload}
        default:
            return {...store}
    }

  }
  
  export const EmployeeRegister=()=> {
    const [text,setText]=useReducer(reducer,initState)
    const {Etoken,isEloading,isEAuth,isEmpError}=useSelector((store)=>store.auth)
    console.log(Etoken,isEloading,isEAuth,isEmpError)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const location=useLocation()
    const handleButton=()=>{
       dispatch(employeeRegisterData(text))
    }
    useEffect(()=>{
        if(isEAuth){
            alert("you employee account successfully created")
            navigate("/employeelogin")
        }

    },[isEAuth])
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'}>Register to Employee account</Heading>
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
            {isEloading && isEmpError && <Stack spacing={4}>
                    <Alert status='warning'>
                        <AlertIcon/>
                        {isEmpError}
                    </Alert>
                    </Stack>}
                    {isEloading && isEAuth && Etoken && <Stack>
                        <Alert status='success'>
                            <AlertIcon/>
                            Your SignUp successfully
                        </Alert>
                    </Stack> }
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setText({type:"email",payload:e.target.value})} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>setText({type:"password",payload:e.target.value})} />
              </FormControl>
              <Stack spacing={10}>
                
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleButton} >
                  Register
                </Button>
              </Stack>
              <Stack pt={6}>
              <Text align={'center'}>
                Have A account? <RLink to="/employeelogin" color={'blue.400'}>Login</RLink>
              </Text>
            </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }