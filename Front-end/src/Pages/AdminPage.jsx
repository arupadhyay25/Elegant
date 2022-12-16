import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import AdminDrawer from '../Components/AdminDrawer'

function AdminPage() {
    
  return (
    <Box >
        <AdminDrawer/>
       <SimpleGrid  width="90%" margin={"auto"} columns={[1,1,2,3]} spacing="40px" >
           <Box boxShadow='0 0 15px 2px #DAA520' height={"150px"}  display={"flex"} width={"100%"} bg={'black'}>
              
                  <Box width={"50%"} marginLeft={"20px"} marginTop="20px">
                     <Image height={"100px"} src="https://i.pinimg.com/originals/b6/1a/4d/b61a4d35d350173b05f458b73c2f0997.gif"/>
                  </Box>

                  <Box  width={"50%"}  marginLeft={"20px"} marginTop="20px" >
                     <Box>
                     <Text fontSize={"25px"} as="b" color={"gray.400"}>
                      Oders
                     </Text>
                     </Box>
                    <Box>
                    <Text fontSize={"21px"} as="b" color={"white"}>
                      100
                     </Text>
                    </Box>
              </Box>
           </Box>

           <Box boxShadow='0 0 15px 2px #DAA520' height={"150px"}  display={"flex"} width={"100%"} bg={'black'}>
              
                  <Box width={"50%"}  marginLeft={"20px"} marginTop="20px">
                     <Image height={"100px"} src="https://miro.medium.com/max/1400/1*pv-lTJsG9wMK7Nk_AR3LYA.gif"/>
                  </Box>

                  <Box  width={"50%"}  marginLeft={"20px"} marginTop="20px" >
                     <Box>
                     <Text fontSize={"25px"} as="b" color={"gray.400"}>
                     Revenue
                     </Text>
                     </Box>
                    <Box>
                    <Text fontSize={"21px"} as="b" color={"white"}>
                      100
                     </Text>
                    </Box>
              </Box>
           </Box>

            <Box boxShadow='0 0 15px 2px #DAA520' height={"150px"}  display={"flex"} width={"100%"} bg={'black'}>
              
                  <Box width={"50%"}  marginLeft={"20px"} marginTop="20px">
                     <Image height={"100px"} src="https://cdn.dribbble.com/users/391028/screenshots/2020269/shelves.gif"/>
                  </Box>

                  <Box  width={"50%"}  marginLeft={"20px"} marginTop="20px" >
                     <Box>
                     <Text fontSize={"25px"} as="b" color={"gray.400"}>
                       Products
                     </Text>
                     </Box>
                    <Box>
                    <Text fontSize={"21px"} as="b" color={"white"}>
                      100
                     </Text>
                    </Box>
              </Box>
           </Box>

          
       </SimpleGrid>
    </Box>
  )
}

export default AdminPage