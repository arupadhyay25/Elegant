import { Avatar, Box, Button, SimpleGrid, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'
import AdminDrawer from '../Components/AdminDrawer'

function ProfilePage() {
  return (
    <>
    <AdminDrawer/>
      <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='90%'
    margin={"auto"}
    height={"50vh"}
    bgImage="url('https://wallpapercave.com/wp/wp2558177.png')"
    bgPosition='center'
    bgSize={"cover"}
    bgRepeat='no-repeat'
    
  >
 
      
      <SimpleGrid width={"40%"}  columns={[1,1,2,2]}>
        <Box>
        <WrapItem>
            <Avatar size='xl' name='Christian Nwamba' src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />{' '}
        </WrapItem>
        </Box>
        <Box>
            <Box>
                <Text fontSize={"25px"}>
                    Name :
                </Text>
            </Box>
            <Box>
                <Text fontSize={"25px"}>
                    E-mail :
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