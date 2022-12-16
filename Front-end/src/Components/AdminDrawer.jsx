import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {BiHomeAlt} from "react-icons/bi"
import {MdProductionQuantityLimits,MdAddCircleOutline} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
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
      <DrawerBody bg={"black"}>
          <Stack spacing={4}>
              <Button borderBottom={"5px solid #968128"} leftIcon={<BiHomeAlt/>}>
                 DashBoard
              </Button>
              <Button borderBottom={"5px solid #968128"} leftIcon={<CgProfile/>}>
                  Profile
              </Button>
              <Button borderBottom={"5px solid #968128"} leftIcon={<MdAddCircleOutline/>}>
                ADD PRODUCTS
              </Button>
              <Button borderBottom={"5px solid #968128"} leftIcon={<MdProductionQuantityLimits/>}>
                 Products
              </Button>
              
          </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
    </>
  )
}

export default AdminDrawer