import { Route, Routes } from "react-router-dom";
import Step1 from "../application-status/Step1";
import Step2 from "../application-status/Step2";
import Step3 from "../application-status/Step3";
import Step4 from "../application-status/Step4";
import Stepper from "../application-status/Stepper";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import stillBird from "../../assets/stillBird.svg";

const Steps = () => {
  return (
    <Flex direction="column" align="center" overflow="visible">
      <Box
        w="fit-content"
        fontFamily="DM Sans"
        fontWeight="600"
        mt="2em"
        lineHeight={{ base: "30px", lg: "50px" }}
        textAlign="center"
        overflow="visible"
        position="relative"
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
          color="#18181B"
          textAlign="center"
          textTransform="capitalize"
          fontSize={{ base: "25px", lg: "35px" }}
          overflow="visible"
        >
          Pre-Verified One Time
          <Img
            right={{ base: "-15%", lg: "-10%" }}
            top={{ base: "-50%", lg: "-15%" }}
            position="absolute"
            src={stillBird}
            alt="bird"
          />
        </Text>
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
          color="#007E24"
          textAlign="center"
          textTransform="capitalize"
          fontSize={{ base: "25px", lg: "35px" }}
        >
          Rental Application Form
        </Text>
      </Box>
      <Stepper />

      <Routes>
        <Route element={<Step1 />} path="/step1" />
        <Route element={<Step2 />} path="/step2" />
        <Route element={<Step3 />} path="/step3" />
        <Route element={<Step4 />} path="/step4" />
      </Routes>
    </Flex>
  );
};

export default Steps;
