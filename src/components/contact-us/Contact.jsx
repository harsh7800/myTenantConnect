import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import longArrow from "../../assets/longArrow.svg";
import { useFormik } from "formik";

const Contact = () => {
  const [lessthan600] = useMediaQuery("(min-width: 600px)");
  return (
    <Flex
      mt="2em"
      mb="4em"
      pb="2em"
      justify="center"
      position="relative"
      align="center"
      w="100vw"
      h="fit-content"
    >
      <Flex
        w="90vw"
        maxW="1800px"
        pt="5em"
        pb="2em"
        borderRadius="20px"
        border="4px solid rgba(0, 126, 36, 1)"
        fontFamily="DM Sans"
        pr="5%"
        pl="7%"
        justify="center"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        gap="3em"
        overflow="hidden"
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          w={{ base: "100%", lg: "30%" }}
          overflow="visible"
        >
          <Text
            fontWeight="700"
            lineHeight={{ base: "50px", lg: "77.23px" }}
            fontSize={{ base: "35px", md: "45px", xl: "4vw" }}
            position="relative"
            overflow="visible"
            _after={{
              content: `" "`,
              position: "absolute",
              w: "181px",
              h: { base: "7px", lg: "10px" },
              left: "0%",
              bottom: { base: "-15%", xl: "-30%" },
              bg: "rgba(0, 126, 36, 1)",
              borderRadius: "25px",
            }}
          >
            {lessthan600
              ? "Let’s Get in \n Touch" // Use {"\n"} for a line break
              : "Let’s Get in Touch"}
          </Text>

          <Box
            display={{ base: "none", lg: "block" }}
            mt="6em"
            ml={{ base: "0", xl: "-4em" }}
            w="100%"
            textAlign="left"
          >
            <Text>
              Thank you for your interest in our tenant screening service!
            </Text>
            <Text mt="2em">
              We are always happy to hear from our customers and welcome any
              questions, comments, or feedback you may have.
            </Text>
          </Box>
          <Text mt="2em" color="black" fontWeight="600">
            Info@
            <span style={{ color: "rgba(0, 126, 36, 1)" }}>
              mytenantconnect.com
            </span>
          </Text>
        </Flex>
        <ContactForm />
      </Flex>
      <GreenShade
        blur="130px"
        width={{ base: "250px", lg: "350px" }}
        height={{ base: "250px", lg: "350px" }}
        left="20%"
        bottom="0"
      />
    </Flex>
  );
};

export default Contact;

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      contact_phone: "",
      city_town: "",
      feedback: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex
      as="form"
      onSubmit={formik.handleSubmit}
      fontFamily="DM Sans"
      fontWeight="600"
      fontSize="20px"
      w={{ base: "100%", lg: "70%" }}
      direction="column"
      justify="flex-start"
      gap="2em"
    >
      <GreenShade
        blur="70px"
        width="150px"
        height="150px"
        right={{ base: "0%", xl: "5%" }}
        bottom={{ base: "85%", xl: "50%" }}
      />
      <Flex align="center" gap="3em">
        <Flex w="50%" direction="column">
          <Text htmlFor="fullname" color="rgba(0, 126, 36, 1)" as="label">
            Fullname:
          </Text>
          <Input
            required
            id="fullname"
            name="fullname"
            type="text"
            bg="#fff"
            fontWeight="600"
            onChange={formik.handleChange}
            value={formik.values.fullname}
            color="black"
            _placeholder={{ color: "rgba(0, 0, 0, 0.38)" }}
            _focusVisible={{
              bg: "rgba(0, 0, 0, 0.06)",
              border: "none",
              borderBottom: "1px solid rgba(133, 133, 133, 1)",
            }}
            borderRadius="0px"
            border="none"
            borderBottom="1px solid rgba(133, 133, 133, 1)"
            placeholder="John Doe I"
          />
        </Flex>
        <Flex w="50%" direction="column">
          <Text htmlFor="email" color="rgba(0, 126, 36, 1)" as="label">
            Email:
          </Text>

          <Input
            required
            id="email"
            name="email"
            type="email"
            bg="#fff"
            fontWeight="600"
            onChange={formik.handleChange}
            value={formik.values.email}
            color="black"
            _placeholder={{ color: "rgba(0, 0, 0, 0.38)" }}
            _focusVisible={{
              bg: "rgba(0, 0, 0, 0.06)",
              border: "none",
              borderBottom: "1px solid rgba(133, 133, 133, 1)",
            }}
            borderRadius="0px"
            border="none"
            borderBottom="1px solid rgba(133, 133, 133, 1)"
            placeholder="John Doe I"
          />
        </Flex>
      </Flex>
      <Flex align="center" gap="3em">
        <Flex w="50%" direction="column">
          <Text htmlFor="contact_phone" color="rgba(0, 126, 36, 1)" as="label">
            Contact Phone:
          </Text>
          <Input
            required
            id="contact_phone"
            name="contact_phone"
            onChange={formik.handleChange}
            value={formik.values.contact_phone}
            type="number"
            bg="#fff"
            fontWeight="600"
            color="black"
            _placeholder={{ color: "rgba(0, 0, 0, 0.38)" }}
            _focusVisible={{
              bg: "rgba(0, 0, 0, 0.06)",
              border: "none",
              borderBottom: "1px solid rgba(133, 133, 133, 1)",
            }}
            borderRadius="0px"
            border="none"
            borderBottom="1px solid rgba(133, 133, 133, 1)"
            placeholder="John Doe I"
          />
        </Flex>
        <Flex w="50%" direction="column">
          <Text htmlFor="city_town" color="rgba(0, 126, 36, 1)" as="label">
            City/Town:
          </Text>

          <Input
            required
            id="city_town"
            name="city_town"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city_town}
            bg="#fff"
            fontWeight="600"
            color="black"
            _placeholder={{ color: "rgba(0, 0, 0, 0.38)" }}
            _focusVisible={{
              bg: "rgba(0, 0, 0, 0.06)",
              border: "none",
              borderBottom: "1px solid rgba(133, 133, 133, 1)",
            }}
            borderRadius="0px"
            border="none"
            borderBottom="1px solid rgba(133, 133, 133, 1)"
            placeholder="John Doe I"
          />
        </Flex>
      </Flex>
      <Flex direction="column">
        <Text htmlFor="feedback" color="rgba(0, 126, 36, 1)" as="label">
          Feedback:
        </Text>
        <Textarea
          required
          id="feedback"
          name="feedback"
          onChange={formik.handleChange}
          value={formik.values.feedback}
          bg="#fff"
          fontWeight="600"
          borderRadius="0px"
          _placeholder={{ color: "rgba(0, 0, 0, 0.38)" }}
          _focusVisible={{
            bg: "rgba(0, 0, 0, 0.06)",
            border: "none",
            borderBottom: "1px solid rgba(133, 133, 133, 1)",
          }}
          border="none"
          h="200px"
          borderBottom="1px solid rgba(133, 133, 133, 1)"
          w="100%"
          placeholder="Describe your feedback"
        />
      </Flex>
      <Box
        cursor="pointer"
        transition="all .2s ease-in-out "
        _hover={{ transform: "scale(.9)" }}
        w="312px"
        _after={{
          content: `" "`,
          position: "absolute",
          w: "1px",
          h: "61px",
          right: "25%",
          top: "15%",
          bg: "#fff",
        }}
        position="relative"
        overflow="visible"
      >
        <Button
          _focusVisible={{ opacity: 0.7 }}
          _hover={{ bg: "rgba(0, 126, 36, 1)" }}
          w="312px"
          color="#fff"
          h="83px"
          borderRadius="5px"
          bg="rgba(0, 126, 36, 1)"
          pr="5em"
          type="submit"
        >
          Submit message
        </Button>
        <Img
          w="34px"
          position="absolute"
          right="5%"
          top="45%"
          src={longArrow}
        />
      </Box>
    </Flex>
  );
};

const GreenShade = ({ width, height, right, left, top, bottom, blur }) => {
  return (
    <Box
      position="absolute"
      w={width}
      h={height}
      borderRadius="50%"
      bg="rgba(0, 126, 36, 1)"
      right={right}
      left={left}
      top={top}
      bottom={bottom}
      zIndex="-1"
      filter={`blur(${blur})`}
    ></Box>
  );
};
GreenShade.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  right: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  blur: PropTypes.string.isRequired,
};
