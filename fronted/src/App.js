import logo from './logo.svg';
import './App.css';
import { Admin } from './Admin/Admin';
import { AllRoute } from './componet/AllRoute';
import { Box, Heading, Select } from '@chakra-ui/react';
import { AdminHome } from './Admin/AdminHome';
import { EmployeeHome } from './Employee/EmployeeHome';

function App() {
  return (
    <Box>
      <Admin/>
      <EmployeeHome/>
      <AllRoute/>

      
    
    
    
   
     
    </Box>
  );
}

export default App;
