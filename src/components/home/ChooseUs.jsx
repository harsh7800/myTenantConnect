import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import connect from "../../assets/connect.svg";
import home from "../../assets/home.svg";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ChooseUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Flex
      as="section"
      w="100vw"
      h="fit-content"
      align="center"
      justify="center"
      gap="5em"
      fontFamily="DM Sans"
      letterSpacing="1.5px"
      fontWeight="700"
      direction="column"
    >
      <Text
        fontSize={{ base: "25px", lg: "35px" }}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
      >
        Why Choose <span style={{ color: "rgba(0, 126, 36, 1)" }}>us</span>
      </Text>
      <Box>
        <Card
          delay="700"
          image={connect}
          title="why use my tenant connect ?"
          description=" We stand as a pioneer in the rental application credentialing service
          as it's the first rental application designed for tenants offering a
          unique, one-time rental application that provides peace of mind while
          protecting your budget."
        />
        <Card
          delay="1000"
          image={home}
          reverse
          title="How We Help End Rental Discrimination"
          description="
Tenant screening companies use techniques that result in misinformation. By using My Tenant Connect you ensure your rental application is accurate, assessed by your credentials and processed by a human not an algorithm"
        />
      </Box>
      <Button
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="1000"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
        mt="-5em"
        mb="1em"
        fontFamily="DM Sans"
        fontWeight="500"
        fontSize="16px"
        letterSpacing="3px"
        color="#fff"
        bg="#007E24"
        borderRadius="7px"
        px="32px"
        _hover={{ boxShadow: "0px 0px 0px 0px #000000" }}
        boxShadow="5px 5px 0px 0px #000000"
        position="relative"
        zIndex="20"
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default ChooseUs;

const Card = ({ reverse, title, description, image, delay }) => {
  return (
    <Flex
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-delay={delay}
      data-aos-duration="500"
      data-aos-anchor-placement="center"
      data-aos-once="true"
      fontFamily="DM Sans"
      w="100vw"
      direction={{
        base: !reverse ? "column-reverse" : "column-reverse",
        lg: reverse ? "row-reverse" : "row",
      }}
      justify="space-between"
      align="center"
      px="4em"
      py="2em"
      mt={reverse ? "3em" : "0"}
    >
      <Flex
        w={{ base: "80vw", lg: "auto" }}
        direction="column"
        align={!reverse ? "flex-start" : "flex-end"}
      >
        <Text
          as="h1"
          fontWeight="700"
          textTransform="capitalize"
          color="#007E24"
          fontSize={{ base: "22px", xl: "35px" }}
          letterSpacing="1.5px"
          w={{ base: "80vw", lg: "auto" }}
          textAlign={{ base: "left", lg: "left" }}
        >
          {title}
        </Text>
        <Text
          as="p"
          fontSize={{ base: "18px", xl: "22px" }}
          fontWeight="400"
          color="rgba(18, 18, 18, 1)"
          w={{ base: "80vw", lg: "45vw", xl: "650px" }}
          letterSpacing="0px"
          textAlign={{ base: "left", lg: !reverse ? "left" : "right" }}
        >
          {description}
        </Text>
      </Flex>
      <Img
        w={{ md: "350px", xl: "500px" }}
        mb={{ base: "2em", lg: "0" }}
        src={image}
      />
    </Flex>
  );
};

Card.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
};
