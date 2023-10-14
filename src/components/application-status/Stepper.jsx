import { Flex, Text, Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Stepper = () => {
  const Location = useLocation();
  const Navigate = useNavigate();

  return (
    <Flex
      w="100vw"
      pl="10%"
      mb="2em"
      overflow="visible"
      fontWeight="600"
      align="center"
      gap={{ base: "2em", md: "4.5em" }}
    >
      <Flex
        w={{ base: "30px", md: "50px" }}
        h={{ base: "30px", md: "50px" }}
        align="center"
        justify="center"
        borderRadius="50%"
        fontSize="18px"
        border="1px solid rgba(148, 148, 148, 1)"
        position="relative"
        overflow="visible"
        onClick={() => Navigate("/steps/step1")}
        cursor="pointer"
        _after={{
          content: `""`,
          w: { base: "20px", md: "40px" },
          h: "2px",
          bg: "rgba(13, 160, 0, 1)",
          position: "absolute",
          right: { base: "-95%", md: "-120%" },
          top: "50%",
        }}
      >
        {location.pathname !== "/steps/step1" ? (
          <Text color="rgba(0, 0, 0, 1)" opacity=".3">
            1
          </Text>
        ) : (
          <Box
            w="29px"
            h="29px"
            border="8px solid #007E24"
            borderRadius="50%"
          ></Box>
        )}
      </Flex>
      {Location.pathname === "/steps/step1" ? (
        <Text mr="-1em" textTransform="capitalize">
          {location.pathname.slice(7).replace(/(\d+)/, " $1")}
        </Text>
      ) : null}
      <Flex
        w={{ base: "30px", md: "50px" }}
        h={{ base: "30px", md: "50px" }}
        align="center"
        justify="center"
        borderRadius="50%"
        fontSize="18px"
        border="1px solid rgba(148, 148, 148, 1)"
        position="relative"
        overflow="visible"
        onClick={() => Navigate("/steps/step2")}
        cursor="pointer"
        _after={{
          content: `""`,
          w: { base: "20px", md: "40px" },
          h: "2px",
          bg: "rgba(13, 160, 0, 1)",
          position: "absolute",
          right: { base: "-95%", md: "-120%" },
          top: "50%",
        }}
      >
        {location.pathname !== "/steps/step2" ? (
          <Text color="rgba(0, 0, 0, 1)" opacity=".3">
            2
          </Text>
        ) : (
          <Box
            w="29px"
            h="29px"
            border="8px solid #007E24"
            borderRadius="50%"
          ></Box>
        )}
      </Flex>
      {Location.pathname === "/steps/step2" ? (
        <Text mr="-1em" textTransform="capitalize">
          {location.pathname.slice(7).replace(/(\d+)/, " $1")}
        </Text>
      ) : null}
      <Flex
        w={{ base: "30px", md: "50px" }}
        h={{ base: "30px", md: "50px" }}
        align="center"
        justify="center"
        borderRadius="50%"
        fontSize="18px"
        border="1px solid rgba(148, 148, 148, 1)"
        position="relative"
        overflow="visible"
        onClick={() => Navigate("/steps/step3")}
        cursor="pointer"
        _after={{
          content: `""`,
          w: { base: "20px", md: "40px" },
          h: "2px",
          bg: "rgba(13, 160, 0, 1)",
          position: "absolute",
          right: { base: "-95%", md: "-120%" },
          top: "50%",
        }}
      >
        {location.pathname !== "/steps/step3" ? (
          <Text color="rgba(0, 0, 0, 1)" opacity=".3">
            3
          </Text>
        ) : (
          <Box
            w="29px"
            h="29px"
            border="8px solid #007E24"
            borderRadius="50%"
          ></Box>
        )}
      </Flex>
      {Location.pathname === "/steps/step3" ? (
        <Text mr="-1em" textTransform="capitalize">
          {location.pathname.slice(7).replace(/(\d+)/, " $1")}
        </Text>
      ) : null}
      <Flex
        w={{ base: "30px", md: "50px" }}
        h={{ base: "30px", md: "50px" }}
        align="center"
        justify="center"
        borderRadius="50%"
        fontSize="18px"
        border="1px solid rgba(148, 148, 148, 1)"
        position="relative"
        overflow="visible"
        onClick={() => Navigate("/steps/step4")}
        cursor="pointer"
        _after={
          Location.pathname === "/steps/step4"
            ? {
                content: `""`,
                w: { base: "20px", md: "40px" },
                h: "2px",
                bg: "rgba(13, 160, 0, 1)",
                position: "absolute",
                right: { base: "-95%", md: "-120%" },
                top: "50%",
              }
            : null
        }
      >
        {location.pathname !== "/steps/step4" ? (
          <Text color="rgba(0, 0, 0, 1)" opacity=".3">
            4
          </Text>
        ) : (
          <Box
            w="29px"
            h="29px"
            border="8px solid #007E24"
            borderRadius="50%"
          ></Box>
        )}
      </Flex>
      {Location.pathname === "/steps/step4" ? (
        <Text mr="-1em" textTransform="capitalize">
          {location.pathname.slice(7).replace(/(\d+)/, " $1")}
        </Text>
      ) : null}
    </Flex>
  );
};

export default Stepper;
