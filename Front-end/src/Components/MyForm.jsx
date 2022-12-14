import { Box, Button, FormControl, FormErrorMessage, FormLabel, Image, Input, Menu, MenuButton, MenuItem, MenuList, Portal, Select, Text } from "@chakra-ui/react"
 

function MyForm() {
   return (
    <>
    <Box  width={"60%"} display={"flex"} margin="auto" marginTop={"30px"} border="1px solid gray" borderRadius={"5px"} height={"60px"} alignItems={"center"} justifyContent="space-evenly">
    
    <Select bg={"gray.300"} borderRadius={"0"} height="10%" width={"22%"} placeholder='+91'>
      <option>+971</option>
      <option>+1</option>
      <option>+1</option>
    </Select>
    <Input width={"60%"} border={"0"} borderRadius={"0"} fontWeight={"bold"} placeholder="Enter Mobile Number"/>
    
  </Box>
  <Button
            mt={4}
            
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