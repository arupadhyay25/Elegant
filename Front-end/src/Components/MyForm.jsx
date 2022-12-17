import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Portal, Select, Stack, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
 

function MyForm() {
  
  const [dis,setDis]=useState(false)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  // useEffect(()=>{
  //   if(data.name==""||data.email===""||data.number==""||data.password===""){
  //     setDis(true)
  //   }
  //   else{
  //    setDis(false)
  //   }
  // })
   return (
    <>
     <Stack  >
     <FormControl  width={"80%"} margin="auto">
  <FormLabel>Email address</FormLabel>
  <Input placeholder="Enter Em@il" type='email' />
 
</FormControl>

<Box>
<FormControl width={"80%"} margin="auto" >
<FormLabel>Email address</FormLabel>
<InputGroup  size='lg'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
</FormControl>
</Box>


     </Stack>
  <Button
            display={"flex"}
            
            margin="auto"
            marginTop={"20px"}
            colorScheme='teal'
            width={"60%"}
            type='submit'
            p={7}
            fontSize={"25px"}
            fontWeight={"0"}
          >
            Submit
          </Button>
  </>
   
   )
  }


  export default MyForm