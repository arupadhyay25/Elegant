import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Portal, Select, Stack, Text, useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

function MyForm() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()
  const navigate = useNavigate()
  const [useData,setUserData]=useState({
    email:"",
    password:""

  })
  const handleChange=(e)=>{
    const {name,type,value}= e.target
    const val = type ==="number" ? Number(value) : value;
    
    setUserData({
        ...useData,
        [name]:val
    })
    
  }
   const handleSubmit=()=>{

axios({
  method: 'post',
  url: 'https://real-blue-kingfisher-gear.cyclic.app/user/login',
  data: useData
}).then((res) =>{
   if(res.data.token){
    toast({
      position: 'top',
      title: "Logged-in Succesful",
      description: "",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
     navigate("/")
   }
   else{
    toast({
      position: 'top',
      title: "Account Not found",
      description: "Create your own account",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    navigate("/signup")
   }
})

   }
  
   return (
    <>
     <Stack  >
     <FormControl  width={"80%"} margin="auto">
  <FormLabel>Email address</FormLabel>
  <Input value={useData.email} onChange={handleChange} name="email" placeholder="Enter Em@il" type='email' />
 
</FormControl>

<Box>
<FormControl width={"80%"} margin="auto" >
<FormLabel>Password</FormLabel>
<InputGroup  size='lg'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        value={useData.password}
        name="password"
        onChange={handleChange}
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
  </>
   
   )
  }


  export default MyForm