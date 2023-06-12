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
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RLink } from 'react-router-dom';
import { AdminList } from './AdminList';
import { useScroll } from 'framer-motion';
import { useSelector } from 'react-redux';
// import { AllRoute } from './AllRoute';



export const Admin=()=> {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuth}=useSelector((store)=>store.auth)
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Admin</Box>
          <Button>
            <RLink to={`/task`}>Admin-ADD-Task</RLink>

          </Button>
          <Button>

          < RLink to="/task/list">Admin-Task-List</RLink>
          </Button>
          {isAuth?<Button colorScheme='teal'>LoginSuccess</Button>:<Button>

          < RLink to="/login">Admin-Login</RLink>
          </Button>}
          {isAuth?"":<Button>

          < RLink to="/register">Admin-SignUp</RLink>
          </Button>}


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button onClick={()=>{
                localStorage.clear("token")
                window.location.reload()
              }} >LogOut</Button>


              
            </Stack>
          </Flex>
        </Flex>
      </Box>
      
      
    </>
  );
}