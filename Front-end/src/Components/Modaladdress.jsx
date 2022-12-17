import React from "react";
import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Paymentpage } from "../Pages/Paymentpage";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BackdropAdress() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  const notify = () => toast("Wow so easy!");

  let handleexit = () => {
    localStorage.clear();
    toast.success("Added to Cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
    notify();
    setTimeout(function () {
      onClose();
    }, 1000);
    setTimeout(function () {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Button w={"100%"} colorScheme={"teal"} onClick={onOpen}>
        Continue
      </Button>
      {/* <Button disabled={product.length == 0}></Button> */}
      <Modal
        Centered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Continue to pay</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Paymentpage />
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleexit}>
              Place Order
            </Button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
