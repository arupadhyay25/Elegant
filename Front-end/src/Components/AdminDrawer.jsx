import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {BiHomeAlt} from "react-icons/bi"
import {MdProductionQuantityLimits,MdAddCircleOutline} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import { Link } from 'react-router-dom'
function AdminDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button  onClick={onOpen}>
         <GiHamburgerMenu/>
      </Button>
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader bg={"#968128"} borderBottomWidth='1px'>
        Elegant
      </DrawerHeader>
      <DrawerBody bg={"blackAlpha.100"}>
          <Stack spacing={4}>
              <Button borderBottom={"5px solid #968128"} leftIcon={<BiHomeAlt/>}>
                 <Link to="/adminpage">
                 Dashboard
                 </Link>
              </Button>
              <Button borderBottom={"5px solid #968128"} leftIcon={<CgProfile/>}>
              <Link to="/profile">
                 Profile
                  </Link>
              </Button>
               
               <Button  borderBottom={"5px solid #968128"} leftIcon={<MdAddCircleOutline/>}>
               <Link to="/addproducts">
                ADD PRODUCTS
                </Link>
              </Button>
              
              <Button borderBottom={"5px solid #968128"} leftIcon={<MdProductionQuantityLimits/>}>
                 <Link to="/">
                 Products
                 </Link>
              </Button>
              
          </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
    </>
  )
}

export default AdminDrawer