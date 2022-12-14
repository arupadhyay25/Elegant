import { Box, Button, Image, Input, InputGroup, InputRightElement, Select, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {MdOutlineMailOutline} from "react-icons/md"

const initialData={
    name:"",
    number:"",
    email:"",
    password:""
}
function Signup() {
    const [show, setShow] = React.useState(false)
    const [data,setData]= useState(initialData)
    const [dis,setDis]=useState(false)
   
    const handleData=(e)=>{
        const {name,type,value}= e.target
        const val = type ==="number" ? Number(value) : value;
        
        setData({
            ...data,
            [name]:val
        })
        
    }
    
    const handleProceed=()=>{
       
    }
    const handleClick = () => setShow(!show)
  return (
    <SimpleGrid   columns={[1,1,2,2]}  height="auto" width={"60%"} justifyContent="space-evenly" margin="auto"   spacing='40px'>
    <Box bg={"orange.100"} width={"100%"}  >
       
        <Box >
          <Image height={"400px"} src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"/>
        </Box> 
    </Box>
    <Box  width={"100%"}   >
     
         <Box display={"flex"}>
         <Text textAlign={"justify"} fontSize={"25px"} fontWeight={"bold"} >
         Sign up
        </Text>
         </Box>
       <Box marginTop={"15px"} display={"flex"}>
       <Text textAlign={"justify"} fontSize={"20px"} as={"b"}>
        Hi new buddy, let's get you started with the Elegance!
        </Text>
       </Box>
       <Stack marginTop={"40px"} spacing={3}>
        <Input name='name' value={data.name} onChange={handleData} border="0"  borderBottom={"1px solid black"} borderRadius={"0"} placeholder='Name' size='lg' />

        <Box  width={"100%"} display={"flex"} border="0" margin="auto" marginTop={"30px"} borderBottom={"1px solid black"}  height={"60px"} alignItems={"center"} justifyContent="space-evenly">
    
            <Select bg={"gray.300"} borderRadius={"0"} height="10%" width={"22%"} placeholder='+91'>
            <option>+971</option>
            <option>+1</option>
            <option>+1</option>
            </Select>
            <Input name="number" value={data.number} onChange={handleData} width={"60%"} border={"0"} borderRadius={"0"} fontWeight={"bold"} placeholder="Enter Mobile Number"/>
            
        </Box>

        <Input name='email' value={data.email} onChange={handleData} border="0" borderBottom={"1px solid black"} borderRadius={"0"} placeholder='Email Id' size='lg' />

        <InputGroup size='lg'>
        <Input
           name='password'
           value={data.password}
         borderBottom={"1px solid black"}
            borderRadius={"0"}
            border="0"
            pr='4.5rem'
            onChange={handleData}
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
            </Button>
        </InputRightElement>
      </InputGroup>
        </Stack>

        <Button
            disabled={dis}
            mt={4}
            onClick={handleProceed}
            colorScheme='teal'
            width={"100%"}
            p={7}
            fontSize={"25px"}
            fontWeight={"0"}
          >
            Proceed
          </Button>
    </Box>
      

    </SimpleGrid>
  )
}

export default Signup