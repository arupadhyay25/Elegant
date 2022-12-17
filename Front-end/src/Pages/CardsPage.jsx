import {
  Button,
  Center,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import "./PaymentPage.css";
import { useNavigate } from "react-router-dom";

export const CardsPage = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="Card-main">
        <div className="Card-left">
          <Center>
            <img
              src="./Images/debit.png"
              alt="debitcard"
              id="debit-card"
              width="50%"
            />
          </Center>
        </div>
        <div className="Card-right">
          <Heading fontSize={"2xl"}>Your Payment Record</Heading>
          <br />
          <div>
            <label>Card-holder Name</label>
            <InputGroup>
              <Input focusBorderColor="#DBDAF0" variant="flushed" />
            </InputGroup>
          </div>
          <br />
          <div>
            <label>Card Number </label>
            <InputGroup mt={1}>
              <PinInput size="xs" focusBorderColor="#DBDAF0" variant="flushed">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="10px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="10px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="10px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </InputGroup>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginTop: "10px" }}>
              <label>Expiry Date</label>
              <InputGroup>
                <Input
                  focusBorderColor="#DBDAF0"
                  variant="flushed"
                  type="month"
                />
              </InputGroup>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>CVV</label>
              <InputGroup>
                <Input
                  focusBorderColor="#DBDAF0"
                  variant="flushed"
                  type="password"
                />
              </InputGroup>
            </div>
          </div>
          <br />
          <div>
            <Checkbox isDisabled defaultChecked>
              Save my details for future payments
            </Checkbox>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};
