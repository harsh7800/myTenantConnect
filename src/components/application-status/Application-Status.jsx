import { Box, Flex, Img, Input, Text } from "@chakra-ui/react";
import stillBird from "../../assets/stillBird.svg";
import step0Vector from "../../assets/step0Vector.svg";
import PropTypes from "prop-types";
const Step0 = () => {
  return (
    <Flex
      w="100vw"
      h="fit-content"
      fontFamily="DM Sans"
      fontWeight="600"
      align="center"
      justify="center"
      direction="column"
      position="relative"
    >
      <Box
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
          <span style={{ color: "#007E24" }}> Apartment</span> Information
          <Img
            right={{ base: "28%", lg: "33%" }}
            top={{ base: "-60%", lg: "-20%" }}
            position="absolute"
            src={stillBird}
            alt="bird"
          />
        </Text>
      </Box>
      <Flex mt="2em" direction="column" rowGap="2em">
        <InformationBox
          bg="rgba(0, 126, 36, 1)"
          number="1"
          color="#fff"
          status="Approved"
        />
        <InformationBox
          bg="rgba(0, 0, 0, 1)"
          number="2"
          color="#fff"
          status="Denied"
        />
        <InformationBox
          bg="rgba(255, 255, 255, 1)"
          number="3"
          color="rgba(0, 0, 0, 1)"
          status="Pending"
        />
        <InformationBox
          bg="rgba(255, 255, 255, 1)"
          number="4"
          color="rgba(0, 126, 36, .7)"
          status="Approved W/ Conditions"
        />
        <Img src={step0Vector} position="absolute" bottom="5%" right="0%" />
      </Flex>
    </Flex>
  );
};

export default Step0;

const InformationBox = ({ color, bg, number, status }) => {
  return (
    <Flex w="80vw" direction="column" justify="center" align="center">
      <Flex w="70vw" justify="flex-start">
        <Flex
          w="50px"
          h="50px"
          bg="rgba(0, 126, 36, 1)"
          justify="center"
          align="center"
          fontSize="30px"
          color="#fff"
          borderRadius="50%"
        >
          <Text>{number}</Text>
        </Flex>
      </Flex>
      <Flex
        my="2em"
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        rowGap="2em"
        gap="3.5em"
      >
        <Flex
          w={{ base: "100%", md: "50%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Address
          </Text>
          <Input
            mt=".5em"
            bg="rgba(0, 126, 36, 0.09)"
            fontWeight="600"
            color="rgba(0, 126, 36, 1)"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
              bg: "rgba(0, 126, 36, 0.09)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="125 4TH Street"
          />
        </Flex>

        <Flex
          w={{ base: "100%", md: "50%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Type of apartment
          </Text>
          <Input
            mt=".5em"
            bg="rgba(0, 126, 36, 0.09)"
            fontWeight="600"
            color="rgba(0, 126, 36, 1)"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
              bg: "rgba(0, 126, 36, 0.09)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Condo"
          />
        </Flex>
      </Flex>
      <Flex
        mt="2em"
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "flex-end" }}
        rowGap="2em"
        gap="3.5em"
        pb="1em"
      >
        <Flex
          w={{ base: "100%", md: "50%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Rent Amount
          </Text>
          <Input
            mt=".5em"
            bg="rgba(0, 126, 36, 0.09)"
            fontWeight="600"
            color="rgba(0, 126, 36, 1)"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
              bg: "rgba(0, 126, 36, 0.09)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="$0"
          />
        </Flex>

        <Flex
          justify="center"
          align="center"
          h="2.5em"
          borderRadius="5px"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          color={color}
          w={{ base: "100%", md: "50%" }}
          bg={bg}
        >
          <Text>{status}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

InformationBox.propTypes = {
  color: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
