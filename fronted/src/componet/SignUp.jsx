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
    AlertIcon,

  } from '@chakra-ui/react';
import { useReducer } from 'react';
  import { Link as RLink } from 'react-router-dom';
  const initState={
    email:String,
    password:String,
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

  
  export const RegisterForm=({name,onChange,data,navigate,location})=> {
    const [text,setText]=useReducer(reducer,initState)
   
    const handleButton=()=>{
        onChange(text)
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'}>Register to your {name} account</Heading>
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
                {data?.loading && data?.isError && <Stack spacing={4}>
                    <Alert status='warning'>
                        <AlertIcon/>
                        {data?.isError}
                    </Alert>
                    </Stack>}
                    {!data?.loading && data?.isAuth  && data?.token && <Stack>
                        <Alert status='success'>
                            <AlertIcon/>
                            Your SignUp successfully
                        </Alert>
                    </Stack> }
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"  onChange={(e)=>setText({type:"email",payload:e.target.value})}/>
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
                  }} onClick={handleButton}>
                  Register
                </Button>
              </Stack>
              <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <RLink to="/login" color={'blue.400'}>LogIn</RLink>
              </Text>
            </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }