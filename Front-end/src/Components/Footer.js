import React from "react";
import styles from "./Footer.module.css";
import { Menu, Button, MenuButton, MenuList, MenuItem,Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export const Footer = () => {
  const column_1 = [
    "Help & FAQs",
    "Shipping",
    "Returns & Exchanges",
    "Order Tracking",
    "Corporate Sales & Gifts",
    "Contact Us",
  ];
  const column_2 = [
    "Sign In or Sign Up",
    "Order Tracking",
    "My Auto Refresh",
    "My Love-It List",
  ];
  const column_3 = [
    "About Us",
    "Careers",
    "Gift Cards",
    "Shop by Fragrance",
    "Product Ingredients",
    "Get Inspired",
    "Diversity, Equity & Inclusion",
  ];
  const column_4 = ["Store Locator", "Global Locations"];
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
          <FooterColumn head="CUSTOMER CARE" arr={column_1} />
          <FooterColumn head="MY ACCOUNT" arr={column_2} />
          <FooterColumn head="DISCOVER" arr={column_3} />
          <FooterColumn head="FIND US" arr={column_4} />
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
          <MenuList color="white">
            <MenuItem bg="#968128">CUSTOMER CARE</MenuItem>
            <MenuItem bg="#968128">MY ACCOUNT</MenuItem>
            <MenuItem bg="#968128">DISCOVER</MenuItem>
            <MenuItem bg="#968128">FIND US</MenuItem>
          </MenuList>
        </Menu>
      </div>
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
          © 2022 Bath & Body Works Direct, Inc. All Rights Reserved
        </div>
      </div>
    </div>
  );
};
