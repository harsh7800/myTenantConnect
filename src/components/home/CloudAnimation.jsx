import { Box, Flex, Img, keyframes } from "@chakra-ui/react";
import cloud from "../../assets/cloud.svg";
import FlyBird from "../../assets/FlyBird.svg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const CloudAnimation = () => {
  const cloudref = useRef();
  const birdref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      cloudref.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.3, delay: 1.5 }
    ).fromTo(
      birdref.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, delay: 1.5 }
    );
  }, []);

  const moveRight = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100vw);
    }
  `;

  const moveLeft = keyframes`
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(0vw);
    }
  `;

  // Define an array of cloud positions and animations
  const cloudData = [
    { top: "-7%", left: "20%", animation: moveLeft },
    { top: "12%", left: "0%", animation: moveLeft },
    { top: "12%", right: "30%", animation: moveLeft },
    { top: "-8%", right: "5%", animation: moveLeft },
    { top: "30%", left: "25%", animation: moveLeft },
    { top: "40%", right: "0%", animation: moveRight },
    { top: "-7%", left: "20%", animation: moveRight },
    { top: "12%", left: "0%", animation: moveRight },
    { top: "12%", right: "30%", animation: moveRight },
    { top: "-8%", right: "5%", animation: moveRight },
    { top: "35%", left: "25%", animation: moveRight },
    { top: "40%", right: "0%", animation: moveRight },
  ];

  return (
    <Box
      w="100vw"
      h="50vh"
      minH="400px"
      position="absolute"
      top="0px"
      overflow="visible"
    >
      <Box ref={cloudref}>
        {cloudData.map((data, index) => (
          <Img
            key={index}
            src={cloud}
            w="112px"
            h="74.67px"
            lineHeight="18px"
            //   border="2px solid black"
            position="absolute"
            zIndex="1"
            {...data} // Spread the data object to set the properties
            animation={`${data.animation} 20s linear infinite`} // Note the added double quotes
          />
        ))}
      </Box>
      <Marquee direction="right">
        <Flex w="100vw" justify="space-around" align="center" h="auto">
          <Img
            ref={birdref}
            mb={{ base: "20%", lg: "10%" }}
            src={FlyBird}
            w="40px"
            lineHeight="18px"
            zIndex="1"
          />
          <Img
            ref={birdref}
            display={{ base: "none", lg: "block" }}
            src={FlyBird}
            w="40px"
            lineHeight="18px"
            zIndex="1"
          />

          <Img
            ref={birdref}
            src={FlyBird}
            w="40px"
            lineHeight="18px"
            zIndex="1"
          />
        </Flex>
        {/* Add similar modifications for other <Img> elements */}
        {/* </Box> */}
      </Marquee>
    </Box>
  );
};

export default CloudAnimation;
