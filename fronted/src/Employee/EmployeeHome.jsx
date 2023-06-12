import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { AllRoute } from './AllRoute';



export const EmployeeHome=()=> {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isEAuth}=useSelector((store)=>store.auth)
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>EmployeePage</Box>
          
          
          <Button>

          < RLink to="/employeelist">Employee-Task-List</RLink>
          </Button>
          {isEAuth?<Button colorScheme='teal'>Login Success</Button>:<Button>

          < RLink to="/employeelogin">Employee-Login</RLink>
          </Button>}
          {isEAuth?"":<Button>

          < RLink to="/employeeregister">Employee-SignUp</RLink>
          </Button>}


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button onClick={()=>{
                localStorage.clear("Etoken")
                window.location.reload()
              }} >LogOut</Button>


              
            </Stack>
          </Flex>
        </Flex>
      </Box>
      
      
    </>
  );
}