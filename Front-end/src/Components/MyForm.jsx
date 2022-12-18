import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Portal, Select, Spinner, Stack, Text, useToast } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/useContext"

function MyForm() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [isLoading,setisLoading]= useState(false)
  const toast = useToast()
  const navigate = useNavigate()
  const [loginData,setLoginData]=useState([])
  const {login,setName,setEmail}= useContext(AuthContext)
  const [useData,setUserData]=useState({
    email:"",
    password:""

  })
  useEffect(()=>{
    axios.get('https://real-blue-kingfisher-gear.cyclic.app/user')
    .then(function (response) {
      setLoginData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])
  

  
  const handleChange=(e)=>{
    const {name,type,value}= e.target
    const val = type ==="number" ? Number(value) : value;
    
    setUserData({
        ...useData,
        [name]:val
    })
    
  }
  const loadderFun=()=>{
    setisLoading(true)
   setTimeout(()=>{
    setisLoading(false)
   },3000)
   
}
   const handleSubmit=()=>{
    loadderFun()
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
     const u = loginData.find((item)=>useData.email==item.email)
     setName(u.name)
     setEmail(u.email)
     login()
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
             {isLoading ?  <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='red.200'
            color='blue.500'
            size='xl'
            />:"Submit"}
            
          </Button>
  </>
   
   )
  }


  export default MyForm