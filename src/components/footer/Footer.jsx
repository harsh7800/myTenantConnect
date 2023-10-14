import { Flex, Img, Text, Link, Box } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { Facebook, Twitter } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default Footer;

const Desktop = () => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      h="214px"
      bg="rgba(230, 252, 236, 1)"
      as="footer"
      w="100vw"
      justify="space-between"
      px="2em"
      mt="2em"
      align="center"
    >
      <Flex
        align="center"
        gap="1em"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
      >
        <Text as="a">
          <Facebook />
        </Text>
        <Text as="a">
          <Twitter />
        </Text>
        <Flex
          direction="column"
          fontFamily="DM Sans"
          fontWeight="400"
          gap="1em"
          fontSize="13px"
        >
          <Link isExternal as="a">
            Contact us
          </Link>
          <Link isExternal as="a">
            Terms and Conditions
          </Link>
        </Flex>
      </Flex>
      <Img
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="800"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
        w="100px"
        src={logo}
        alt="logo"
      />
      <Flex
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="1200"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
        direction="column"
        fontFamily="DM Sans"
        fontWeight="400"
        align={{ base: "flex-start", md: "flex-end" }}
        gap="1em"
        fontSize="13px"
      >
        <Link isExternal as="a">
          Powered by Boost-Q
        </Link>
        <Link isExternal as="a">
          A product by never bland
        </Link>
      </Flex>
    </Flex>
  );
};

const Mobile = () => {
  return (
    <Flex
      py="1em"
      display={{ base: "flex", md: "none" }}
      h="fit-content"
      bg="rgba(230, 252, 236, 1)"
      as="footer"
      w="100vw"
      justify="space-between"
      direction={{ base: "column", sm: "row" }}
      px="2em"
      mt="2em"
      align={{ base: "flex-start", sm: "center" }}
    >
      <Box>
        <Img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-anchor-placement="center"
          data-aos-once="true"
          display={{ base: "none", sm: "block" }}
          w="60px"
          src={logo}
          alt="logo"
        />

        <Flex
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-delay="800"
          data-aos-duration="500"
          data-aos-anchor-placement="center"
          data-aos-once="true"
          direction="column"
          fontFamily="DM Sans"
          fontWeight="400"
          align={{ base: "flex-start" }}
          gap="1em"
          fontSize="13px"
        >
          <Link isExternal as="a">
            Powered by Boost-Q
          </Link>
          <Link isExternal as="a">
            A product by never bland
          </Link>
        </Flex>
      </Box>
      <Flex
        mt={{ base: "1em", sm: "0" }}
        align={{ base: "flex-start", sm: "flex-end" }}
        direction="column"
        gap="1em"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="1200"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
      >
        <Flex
          direction="column"
          align={{ base: "flex-start", sm: "flex-end" }}
          fontFamily="DM Sans"
          fontWeight="400"
          gap="1em"
          fontSize="13px"
        >
          <Link isExternal as="a">
            Contact us
          </Link>
          <Link isExternal as="a">
            Terms and Conditions
          </Link>
        </Flex>
        <Flex gap="1em" align={{ base: "flex-start", sm: "flex-end" }}>
          <Text as="a">
            <Facebook />
          </Text>
          <Text as="a">
            <Twitter />
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
