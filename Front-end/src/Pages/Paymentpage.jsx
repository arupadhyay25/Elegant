import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { AdressPage } from "./AdressPage";
import { CardsPage } from "./CardsPage";

export const Paymentpage = () => {
  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Select Address</Tab>
          <Tab>Select Payment mode</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AdressPage />
          </TabPanel>
          <TabPanel>
            <CardsPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
