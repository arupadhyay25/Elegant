import { Box, Button, FormControl, FormLabel, Image, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminDrawer from '../Components/AdminDrawer'

function AddProducts() {
    const [dis,setDis]=useState(false)
  return (
    <>
    <AdminDrawer/>
    <SimpleGrid   columns={[1,1,2,2]}  height="auto" width={"90%"} justifyContent="space-evenly" margin="auto"   spacing='40px'>
    <Box  bg={"blue.50"} width={"100%"}  >
       
        <Box >
          <Image height={"400px"} src="https://png.pngtree.com/png-clipart/20190116/ourlarge/pngtree-wooden-signage-direction-sign-attractions-sign-cartoon-illustration-png-image_408083.jpg"/>
        </Box> 
    </Box>
    <Box  width={"100%"}   >
     
         <Box display={"flex"}>
         <Text textAlign={"justify"} fontSize={"35px"} fontWeight={"bold"} >
         Let's Add Some Products
        </Text>
         </Box>
       
        <Box>
         <Stack  margin="auto" spacing={5}>
         <FormControl isRequired>
          <FormLabel>Product Title</FormLabel>
            <Input borderBottom={"5px solid #968128"} placeholder='Product Name' size='lg' />
           </FormControl>
            <FormControl isRequired>
            <FormLabel>Product Image</FormLabel>
            <Input borderBottom={"5px solid #968128"}  type="file" placeholder='Product Image ' size='lg' />
            </FormControl>
            
            <FormControl isRequired>
             <FormLabel>Product Price</FormLabel>
            <Input borderBottom={"5px solid #968128"} placeholder='Price' size='lg' />
            </FormControl>

            <FormControl >
             <FormLabel>Product Discription</FormLabel>
            <Input borderBottom={"5px solid #968128"} placeholder='Discription' size='lg' />
            </FormControl>
        </Stack>
      </Box> 

        <Button
            disabled={dis}
            mt={4}
           
            bg="#968128"
            width={"100%"}
            p={7}
            fontSize={"25px"}
            fontWeight={"0"}
          >
            Proceed
          </Button>
    </Box>
      

    </SimpleGrid>
    </>
  )
}

export default AddProducts


