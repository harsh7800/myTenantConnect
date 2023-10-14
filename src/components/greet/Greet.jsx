import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import stillBird from "../../assets/stillBird.svg";
import handBag from "../../assets/handBag.svg";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
const Greet = () => {
  const [paymentMode, setPaymentMode] = useState("");
  return (
    <Flex
      w="100vw"
      h="fit-content"
      minH="500px"
      align="center"
      // justify="center"
      direction="column"
      gap="3em"
    >
      <Box
        mt="1.5em"
        overflow="visible"
        position="relative"
        w="auto"
        // border="2px solid black"
        h="fit-content"
        textAlign="center"
        fontFamily="Playfair Display"
        fontSize="35px"
        fontWeight="600"
      >
        <Img src={stillBird} position="absolute" left="-3%" top="-10%" />
        <Text>Thank you </Text>
        <Text color="rgba(0, 126, 36, 1)">For Choosing Us </Text>
      </Box>
      <Flex
        w="100vw"
        justify="center"
        flexWrap="wrap"
        // gap={{ base: "3em", xl: "3em", xxl: "6em" }}
        gap="4em"
      >
        <PaymentDetails
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
        />

        <CheckOut />
      </Flex>
      <Button
        w={{ base: "40%", lg: "35vw" }}
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
        Submit
      </Button>
    </Flex>
  );
};

export default Greet;

const PaymentDetails = ({ paymentMode, setPaymentMode }) => {
  return (
    <Flex
      w={{ base: "90vw", lg: "600px" }}
      bg="rgba(250, 250, 250, 1)"
      justify="center"
      align="center"
      direction="column"
      py="3em"
    >
      <Flex
        direction="column"
        w="75%"
        fontFamily="DM Sans"
        fontWeight="600"
        fontSize="14px"
        gap="2em"
        justify="flex-start"
        as="form"
      >
        <Text
          as="label"
          h="3em"
          w="100%"
          borderBottom="1px solid rgba(172, 172, 172, 1)"
        >
          Payment
        </Text>
        <Box>
          <Text as="label" w="100%">
            Pay With:
          </Text>
          <RadioGroup mt="1em" onChange={setPaymentMode} value={paymentMode}>
            <HStack>
              <Radio
                fontWeight="400"
                fontSize="14px"
                colorScheme="green"
                value="1"
              >
                Card
              </Radio>
              <Radio fontSize="14px" colorScheme="green" value="2">
                Bank
              </Radio>
              <Radio fontSize="14px" colorScheme="green" value="3">
                Transfer
              </Radio>
            </HStack>
          </RadioGroup>
        </Box>
        <Box>
          <Text as="label" w="100%">
            Card Number
          </Text>
          <Input
            mt="1em"
            w="100%"
            border="1px solid rgba(172, 172, 172, 1)"
            placeholder="1234  5678  9101  1121"
            _placeholder={{
              opacity: 0.5,
              fontsize: "14px",
              color: "rgba(172, 172, 172, 1)",
            }}
          />
        </Box>
        <Flex gap="1em">
          <Box>
            <Text as="label" w="50%">
              Expiration Date
            </Text>
            <Input
              mt="1em"
              w="100%"
              border="1px solid rgba(172, 172, 172, 1)"
              placeholder="MM/YY"
              _placeholder={{
                opacity: 0.5,
                fontsize: "14px",
                color: "rgba(172, 172, 172, 1)",
              }}
            />
          </Box>
          <Box>
            <Text as="label" w="50%">
              CVV
            </Text>
            <Input
              mt="1em"
              w="100%"
              border="1px solid rgba(172, 172, 172, 1)"
              placeholder="123"
              _placeholder={{
                opacity: 0.5,
                fontsize: "14px",
                color: "rgba(172, 172, 172, 1)",
              }}
            />
          </Box>
        </Flex>
        <Checkbox
          colorScheme="green"
          color="rgba(172, 172, 172, 1)"
          fontWeight="400"
        >
          Save card details
        </Checkbox>
        <Button
          bg="rgba(0, 126, 36, 1)"
          w="100%"
          h="4em"
          color="#fff"
          fontSize="14px"
          fontWeight="400"
          _hover={{ transform: "scale(.95)" }}
        >
          Pay USD59.28
        </Button>
        <Text
          as="p"
          color="rgba(172, 172, 172, 1)"
          textAlign="left"
          opacity=""
          fontWeight="400"
        >
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </Text>
      </Flex>
    </Flex>
  );
};
PaymentDetails.propTypes = {
  paymentMode: PropTypes.bool.isRequired,
  setPaymentMode: PropTypes.func.isRequired,
};
const CheckOut = () => {
  return (
    <Flex
      w={{ base: "90vw", lg: "600px" }}
      justify="flex-start"
      direction="column"
      bg="transparent"
      py="3em"
      fontFamily="DM Sans"
      fontWeight="600"
      fontSize="14px"
    >
      <Text
        as="label"
        h="3em"
        w="100%"
        borderBottom="1px solid rgba(172, 172, 172, 1)"
      >
        Rent payment
      </Text>
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        borderBottom="1px solid rgba(172, 172, 172, 1)"
        py="2.5em"
      >
        <Flex gap="2em">
          <Img src={handBag} alt="product" />
          <Box>
            <Text>Taxmax Leather Bag</Text>
            <Text fontWeight="400" color="rgba(172, 172, 172, 1)">
              Brown Vegan Leather
            </Text>
          </Box>
        </Flex>
        <Box>
          <Text>$49.80</Text>
          <Text fontWeight="400" color="rgba(172, 172, 172, 1)">
            Qty: 2
          </Text>
        </Box>
      </Flex>
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        borderBottom="1px solid rgba(172, 172, 172, 1)"
        py="2em"
      >
        <Box>
          <Text>Tax</Text>
          <Text mt="1em">Co-Signer Verifcation</Text>
        </Box>
        <Box>
          <Text>$49.80</Text>
          <Text mt="1em">Qty: 2</Text>
        </Box>
      </Flex>
      <Flex w="100%" justify="space-between" align="center" py="2em">
        <Box>
          <Text>Tax</Text>
          <Text mt="1em">Co-Signer Verifcation</Text>
        </Box>
        <Box>
          <Text>$49.80</Text>
          <Text mt="1em">Qty: 2</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
