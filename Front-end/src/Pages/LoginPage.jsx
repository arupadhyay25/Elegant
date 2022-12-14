
import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Link, Select, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import MyForm from '../Components/MyForm'
import {MdOutlineMailOutline} from "react-icons/md"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import jwt_decode  from "jwt-decode"
import { useEffect } from 'react'
import { useState } from 'react'
function LoginPage() {
  const [user,setUser]=useState({})
  const handleCallback=(response)=>{
    console.log("Encoded jwt id token"+response.credential)
    let userObj = jwt_decode(response.credential)
    console.log(userObj)
    setUser(userObj)
    // document.getElementById("signinDiv").hidden=true
  }
  useEffect(()=>{
    /*global google */
     google.accounts.id.initialize({
      client_id:"976173934472-0njfsrbeup1vktmf08h56p5v9ggqsfk5.apps.googleusercontent.com",
      callback: handleCallback
     })
     google.accounts.id.renderButton(
      document.getElementById("signinDiv"),
      {theme:"outline",size:"large"}
     )
  },[])
  return (
      
       <SimpleGrid columns={[1,1,2,2]}  height="auto" width={"95%"} justifyContent="space-between" margin="auto"   spacing='40px'>
        <Box width={"100%"}  >
           <Box>
              <Text fontSize={"30px"} as={"b"}>
              Welcome to the world of ELEGANT!
              </Text>
            </Box>
            <Box marginTop={"20px"}>
              <Image src="https://images.bewakoof.com/web/group-19-1617704502.png"/>
              </Box> 
        </Box>
        <Box width={"100%"}   >
          <VStack spacing={3}>
          <Text fontSize={"25px"} fontWeight={"medium"} >
             Log in / Sign up
            </Text>
            <Text fontSize={"20px"} color="gray">
            for Latest trends, exciting offers and everything Bewakoof!
            </Text>
          </VStack>
             <MyForm/>
              
             <Box marginTop={"70px"}>
             <Button border={"2px solid gray"} width={"60%"} leftIcon={<MdOutlineMailOutline/>}  variant='outline'>
                  CONTINUE WITH EMAIL
            </Button>
            
            <Stack  width={"60%"}  margin={"auto"} marginTop={"20px"} direction='row' spacing={4} justifyContent={"space-between"}>
              <Button id='signinDiv' width={"60%"} >
                GOOGLE  
              </Button>
              <Button width={"40%"} leftIcon={<BsFacebook/>} variant='outline'>
               FACEBOOK
              </Button>
            </Stack>
               <Box width={"60%"} margin="auto" marginTop={"15px"}>
               <Text fontSize={"13px"}>
               By creating an account or logging in, you agree with Bewakoof's <Link  fontWeight="medium" color={"teal"} href='https://chakra-ui.com'>
               Terms and Conditions 
               </Link> and  <Link color={"teal"} fontWeight="medium" href='https://chakra-ui.com'>
                Privacy Policy. 
               </Link> 
               </Text>
               </Box>
             </Box>
             
        </Box>
          
    
        </SimpleGrid>
      
  )
}

export default LoginPage