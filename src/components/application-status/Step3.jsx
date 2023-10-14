import {
  Flex,
  HStack,
  Input,
  RadioGroup,
  Text,
  Radio,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const Navigate = useNavigate();

  return (
    <Flex
      w="100vw"
      h="fit-content"
      fontFamily="DM Sans"
      fontWeight="600"
      align="center"
      direction="column"
    >
      <CurrentResident />
      <CurrentLandlordInformation />
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        //   w={{ base: "85%", md: "80%" }}
        w={{ base: "85%", md: "80%" }}
      >
        <Text>Do You Have Any Previous Employment? </Text>
        <RadioGroup mt="1em">
          <HStack spacing="10">
            <Radio colorScheme="green" value="1">
              Yes
            </Radio>
            <Radio colorScheme="green" value="2">
              No
            </Radio>
          </HStack>
        </RadioGroup>
      </Flex>
      <PreviousResident />
      <PreviousLandlordInformation />
      <Button
        onClick={() => Navigate("/steps/step4")}
        my="2em"
        w={{ base: "85vw", md: "500px", lg: "762px" }}
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

export default Step3;

const CurrentResident = () => {
  return (
    <Flex
      w="100vw"
      maxW="2000px"
      bg="rgba(246, 253, 248, 1)"
      fontFamily="DM Sans"
      fontWeight="700"
      direction="column"
      fontSize={{ base: "12px", md: "16px" }}
      align="center"
      py="4em"
      gap="2em"
    >
      <Text fontSize={{ base: "18px", lg: "25px" }} color="rgba(0, 126, 36, 1)">
        Current Residence
      </Text>
      {/* //this code contains inputs of @1st Row Type (Apt, Home, Condo) */}
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Type (Apt, Home, Condo)
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Type"
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "45%" }}
          align="flex-start"
          justify="space-between"
        >
          <Flex w="48%" direction="column" justify="flex-start">
            <Text color="rgba(0, 0, 0, 1)" as="label">
              Bedrooms
            </Text>
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="City"
            />
          </Flex>
          <Flex w="48%" direction="column" justify="flex-start">
            <Text color="rgba(0, 0, 0, 1)" as="label">
              Baths
            </Text>
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="City"
            />
          </Flex>
        </Flex>
      </Flex>
      {/* //this code contains inputs of @2nd Row [Street Address, City,State, Zip] */}
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        rowGap="2em"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Street Address
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Enter Address"
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Fill these spaces
          </Text>
          <HStack spacing={{ base: "2", md: "30" }}>
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="City"
            />
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="State"
            />
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="Zip"
            />
          </HStack>
        </Flex>
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        rowGap="2em"
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Select one
          </Text>
          <RadioGroup mt="1em">
            <Stack direction={{ base: "column", md: "row" }} spacing="5">
              <Radio colorScheme="green" value="Own">
                Own
              </Radio>
              <Radio colorScheme="green" value="Rent">
                Rent
              </Radio>
              <Radio colorScheme="green" value="Family living">
                Family living
              </Radio>
              <Radio colorScheme="green" value="Other">
                Other
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Further Explain Your Living Situation
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Other"
          />
        </Flex>
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        rowGap="2em"
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Employed
          </Text>
          <HStack spacing={{ base: "5", md: "30" }}>
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="From MM/YY"
            />
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="To MM/YY"
            />
          </HStack>
        </Flex>
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Monthly Income
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="$"
          />
        </Flex>
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        direction="column"
        align="flex-start"
      >
        <Text color="rgba(0, 0, 0, 1)" as="label">
          Desire for Moving ?
        </Text>
        <Input
          mt="1em"
          bg="rgba(169, 169, 169, 0.09)"
          fontWeight="600"
          color="black"
          _placeholder={{
            color: "rgba(106, 106, 106, 1)",
            fontWeight: "500",
          }}
          _focusVisible={{
            border: "1px solid rgba(130, 130, 130, 1)",
          }}
          borderRadius="6px"
          border="1px solid rgba(130, 130, 130, 1)"
          placeholder="Type"
        />
      </Flex>
    </Flex>
  );
};

const CurrentLandlordInformation = () => {
  return (
    <Flex
      my="4em"
      w="100vw"
      maxW="2000px"
      bg="rgba(246, 253, 248, 1)"
      fontFamily="DM Sans"
      fontWeight="700"
      direction="column"
      align="center"
      py="4em"
      gap="2em"
    >
      <Text
        textAlign="center"
        fontSize={{ base: "18px", lg: "25px" }}
        color="rgba(0, 126, 36, 1)"
      >
        Current Landlord Information
      </Text>
      {/* //this code contains inputs of @1st Row [Employment Type, Position, Company] */}
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        rowGap="2em"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
      >
        <Flex
          w={{ base: "100%", md: "35%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Name
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Supervisor Name "
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "20%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Phone
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="xxx xxx xxx"
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "35%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Email
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Email"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

const PreviousResident = () => {
  return (
    <Flex
      w="100vw"
      maxW="2000px"
      bg="rgba(246, 253, 248, 1)"
      fontFamily="DM Sans"
      fontWeight="700"
      direction="column"
      fontSize={{ base: "12px", md: "16px" }}
      align="center"
      py="4em"
      gap="2em"
      mt="3em"
    >
      <Text fontSize={{ base: "18px", lg: "25px" }} color="rgba(0, 126, 36, 1)">
        Previous Residence
      </Text>
      {/* //this code contains inputs of @1st Row Type (Apt, Home, Condo) */}
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Type (Apt, Home, Condo)
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Type"
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "45%" }}
          align="flex-start"
          justify="space-between"
        >
          <Flex w="48%" direction="column" justify="flex-start">
            <Text color="rgba(0, 0, 0, 1)" as="label">
              Bedrooms
            </Text>
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="City"
            />
          </Flex>
          <Flex w="48%" direction="column" justify="flex-start">
            <Text color="rgba(0, 0, 0, 1)" as="label">
              Baths
            </Text>
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="City"
            />
          </Flex>
        </Flex>
      </Flex>
      {/* //this code contains inputs of @2nd Row [Street Address, City,State, Zip] */}
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        rowGap="2em"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Street Address
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Enter Address"
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Fill these spaces
          </Text>
          <HStack spacing={{ base: "2", md: "30" }}>
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="City"
            />
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="State"
            />
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="Zip"
            />
          </HStack>
        </Flex>
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        rowGap="2em"
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Select one
          </Text>
          <RadioGroup mt="1em">
            <Stack direction={{ base: "column", md: "row" }} spacing="5">
              <Radio colorScheme="green" value="Own">
                Own
              </Radio>
              <Radio colorScheme="green" value="Rent">
                Rent
              </Radio>
              <Radio colorScheme="green" value="Family living">
                Family living
              </Radio>
              <Radio colorScheme="green" value="Other">
                Other
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Further Explain Your Living Situation
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Other"
          />
        </Flex>
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        rowGap="2em"
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Employed
          </Text>
          <HStack spacing={{ base: "5", md: "30" }}>
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="From MM/YY"
            />
            <Input
              mt="1em"
              bg="rgba(169, 169, 169, 0.09)"
              fontWeight="600"
              color="black"
              _placeholder={{
                color: "rgba(106, 106, 106, 1)",
                fontWeight: "500",
              }}
              _focusVisible={{
                border: "1px solid rgba(130, 130, 130, 1)",
              }}
              borderRadius="6px"
              border="1px solid rgba(130, 130, 130, 1)"
              placeholder="To MM/YY"
            />
          </HStack>
        </Flex>
        <Flex
          w={{ base: "100%", md: "45%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Monthly Income
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="$"
          />
        </Flex>
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        direction="column"
        align="flex-start"
      >
        <Text color="rgba(0, 0, 0, 1)" as="label">
          Desire for Moving ?
        </Text>
        <Input
          mt="1em"
          bg="rgba(169, 169, 169, 0.09)"
          fontWeight="600"
          color="black"
          _placeholder={{
            color: "rgba(106, 106, 106, 1)",
            fontWeight: "500",
          }}
          _focusVisible={{
            border: "1px solid rgba(130, 130, 130, 1)",
          }}
          borderRadius="6px"
          border="1px solid rgba(130, 130, 130, 1)"
          placeholder="Type"
        />
      </Flex>
    </Flex>
  );
};

const PreviousLandlordInformation = () => {
  return (
    <Flex
      my="4em"
      w="100vw"
      maxW="2000px"
      bg="rgba(246, 253, 248, 1)"
      fontFamily="DM Sans"
      fontWeight="700"
      direction="column"
      align="center"
      py="4em"
      gap="2em"
    >
      <Text
        textAlign="center"
        fontSize={{ base: "18px", lg: "25px" }}
        color="rgba(0, 126, 36, 1)"
      >
        Previous Landlord Information
      </Text>
      {/* //this code contains inputs of @1st Row [Employment Type, Position, Company] */}
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        rowGap="2em"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
      >
        <Flex
          w={{ base: "100%", md: "35%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Name
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Supervisor Name "
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "20%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Phone
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="xxx xxx xxx"
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "35%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Email
          </Text>
          <Input
            mt="1em"
            bg="rgba(169, 169, 169, 0.09)"
            fontWeight="600"
            color="black"
            _placeholder={{
              color: "rgba(106, 106, 106, 1)",
              fontWeight: "500",
            }}
            _focusVisible={{
              border: "1px solid rgba(130, 130, 130, 1)",
            }}
            borderRadius="6px"
            border="1px solid rgba(130, 130, 130, 1)"
            placeholder="Email"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
