import { Flex, Text, Box, Img, Button } from "@chakra-ui/react";
import house from "../../assets/house.svg";
import Savings_Unleashed from "../../assets/Savings-Unleashed.svg";
import priority from "../../assets/priority.svg";
import shield from "../../assets/shield.svg";
import equality from "../../assets/equality.svg";
import green_shade from "../../assets/green-shade.png";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
// import ChangingProgressProvider from "./ChangingProgressProvider";
const Process = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Flex
      as="section"
      w="100vw"
      h="fit-content"
      overflow="visible"
      minH="500px"
      fontFamily="DM Sans"
      fontWeight="700"
      align="center"
      justify="flex-start"
      direction="column"
      mt="3em"
      position="relative"
      bgImg={{ base: "none", xl: green_shade }}
      bgSize={{ base: "cover", xl: "cover" }}
      bgPos={{ base: "10% -50%", xl: "center" }}
      bgRepeat="no-repeat"
      py={{ base: "3em", xl: "3em" }}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%" // Set width to 100%
        height="150%" // Set height to 100%
        viewBox="0 0 1917 1149"
        fill="none"
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          margin: "0", // Add margin: 0 to remove extra margin
          padding: "0", // Add padding: 0 to remove extra padding
        }}
      >
        <path
          d="M-4 0L1917 139.155V1149L-4 963.649V0Z"
          fill="#007E24"
          fillOpacity="0.07"
        />
      </svg> */}
      <Box
        position="absolute"
        display={{ base: "block", xl: "none" }}
        left="-10%"
        top="0"
        w="120vw"
        h="100%"
        bg="#007E24"
        opacity="0.07"
        transform="rotate(3deg)"
      ></Box>
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
      >
        a process optimised <span style={{ color: "#007E24" }}>for you</span>
      </Text>

      <Flex
        direction={{ base: "column", xl: "row" }}
        align="center"
        gap="2em"
        position="relative"
        zIndex="10"
        overflow="visible"
      >
        <Flex align="center" justify="center" direction="column">
          <Img src={house} alt="home" w="350px" />
          <Box
            data-aos="fade-down"
            data-aos-offset="500"
            data-aos-delay="700"
            data-aos-duration="500"
            data-aos-anchor-placement="center"
            data-aos-once="true"
          >
            <Features
              offset="1000"
              text="100%"
              value="100"
              // defaultVal="100"
            />
            <Features
              offset="1200"
              reverse
              text="70%"
              value="70"
              // defaultVal="70"
            />
          </Box>
        </Flex>
        <Flex direction="column">
          <Flex
            align={{ base: "center", xl: "flex-start" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "0em", md: "2em", xl: "5em" }}
            ml={{ base: "0", xl: "5em" }}
            justify={{ base: "space-between", xl: "normal" }}
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-anchor-placement="center"
            data-aos-once="true"
          >
            <Card
              logo={Savings_Unleashed}
              description=" Tenants typically pocket an extra $150 by using our rental application
        service"
              title="Savings-Unleashed"
            />
            <Card
              logo={priority}
              description=" Give yourself priority with a preverified rental application form"
              title="Priority"
            />
          </Flex>
          <Flex
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-anchor-placement="center"
            data-aos-once="true"
            align={{ base: "center", xl: "flex-start" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "0em", md: "2em", xl: "5em" }}
          >
            <Card
              logo={shield}
              description="We redact your sensitive information keeping
you safe from fraudulent listings and identity theft"
              title="Security"
            />
            <Card
              logo={equality}
              description="Have Your Rental Application Approved Off Your Credentials Not Your Appearance"
              title="Equality"
            />
          </Flex>
        </Flex>
      </Flex>
      <Button
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
        mt={{ base: "2em", xl: "0" }}
        data-aos="fade-down"
        data-aos-offset="500"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default Process;

const Features = ({ reverse, value }) => {
  const [show, setshow] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1, // Adjust the threshold as needed
  });
  useEffect(() => {
    if (inView) {
      setshow(true);
    }
  }, [inView]);
  return (
    <Flex
      data-aos="fade-down"
      px="2em"
      direction={reverse ? "row-reverse" : "row"}
      align="center"
      justify="center"
      gap="1em"
      mb="1em"
      ref={ref}
    >
      <div style={{ width: 90, height: 90 }}>
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={show ? value : 0}
          duration={1.4}
          easingFunction={easeQuadInOut}
          repeat
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({
                  pathTransition: "stroke-dashoffset 1.5s ease 0s",
                  textColor: "#007E24",
                  pathColor: "#007E24",
                  trailColor: "#fff",
                })}
              />
            );
          }}
        </AnimatedProgressProvider>
      </div>
      <Box
        textAlign="left"
        fontFamily="DM Sans"
        fontSize="16px"
        color="#484848"
      >
        <Text as="p">Of Our Users Save Time Or Money</Text>

        <Text as="p">When Applying To More Than 1 Apartment</Text>
      </Box>
    </Flex>
  );
};

Features.propTypes = {
  reverse: PropTypes.bool,
  show: PropTypes.bool,
  ref: PropTypes.element,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultVal: PropTypes.string.isRequired,
};

const Card = ({ logo, title, description }) => {
  return (
    <Box
      fontFamily="DM Sans"
      // w={{ base: "40vw", md: "auto" }}
      w="auto"
      bg="#fff"
      borderRadius="20px"
      p="1em"
      mt={{
        base: "1em",
        md: title === "Priority" || title === "Equality" ? "5em" : "0em",
      }}
    >
      <Flex align="center" gap="1em" fontWeight="700" fontSize="20px">
        <Flex
          align="center"
          justify="center"
          borderRadius="50%"
          w="100px"
          h="100px"
          bg="#007E24"
        >
          <Img src={logo} alt="Savings_Unleashed" />
        </Flex>
        <Text as="h1">{title}</Text>
      </Flex>
      <Text
        lineHeight="28px"
        as="p"
        mt=".5em"
        fontWeight="500"
        fontSize="14px"
        w="300px"
      >
        {description}
      </Text>
    </Box>
  );
};

Card.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
