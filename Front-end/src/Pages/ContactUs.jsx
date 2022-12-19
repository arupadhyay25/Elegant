import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Input, VStack, SimpleGrid, Text, Button, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

const ContactUs = () => {
  return (
    <div style={{width:"70%",margin:"auto"}}>
    <Box   m="10px" w={{base:"none",lg:"100%"}}>
        <VStack
          w={"100%"}
          textAlign="center"
          display={{base:"none", lg:"block"}}
          justifyContent={"center"}
        >
          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            spacing={20}
            gap={{ base: 10, lg: 250 }}
            bgColor="#E2E8F0"
          >
            <Box>
              <VStack>
                <Text
                  mt={8}
                  fontSize="25px"
                  lineHeight={1}
                  color="black"
                  textAlign={"left"}
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  What's your query about ?
                </Text>
                
              </VStack>
              <Input
                    mt={6}
                    ml={{base: "none", lg: "4"}}
                    isInvalid
                    errorBorderColor='black.300'
                    placeholder='Search your query here'
                />
            </Box>

            <Box>
              <Image
                h={120}
                mt={10}
                textAlign={"right"}
                src="https://images.bewakoof.com/web/airoplane.png"
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>
    <Tabs>
    <TabList>
        <Tab>Orders, Delivery & Payment</Tab>
        <Tab>Cancellation</Tab>
        <Tab>Refunds & Returns</Tab>
        <Tab>My Bewakoof Wallet</Tab>
        <Tab>My Account</Tab>
        <Tab>Offer and Combos</Tab>
        <Tab>TriBe Membership</Tab>
       
        
    </TabList>

    <TabPanels>
        <TabPanel>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How do I check the status of my order?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            You can check the status of your order by clicking Track Order on the Bewakoof page post account login.
            Once your order is placed, we will send you confirmation of your order details by e-mail and SMS.
            Again, once we dispatch your shipment, you will be notified via SMS.
            Your tracking link may take up to 24 hours from shipping date to get activated.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Orders
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How do I know if my order was successfully placed?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Once your order is placed you will be directed to the order confirmation page.
            You can find details of your order on App/Web under track order/My Orders.
            E-mail confirmation is sent to your registered e-mail id.
            SMS confirmation sent to your registered mobile number.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What are the charges that will apply on my order?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            For orders with prices less than Rs 399, we levy a delivery fee of Rs 30.
            However, if you are a TriBe member then there is no delivery fee charged to you.
            The price of the products you see is inclusive of taxes.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Why can't I see the COD option?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            For a few pin codes, we are unable to provide the cash-on-delivery payment option currently.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I am unable to add products to my Bag.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Kindly check if all the products that you want to add to Cart are in stock. Please clear cache, cookies and update the app.
            If the issue persists, You can contact our customer service executive along with product details and error snapshot, and we will resolve this within 24 hours.
            </AccordionPanel>
        </AccordionItem>
            
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Delivery
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I have not received an order confirmation.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            If you can see your order has been placed on the My Orders page
            dont worry, you will receive a confirmation e-mail and SMS soon.
            Please check your spam folder as well.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                My order status reads delivered, but I have not yet received it.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Your order may have been received by someone else on your behalf.
            If your address is a residential address please check with your neighbour/security guard.
            If your address is non-residential then please check with the reception team.
            If you think that isn't the case, please reach out to us via registered email id along with the order details.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I want to change my delivery address.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            We are unable to change the delivery address once the order has been placed. Please cancel the existing order and place a new order to change the delivery address.
            Please describe the issue . We’ll get back to you within 24 hours
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How do I check the status of my order?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            You can check the status of your order by clicking Track Order on the Bewakoof page post account login.
            Once your order is placed, we will send you confirmation of your order details by e-mail and SMS.
            Again, once we dispatch your shipment, you will be notified via SMS.
            Your tracking link may take up to 24 hours from shipping date to get activated.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I want to change the phone number for the order.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            To change the phone number for the order either access our chatbot or write to us at care@bewakoof.com from your registered email id along with updated phone number and order details.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                The order I have received is not what I had expected.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            We’re extremely sorry for the inconvenience caused. Please reach out to us below with the following info:
            1)Image of the product
            2)Tag of the product
            3)Your Order/s
            Please describe the issue . We’ll get back to you within 24 hours
            </AccordionPanel>
        </AccordionItem>

        
            
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Payment
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I tried to make a transaction, but it failed. What do I do?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            If the amount has been deducted from your bank or card, don't worry; it will be refunded to the same account within 3-5 business days.
            Meanwhile, please wait a while and try again, preferably using a different payment method.
            These are the payment methods we accept:
            • Debit Card
            • Credit Card
            • Net banking
            • Leading e-wallets
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                My transaction failed but an amount was deducted from my Bewakoof wallet. What do I do?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            If your wallet amount has been deducted the same will be credited back in your Bewakoof wallet within a couple of hours
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I have credits in my Bewakoof Wallet. Can I transfer it to my bank account?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            No. The Bewakoof credit earned through promotional campaigns is associated with your Bewakoof account only, and cannot be en-cashed or transferred to other accounts.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What is the COD limit?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Bewakoof reserves the right to determine the COD limit for every customer and/or order. The COD limit for an order is Rs 5000. Moreover, COD orders are limited to 10 products per order.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What are COD (Cash on Delivery) charges?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            COD charges are levied on orders placed on COD mode for all customers of Bewakoof. COD charge of Rs 30 per product is levied on the order. The charges will reflect in the order invoice. Bewakoof reserves the right to determine the COD charges.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How can I get a refund of the COD charges?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            COD charges are non-refundable however the same can be refunded only in the case of Bewakoof attributed concerns. The COD charges will be refunded in the Bewakoof wallet, if applicable.
            </AccordionPanel>
        </AccordionItem>
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
       
        </TabPanel>
        <TabPanel>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I cancel my Order?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Yes. You can cancel your item(s) until we start processing your order. Your order will be in Order confirmed status while it is eligible for cancellation.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I cancel my Cancellation Request ?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Once an order is cancelled, we cannot undo this. You will need to replace the order yourself.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Cancellation Policy
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            You can cancel the orders that are in Order confirmation stage.
            Refund for Debit card/Credit Card, UPI and Netbanking orders will be processed in within 7-10 working days.
            Refunds for orders paid through Bewakoof wallet will be refunded within an hour of cancelation.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        
        </TabPanel>
        <TabPanel>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How do I return my product?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            You can return an order by clicking Return on the My Orders page.
            * We accept returns within 15 days from the date of delivery of the order for most of the products, please refer to the Product Description Page for more details.
            Please ensure while returning, the product and the packaging are in the same condition as it was delivered.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How will I get my refund ?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}> 
            Once the order has been picked up, the refund will be initiated to your selected mode within 48 hrs from the date your order is picked, subject to your returns passing the quality check.
            Refund will reflect as per below-mentioned timelines, post initiation:
            1) Wallet refund will get credited within a few minutes.
            2) NEFT refund will take 3 to 5 working days.
            3)Payment Gateway refund process takes 5 to 7 working days excluding Saturdays/Sundays and Bank Holidays. 
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Which products are not eligible for return?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            1)Products sold in Flash sale.
            2)Products where there might be hygiene concerns:-Boxers, Nightwear Shorts, Premium Mask, Everyday Mask, Surgical Mask, Hand Sanitizer, Personal Protection Kit, Gloves, Thermometer, N 95 Mask, N 90 Mask, Face Shield, cosmetic products, perfumes & Notebooks.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        
        </TabPanel>
        <TabPanel>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I am unable to use my promotional coupon/code.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Since some of our products are already discounted, promotional coupons and codes will not be applicable on already discounted products. You can use them to purchase any non discounted product.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I am unable to use my wallet amount.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Bewakoof wallet balance can be used to make purchases across the platform for all products. However, your minimum cart value needs to be INR 299 to use the Bewakoof Credits from your wallet's balance. Also, the promotional wallet amount cannot be used along with the COD option
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I have not received my cashback yet.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Cashback will be credited to your account after the successful delivery of all items (subjected to offer Terms & Conditions).
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How do I use my Bewakoof wallet?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Your Bewakoof Wallet enables you to get a quicker checkout on our site and app. Your Bewakoof Wallet is made up of Bewakoof Credits.
            To use your Bewakoof wallet, please select Pay by Bewakoof Wallet as the mode of payment on the cart page while placing your order.
            The corresponding amount will be deducted from your Wallet balance.
            In case the total amount exceeds Bewakoof Wallet balance, you can pay the remaining amount using any other payment option.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        
        </TabPanel>
        <TabPanel>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I have forgotten my password.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            To generate a new password, please click the link below
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I would like to unsubscribe from Bewakoof promotional SMS and emails.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            We’re sorry to see you go. Please write to us here, and our customer care executive will help you resolve this.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I want to delete my Bewakoof account.
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Please write to us here, and our customer care executive will help you resolve this.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                I want to change my phone number
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Go to My profile and click on Change Mobile number (You can find this option below the phone number field). Click on GET OTP and an OTP will be sent to you registered email id. Submit the OTP and your phone number will be updated.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        
        </TabPanel>
        <TabPanel>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What are combo offers?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Combo offers are the special offers on selected merchandise that provide you the best deal on meeting the combo conditions. For example: under the Buy 2 Get 1 offer you would get the third item free on buying two from the applicable selection (You will have to select three products from the applicable merchandise to enjoy the offer). Similarly, under the Buy 2 for 599 offer the user can get any two items from the defined catalog at the combo price irrespective of the individual product prices.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I avail these combo offers on all the products?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            No, these offers will be applicable on the selected list of products from the defined catalog. You can find the products on which the offer is applicable with the respective offer tag on them.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I buy other products along with these combo offers?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Yes, you can buy other products along with the combo offers. However, those products, if not a part of the offer, will be treated as separate items and not a part of the combo offer.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I avail multiple combo offers together?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Yes, you can add multiple combo offers to the cart. They will be treated as separate combo-offers individually.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        
        </TabPanel>
        <TabPanel>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How do I become a TriBe member?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Joining the TriBe is simple. Follow the link given below and simply add your TriBe membership plan to your cart. Proceed to make your payment online. Your TriBe membership will be activated once your payment is successful. You will receive a welcome email confirming your membership
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What are the benefits of the TriBe Membership?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Our TriBe enjoys some truly amazing benefits. Refer to this link for more details.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I upgrade my TriBe Membership plan?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Currently we do not have an upgrade option but you can simply renew your TriBe membership for a longer term at the time of renewal.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I cancel my TriBe membership?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Since we do not refund the membership fees and the TriBe membership does not auto-renew, we do not currently support the cancellation of the membership. Your membership will automatically end after the date of expiry. To check the validity of your membership visit the TriBe Membership page, post login via registered email id.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        </TabPanel>
    </TabPanels>
</Tabs>

    </div>
  )
}

export default ContactUs
