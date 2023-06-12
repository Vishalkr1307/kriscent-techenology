import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    IconButton,
    Select,
    FormControl,
    FormLabel,
    Input,
    Textarea
  } from '@chakra-ui/react'
  import {EditIcon} from "@chakra-ui/icons"
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { updateTaskData } from '../redux/app/action'
  const initState={
    status:"",
    comment:""
  }
  const reducer=(store,{type,payload})=>{
    switch(type){
        case "status":
            return {...store,status:payload}
        case "comment":
            return {...store,comment:payload}
    }

  }
  export const UpdateItem=({id,token})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [text,setText]=useReducer(reducer,initState)
    const dispatch=useDispatch()
    const handleUpdate=()=>{
        dispatch(updateTaskData(text,id,token))
        onClose()
    }
    
    return (
      <>
         <IconButton variant={'ghost'} icon={<EditIcon/>} boxSize={8} colorScheme='blue' onClick={onOpen}/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change status and add Comment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Select placeholder='Choose the Status' value={text.status} onChange={(e)=>setText({type:"status",payload:e.target.value})}>
                    <option value={'Complete'}>Complete</option>
                    <option value={'InComplete'}>Incomple</option>
                </Select>
                <FormControl id='Add-comment' mt={2}>
                    <FormLabel>Add-comment</FormLabel>
                    <Textarea value={text.comment} placeholder='add comment' onChange={(e)=>setText({type:"comment",payload:e.target.value})}/>
                </FormControl>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={handleUpdate}>Update-task</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }