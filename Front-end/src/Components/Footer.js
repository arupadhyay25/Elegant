import React from "react";
import styles from "./Footer.module.css";
import { Menu, Button, MenuButton, MenuList, MenuItem,Text, Input } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export const Footer = () => {
  const column_1 = [
    "Contact Us",
    "Track Order",
    "Return Order",
    "Cancel Order",
  ];
  const column_2 = [
    "About Us",
    "We're Hiring",
    "Terms & Conditions",
    "Privacy Policy",
    "Blog",
  ];
  const column_3 = [
    "4.7M People Like this",
    "1M Followers",
  ];
  const column_4 = [];
  const bhai = [
    "Terms Of Use",
    "Privacy Policy",
    "Security Bug Report",
    "States Privacy Rights Notice (Certain States)",
    "Do Not Sell or Share My Personal Information (Certain States)",
    "Transparency in Supply Chains",
  ];
  const bhai2 = [
    "Targeted Ad Preferences (Certain States)",
    " Limit the Use of My Sensitive Personal Information (California)",
  ];
  const FooterColumn = (props) => {
    const { head, arr } = props;
    return (
      <div className={styles.Footer_Two_column}>
        <div className={styles.Footer_Two_columnHead}>{head}</div>
        {arr.map((el, i) => (
          <div key={i} className={styles.Footer_Two_columnChild}>
            {el}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className={styles.Footer}>
      <hr />
      <div className={styles.Footer_Main}>
        <div className={styles.Footer_Two}>
          <FooterColumn head="CUSTOMER SERVICE" arr={column_1} />
          <FooterColumn head="COMPANY" arr={column_2} />
          <FooterColumn head="CONNECT WITH US" arr={column_3} />
          <FooterColumn head="KEEP UP TO DATE" arr={column_4} />
          <FooterColumn head="DOWNLOAD THE APP" arr={column_4} />
          <FooterColumn head="100% SECURE PAYMENT" arr={column_4} />
        </div>
      </div>
      <div className={styles.Footer_media_columns}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            px={20}
            py={5}
            colorScheme="#F2F2F2"
            transition="all 0.2s"
            borderRadius="lg"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
            bg="#968128"
            color="white"
          >
            <Text color="white">LET US HELP !</Text>
          </MenuButton>
          {/* <MenuList color="white">
            <MenuItem bg="#968128">CUSTOMER CARE</MenuItem>
            <MenuItem bg="#968128">MY ACCOUNT</MenuItem>
            <MenuItem bg="#968128">DISCOVER</MenuItem>
            <MenuItem bg="#968128">FIND US</MenuItem>
            <MenuItem bg="#968128">KEEP UP TO DATE</MenuItem>
            
          </MenuList> */}
          
        </Menu>
      </div>
      {/* <Input/> */}
      <div className={styles.Footer_Main2}>
        <div>
          <div className={styles.Footer_Main21}>
            {bhai.map((el, i) => (
              <div key={i} className={styles.Footer_Main2_child}>
                {el}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.Footer_Main22}>
            {bhai2.map((el, i) => (
              <div key={i} className={styles.Footer_Main2_child}>
                {el}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.Footer_Main3}>
          {/* © 2022 Bath & Body Works Direct, Inc. All Rights Reserved */}
        </div>
      </div>
    </div>
  );
};
