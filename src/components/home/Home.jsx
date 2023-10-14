import { Box, Button, Container, Flex, Img, Text } from "@chakra-ui/react";
import CloudAnimation from "./CloudAnimation";
import singleStory from "../../assets/singleStory.svg";
import tree from "../../assets/tree.svg";
import bushes from "../../assets/bushes.svg";
import greens from "../../assets/greens.svg";
import secondstorey from "../../assets/secondstorey.svg";
import couple from "../../assets/couple.svg";
import long_greens from "../../assets/long-greens.svg";
import Section from "./Section";
import Process from "./Process";
import Working from "./Working";
import ChooseUs from "./ChooseUs";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const Home = () => {
  const titleRef = useRef();
  const btnRef = useRef();
  const scrollRef = useRef();
  const firstHouseRef = useRef();
  const secondHouseRef = useRef();
  const landRef = useRef();
  const titleRef2 = useRef();
  const ratingRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.3, delay: 2 }
    )
      .fromTo(
        btnRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.3, delay: 0, duration: 0.5 }
      )
      .fromTo(
        landRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.3, delay: 0, duration: 0.5 }
      )
      .fromTo(
        firstHouseRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.3, delay: 0, duration: 0.5 }
      )
      .fromTo(
        secondHouseRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.3, delay: 0, duration: 0.5 }
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.3, delay: 0, duration: 0.5 }
      )
      .fromTo(
        titleRef2.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.3, delay: 0, duration: 0.5 }
      )
      .fromTo(
        ratingRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.3, delay: 0 }
      );
  }, []);

  return (
    <>
      <Flex
        as="header"
        direction="column"
        align="center"
        justify="center"
        gap="1em"
        w="100vw"
        h={{ base: "80vh", lg: "60vh" }}
        minH="500px"
        position="relative"
      >
        <CloudAnimation />
        <Container
          ref={titleRef}
          fontFamily="DM Serif Text"
          fontSize={{ base: "30px", lg: "44px", xl: "54px" }}
          textAlign="center"
          fontWeight="400"
        >
          <Text zIndex="100" position="relative" as="h1">
            The Way To Apply To Your Next
          </Text>
          <Text
            zIndex="100"
            position="relative"
            as="h1"
            mt={{ base: "0", md: "-.5em" }}
          >
            Apartment
          </Text>
        </Container>
        <Button
          ref={btnRef}
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

        <Flex
          //   align="center"
          as="main"
          position="absolute"
          justify={{ base: "flex-end", lg: "space-between" }}
          bottom="0"
          left="0"
          w="100vw"
          overflow="hidden"
          //   h="24px"
        >
          <LeftHouse houseref={firstHouseRef} />
          <RightHouse houseref={secondHouseRef} />
          <Box
            ref={landRef}
            w={{ base: "50vw", lg: "70vw" }}
            bottom="0"
            bg="grey"
            h="14px"
            position="absolute"
          ></Box>
        </Flex>
      </Flex>

      <Section titleRef={titleRef2} ratingRef={ratingRef} />
      <Process />
      <Working />
      <ChooseUs />
    </>
  );
};

export default Home;

const LeftHouse = ({ houseref }) => {
  return (
    <Box
      ref={houseref}
      position="relative"
      overflow="visible"
      w="370px"
      display={{ base: "none", lg: "block" }}
    >
      <Img
        src={singleStory}
        w="250px"
        position="absolute"
        bottom="0"
        zIndex="10"
      />
      <Img
        src={greens}
        position="absolute"
        bottom="0"
        right="-10%"
        zIndex="25"
      />
      <Img src={tree} position="absolute" bottom="0" right="-5%" zIndex="20" />
      <Img
        src={bushes}
        position="absolute"
        bottom="0"
        right="37%"
        zIndex="20"
      />
      <Img src={bushes} position="absolute" bottom="0" left="10%" zIndex="20" />
    </Box>
  );
};
LeftHouse.propTypes = {
  houseref: PropTypes.element.isRequired,
};
const RightHouse = ({ houseref }) => {
  return (
    <Flex
      ref={houseref}
      overflow="visible"
      // display={{ base: "none", lg: "block" }}
      w={{ base: "fit-content", md: "380px" }}
      position="relative"
      // w="fit-content"
      align="self-end"
      top="0"
    >
      <Img
        src={couple}
        w="170px"
        position="absolute"
        bottom="0%"
        left={{ base: "-60%", md: "-50%" }}
        zIndex="20"
      />
      {/* <Img
        src={long_greens}
        position="absolute"
        bottom="-2%"
        left="-30%"
        zIndex="20"
      /> */}
      <Img
        src={long_greens}
        position="absolute"
        bottom="-2%"
        left={{ base: "-60%", md: "-50%" }}
        zIndex="20"
      />
      <Img src={secondstorey} w={{ base: "260px", md: "400px" }} />
    </Flex>
  );
};

RightHouse.propTypes = {
  houseref: PropTypes.object.isRequired,
};
