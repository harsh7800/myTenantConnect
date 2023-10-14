import {
  Flex,
  Text,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
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
      <TenantQuestionnaire />
      <Button
        onClick={() => Navigate("/steps/step3")}
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
        Confirm & Continue
      </Button>
    </Flex>
  );
};

export default Step2;

const TenantQuestionnaire = () => {
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
        Tenant Questionnaire
      </Text>
      {/* //this code contains inputs of @1st Row Type (Apt, Home, Condo) */}
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "flex-end" }}
        gap="3em"
      >
        <Flex
          w={{ base: "100%", md: "50%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Number Of Occupants Associated With Application
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
            placeholder="Adults"
          />
        </Flex>
        <Input
          w={{ base: "100%", md: "50%" }}
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
          placeholder="Children Under 18"
        />
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        rowGap="2em"
      >
        <Flex
          w={{ base: "100%", md: "30%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Pets
          </Text>
          <RadioGroup mt="1em">
            <Stack direction="row" spacing="5">
              <Radio colorScheme="green" value="Own">
                Yes
              </Radio>
              <Radio colorScheme="green" value="Rent">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "55%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            If Yes, Explain W/ Weight,
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
            placeholder="Further Explain W/ Weight  "
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
          w={{ base: "100%", md: "30%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Have You Ever Been Convicted Or Arrested?
          </Text>
          <RadioGroup mt="1em">
            <Stack direction="row" spacing="5">
              <Radio colorScheme="green" value="Own">
                Yes
              </Radio>
              <Radio colorScheme="green" value="Rent">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "55%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            If Yes Explain
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
            placeholder="Further Explain"
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
          w={{ base: "100%", md: "30%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Have You Ever Been Evicted?
          </Text>
          <RadioGroup mt="1em">
            <Stack direction="row" spacing="5">
              <Radio colorScheme="green" value="Own">
                Yes
              </Radio>
              <Radio colorScheme="green" value="Rent">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "55%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            If Yes, Futher Explain
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
            placeholder="Further Explain"
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
          w={{ base: "100%", md: "30%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Ever Filed For Bankruptcy Or Have Any Liens?
          </Text>
          <RadioGroup mt="1em">
            <Stack direction="row" spacing="5">
              <Radio colorScheme="green" value="Own">
                Yes
              </Radio>
              <Radio colorScheme="green" value="Rent">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "55%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            If Yes Explain
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
            placeholder="Further Explain"
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
          w={{ base: "100%", md: "30%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Ever Filed For Bankruptcy Or Have Any Liens?
          </Text>
          <RadioGroup mt="1em">
            <Stack direction="row" spacing="5">
              <Radio colorScheme="green" value="Own">
                Yes
              </Radio>
              <Radio colorScheme="green" value="Rent">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "55%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            If Yes Explain
          </Text>
          <Input
            p="0"
            w="40px"
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
            placeholder=""
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
