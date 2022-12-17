import {
  border,
  Button,
  Center,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AdressPage = () => {
  let Navigate = useNavigate();
  let handleaddress = () => {
    Navigate("/payment");
  };
  return (
    <Center>
      <div
        style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "whitesmoke",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            textAlign: "left",
            padding: "20px",
          }}
        >
          <Text fontSize="xl" fontWeight="bold">
            Add a new address
          </Text>
          <br />
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Country/Region
            </label>
            <Select
              size="sm"
              placeholder="Select option"
              //   onChange={(e) => setkey(e.target.value)}
            >
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="japan">japan</option>
              <option value="Dubai">Dubai</option>
            </Select>
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Full name
            </label>
            <Input size="sm" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Mobile number
              </label>
              <Input size="sm" />
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Pincode
              </label>
              <Input size="sm" />
            </div>
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Full Address
            </label>
            <Input size="sm" />
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Landmark
            </label>
            <Input size="sm" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div style={{ width: "50%" }}>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Town/City
              </label>
              <Input size="sm" />
            </div>
            <div style={{ width: "50%" }}>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                State
              </label>
              <Select
                size="sm"
                w="100%"
                placeholder="Select option"
                //   onChange={(e) => setkey(e.target.value)}
              >
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Bengaluru">Bengaluru</option>
              </Select>
            </div>
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Landmark
            </label>
            <Select
              size="sm"
              w="100%"
              placeholder="Select an Address Type "
              //   onChange={(e) => setkey(e.target.value)}
            >
              <option value="Home">Home (7 am —9 pm delivery)</option>
              <option value="Office">
                Office/Commercial (10 AM - 6 PM delivery)
              </option>
            </Select>
          </div>
        </div>
      </div>
    </Center>
  );
};
