import { Button, Flex, Img, Text } from "@chakra-ui/react";
import form from "../../assets/form.svg";
import mouse from "../../assets/mouse.svg";
import party from "../../assets/party.svg";
import email from "../../assets/email.svg";
import PropTypes from "prop-types";
import { PartyPopper } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Working = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Flex
      as="section"
      w="100vw"
      h="fit-content"
      justify="space-around"
      fontFamily="DM Sans"
      fontWeight="700"
      py="2em"
      direction="column"
    >
      <Text
        data-aos="fade-down"
        data-aos-offset="500"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
        position="relative"
        zIndex="10"
        as="h1"
        mb="2em"
        color="#18181B"
        textAlign="center"
        textTransform="capitalize"
        fontSize={{ base: "25px", lg: "35px" }}
        letterSpacing="1.5px"
      >
        how it <span style={{ color: "#007E24" }}>works</span>
      </Text>
      <Flex
        w="100svw"
        align="center"
        flexWrap="wrap"
        justify="center"
        gap="2em"
      >
        <Card
          delay="500"
          logo={form}
          description="Fill Out Your One Time Rental Application Form"
          title="Application Form"
        />
        <Card
          delay="700"
          logo={mouse}
          description="Add Desired Apartment Information"
          title="Apartment information"
        />
        <Card
          delay="1000"
          logo={email}
          description="Forward Your Rental Application To Your Next Landlord"
          title="Forward application"
        />
        <Card
          delay="1200"
          logo={party}
          icon={PartyPopper}
          description="Start your journey with us now!"
          title="What are you waiting
for ??"
        />
      </Flex>
    </Flex>
  );
};

export default Working;

const Card = ({ logo, title, description, delay }) => {
  const Navigate = useNavigate();
  return (
    <Flex
      data-aos="fade-down"
      data-aos-offset="500"
      data-aos-delay={delay}
      data-aos-duration="500"
      data-aos-anchor-placement="center"
      data-aos-once="true"
      direction="column"
      align="center"
      justify="center"
      gap="35px"
      textAlign="center"
      w={{ base: "80vw", md: "300px" }}
      h="250px"
      boxShadow=" 5px 0px 0px #007E24"
      borderRadius="20px"
      bg="rgba(0, 126, 36, .1)"
      fontFamily="DM Sans"
      fontWeight="700"
      position="relative"
      pb="2em"
    >
      <Flex
        align="center"
        justify="center"
        borderRadius="50%"
        background="linear-gradient(0deg, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)),
        linear-gradient(0deg, #FFFFFF, #FFFFFF);"
        w="60px"
        h="60px"
      >
        <Img w="30px" src={logo} />
      </Flex>
      <Text as="h2" fontSize="20px" color="#007E24">
        {title}
      </Text>
      <Text as="p" w="80%" fontWeight="500" fontSize="16px">
        {description}
      </Text>
      <Button
        position="absolute"
        bottom="3%"
        left="5%"
        background="linear-gradient(0deg, #007E24, #007E24),
linear-gradient(0deg, #FFFFFF, #FFFFFF)"
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px"
        borderBottomLeftRadius="20px"
        borderBottomRightRadius="20px"
        w="90%"
        fontWeight="500"
        color="#fff"
        _hover={{ transform: "scale(.9)" }}
        onClick={() => {
          Navigate("/steps/step1");
        }}
        display={
          description === "Start your journey with us now!" ? "block" : "none"
        }
      >
        Get Started
      </Button>
    </Flex>
  );
};

Card.propTypes = {
  logo: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
};
