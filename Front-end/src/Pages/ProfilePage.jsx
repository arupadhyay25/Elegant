import { Avatar, Box, Button, SimpleGrid, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import AdminDrawer from '../Components/AdminDrawer'
import { AuthContext } from '../Context/useContext'

function ProfilePage() {
  const {userName,userEmail}=useContext(AuthContext)
  return (
    <>
    <AdminDrawer/>
      <Box
    boxShadow='0 0 15px 2px black'
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='90%'
    margin={"auto"}
    height={"50vh"}
    bgImage="url('https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80')"
    bgPosition='center'
    bgSize={"cover"}
    bgRepeat='no-repeat'
    
  >
 
      
      <SimpleGrid width={"60%"}  columns={[1,1,2,2]}>
        <Box>
        <WrapItem>
            <Avatar size='xl' name='Christian Nwamba' src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />{' '}
        </WrapItem>
        </Box>
        <Box>
            <Box>
                <Text fontSize={"25px"}>
                    Name : {userName ? userName : ""}
                </Text>
            </Box>
            <Box>
                <Text fontSize={"25px"}>
                    E-mail :{userEmail ? userEmail:""}
                </Text>
            </Box>
             <Button size={"sm"}>
                Edit
             </Button>
        </Box>
      </SimpleGrid>
  
  </Box>
    </>
  )
}

export default ProfilePage