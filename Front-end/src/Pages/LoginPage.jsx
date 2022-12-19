import React from "react";
import {
  Box,
  Button,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import MyForm from "../Components/MyForm";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/useContext";
import { Footer } from "../Components/Footer";
import { Navbar2 } from "../Components/Navbar2";
function LoginPage() {
  const [user, setUser] = useState({});

  const handleCallback = (response) => {
    console.log("Encoded jwt id token" + response.credential);
    let userObj = {};
    console.log(userObj);
    setUser(userObj);
  };

  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id:
        "976173934472-0njfsrbeup1vktmf08h56p5v9ggqsfk5.apps.googleusercontent.com",
      callback: handleCallback,
    });
    google.accounts.id.renderButton(document.getElementById("signinDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <Navbar2 />
      <div style={{ width: "70%", margin: "auto" }}>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          height="auto"
          width={"95%"}
          justifyContent="space-between"
          margin="auto"
          spacing="40px"
        >
          <Box width={"100%"}>
            <Box display="grid" marginTop={"120px"}>
              <Text fontSize={["19px", "20px", "25px", "30px"]} as={"b"}>
                Welcome to the world of ELEGANT!
              </Text>
              <Image src="https://images.bewakoof.com/web/group-19-1617704502.png" />
            </Box>
          </Box>
          <Box width={"100%"}>
            <br />
            <VStack spacing={3}>
              <Text fontSize={"25px"} fontWeight={"medium"}>
                Log in / Sign up
              </Text>
              <Text fontSize={["12px", "15px", "16px", "15px"]} color="gray">
                for Latest trends, exciting offers and everything Bewakoof!
              </Text>
              <br />
            </VStack>
            <MyForm />

            <Box marginTop={"10px"}>
              <Stack
                width={"60%"}
                margin={"auto"}
                marginTop={"20px"}
                direction="row"
                spacing={4}
                justifyContent={"space-between"}
              >
                <Button id="signinDiv" width={"100%"}>
                  GOOGLE
                </Button>
              </Stack>
              <Box width={"60%"} margin="auto" marginTop={"15px"}>
                <Text fontSize={["9px", "10px", "11px", "13px"]}>
                  By creating an account or logging in, you agree with
                  Bewakoof's{" "}
                  <Link
                    fontWeight="medium"
                    color={"teal"}
                    href="https://chakra-ui.com"
                  >
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    color={"teal"}
                    fontWeight="medium"
                    href="https://chakra-ui.com"
                  >
                    Privacy Policy.
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default LoginPage;
