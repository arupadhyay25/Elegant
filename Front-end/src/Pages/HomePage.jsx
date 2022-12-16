import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./homepage.module.css"

export const HomePage = () => {
  return (
    <Box>
{/* TOP SLIDESHOW SECTION START */}

    <Grid className={styles.topSaleDiv} templateColumns='repeat(3, 1fr)' gap={"20px"}>
      <GridItem border={"1px solid orange"} w='100%' h='550' bg='blue.500'> 
        <Image className={styles.topSaleImage} src="Images/MiddleSection/sale1.webp"/>
      </GridItem>
      
      <GridItem border={"1px solid orange"} w='100%' h='550' bg='blue.500'> 
        <Image className={styles.topSaleImage} src="Images/MiddleSection/ts2.gif"/>
      </GridItem>
      
      <GridItem border={"1px solid orange"} w='100%' h='550' bg='blue.500'> 
        <Image className={styles.topSaleImage} src="Images/MiddleSection/ts3.webp"/>
      </GridItem> 
    </Grid>
{/* TOP SLIDESHOW SECTION END */}
{/* BANNER IMAGE*/}
    <Image src="Images/MiddleSection/banner.png" w={"100%"} mt="10px" mb="20px" />
    
    <Grid className={styles.belowBannerBox} templateColumns='repeat(8, 1fr)' gap={"20px"}>
      
      <GridItem className={styles.belowBannerDiv} w='100%' h='200' bg='blue.500'> 
        <Image className={styles.belowBannerImage} src="Images/MiddleSection/sale1.webp"/>
        <Text>Bestsellers</Text>
      </GridItem>
      
      <GridItem className={styles.belowBannerDiv} w='100%' h='200' bg='blue.500'> 
        <Image className={styles.belowBannerImage} src="Images/MiddleSection/ts2.gif"/>
        <Text>New Arrivals</Text>
      </GridItem>
      
      <GridItem className={styles.belowBannerDiv} w='100%' h='200' bg='blue.500'> 
        <Image className={styles.belowBannerImage} src="Images/MiddleSection/ts3.webp"/>
        <Text>Hot Deals</Text>
      </GridItem>
      <GridItem className={styles.belowBannerDiv} w='100%' h='200' bg='blue.500'> 
        <Image className={styles.belowBannerImage} src="Images/MiddleSection/sale1.webp"/>
        <Text>Official Collaborations</Text>
      </GridItem>
      
      <GridItem className={styles.belowBannerDiv} w='100%' h='200' bg='blue.500'> 
        <Image className={styles.belowBannerImage} src="Images/MiddleSection/ts2.gif"/>
        <Text>Last sizes left</Text>
      </GridItem>
      
      <GridItem className={styles.belowBannerDiv} w='100%' h='200' bg='blue.500'> 
        <Image className={styles.belowBannerImage} src="Images/MiddleSection/ts3.webp"/>
        <Text>Plus Sizes</Text>
      </GridItem>
      <GridItem className={styles.belowBannerDiv} w='100%' h='200' bg='blue.500'> 
        <Image className={styles.belowBannerImage} src="Images/MiddleSection/sale1.webp"/>
        <Text>Customization</Text>
      </GridItem>
      
      <GridItem className={styles.belowBannerDiv} w='100%' h='200' bg='blue.500'> 
        <Image className={styles.belowBannerImage} src="Images/MiddleSection/ts2.gif"/>
        <Text>Coupon Offers</Text>
      </GridItem>
      
    </Grid>
    
    <Image src="Images/MiddleSection/shopmenwomen.png" w={"100%"}/>
    
{/* POPULAR CATEGORIES START */}

    <Heading textAlign={"center"} mt="10px">POPULAR CATEGORIES</Heading>
  
    <Grid className={styles.popCatBox} templateColumns='repeat(6, 1fr)' gap={"30px"}>
      
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/sale1.webp"/>
        <Text className={styles.popCatText}>Printed T-shirts</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/sale1.webp"/>
        <Text className={styles.popCatText}>Oversized T-shirts</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/sale1.webp"/>
        <Text className={styles.popCatText}>Sweatshirts & Hoodies</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/sale1.webp"/>
        <Text className={styles.popCatText}>Jackets</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/sale1.webp"/>
        <Text className={styles.popCatText}>Sweaters</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/sale1.webp"/>
        <Text className={styles.popCatText}>Full Sleeves T-shirts</Text>
      </GridItem>
      
      
      
    </Grid>
  
    <Grid className={styles.popCatBox2} templateColumns='repeat(6, 1fr)' gap={"30px"}>
      
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.popCatText}>Full Sleeves T-shirts</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.popCatText}>Oversized T-shirts</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.popCatText}>Sweatshirts & Hoodies</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.popCatText}>Jackets</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.popCatText}>Sweaters</Text>
      </GridItem>
      <GridItem className={styles.popCatDiv} > 
        <Image className={styles.popCatImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.popCatText}>Boyfriend T-shirts</Text>
      </GridItem>
      
      
      
    </Grid>
{/* POPULAR CATEGORIES END */}

{/* NEW ARRIVALS START */}
    <Heading textAlign={"center"} mt="10px">NEW ARRIVALS</Heading>
  
    <Grid className={styles.newArrBox} templateColumns='repeat(5, 1fr)' gap={"30px"}>
      
      <GridItem className={styles.newArrDiv} > 
        <Image className={styles.newArrImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.newArrHeading}>Elegant</Text>
        <Text className={styles.newArrText}>Men's Black No.10 Graphic Printed Tshirt</Text>
      </GridItem>
      <GridItem className={styles.newArrDiv} > 
        <Image className={styles.newArrImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.newArrHeading}>Elegant</Text>
        <Text className={styles.newArrText}>Men's Dark Shadow Rise of Guru Graphic Printed Tshirt</Text>
      </GridItem>
      <GridItem className={styles.newArrDiv} > 
        <Image className={styles.newArrImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.newArrHeading}>Elegant</Text>
        <Text className={styles.newArrText}>Men's Black Itachi Moment Graphic Printed T-shirt</Text>
      </GridItem>
      <GridItem className={styles.newArrDiv} > 
        <Image className={styles.newArrImage} src="Images/MiddleSection/womenCat.png"/>
        <Text className={styles.newArrHeading}>Elegant</Text>
        <Text className={styles.newArrText}></Text>
      </GridItem>
      <GridItem className={styles.newArrDiv} > 
        <Image className={styles.newArrImage} src="Images/MiddleSection/womenCat.png"/>
        <Box>
          <Text className={styles.newArrHeading}>Elegant</Text>
          <Text className={styles.newArrText}></Text>
        </Box>
        
      </GridItem>
      
      
      
      
    </Grid>
  </Box>
  )
  
};
