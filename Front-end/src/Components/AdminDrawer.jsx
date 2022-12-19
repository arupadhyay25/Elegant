import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHomeAlt } from "react-icons/bi";
import { MdProductionQuantityLimits, MdAddCircleOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
function AdminDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GiHamburgerMenu onClick={onOpen} fontSize={"40px"} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg={"#968128"} borderBottomWidth="1px">
            Elegant
          </DrawerHeader>
          <DrawerBody bg={"blackAlpha.100"}>
            <br />
            <Stack spacing={4}>
              <InputGroup>
                <InputRightAddon children={<BiHomeAlt fontSize={"25px"} />} />
                <Link to="/adminpage">
                  <Button variant="ghost" fontSize="25px" width="100%">
                    Dashboard
                  </Button>
                </Link>
              </InputGroup>
              <InputGroup>
                <InputRightAddon
                  children={<MdAddCircleOutline fontSize={"25px"} />}
                />
                <Link to="/addproducts">
                  <Button
                    colorScheme="#968128"
                    variant=""
                    fontSize="25px"
                    width="100%"
                  >
                    Add Product
                  </Button>
                </Link>
              </InputGroup>
              <InputGroup>
                <InputRightAddon children={<CgProfile fontSize={"25px"} />} />
                <Link to="/profile">
                  <Button
                    colorScheme="#968128"
                    variant="ghost"
                    fontSize="25px"
                    width="100%"
                  >
                    Edit Product
                  </Button>
                </Link>
              </InputGroup>

              <InputGroup>
                <InputRightAddon
                  children={<MdProductionQuantityLimits fontSize={"25px"} />}
                />
                <Link to="/">
                  <Button
                    colorScheme="#968128"
                    variant="ghost"
                    fontSize="25px"
                    width="100%"
                  >
                    Products
                  </Button>
                </Link>
              </InputGroup>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AdminDrawer;
