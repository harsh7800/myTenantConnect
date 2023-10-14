import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Img,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const Navref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      Navref.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.3, delay: 1 }
    );
  }, []);

  return (
    <Flex
      ref={Navref}
      overflow="hidden"
      as="nav"
      fontFamily="DM Sans"
      w="100vw"
      h="81px"
      borderBottom="1px solid #0000002B"
      fontSize={{ base: "14px", sm: "16px" }}
      align="center"
      justify="space-between"
      px={{ base: "1em", md: "3.5em" }}
      position="relative"
      zIndex="100"
      bg="#fff"
    >
      <Flex
        className="logo"
        as="h3"
        align="center"
        lineHeight="30px"
        justify="center"
        textTransform="uppercase"
        letterSpacing={{ base: "1.5px", sm: "3px" }}
        gap=".5em"
        color="#007E24"
        onClick={() => window.location.reload()}
        cursor="pointer"
      >
        <Img src={logo} />
        <Text>my template connect</Text>
      </Flex>

      <Flex
        data-aos="fade-down"
        className="links"
        align="center"
        justify="center"
        gap="1.5em"
        display={{ base: "none", xl: "flex" }}
      >
        <Link to="/" fontWeight="500">
          Home
        </Link>
        <Link to="/Application-Status" fontWeight="500">
          Application Status
        </Link>
        <Link to="/Tenant-FAQ" fontWeight="500">
          Tenant FAQ
        </Link>
        <Link to="/Partnership-Program" fontWeight="500">
          Partnership Program
        </Link>
      </Flex>

      <Flex
        data-aos="fade-down"
        className="buttons"
        align="center"
        justify="center"
        fontWeight="700"
        gap="1em"
        display={{ base: "none", xl: "flex" }}
      >
        <Button
          letterSpacing="3px"
          bg="transparent"
          color="#007E24"
          border="1px solid #007E24"
          borderRadius="7px"
          px="32px"
          _hover={{ bg: "#007E24", color: "#fff" }}
        >
          Login
        </Button>
        <Button
          letterSpacing="3px"
          bg="#007E24"
          px="32px"
          color="#fff"
          _hover={{ opacity: 0.7 }}
        >
          Register
        </Button>
      </Flex>

      <SideDrawer />
    </Flex>
  );
};

export default Navbar;

function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        bg="none"
        _hover={{ bg: "none" }}
        display={{ base: "block", xl: "none" }}
      >
        <Menu size={32} strokeWidth={2.5} onClick={() => isOpen()} />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            alignItems="flex-start"
            gap="1.5em"
            pt="20%"
            pb="5%"
          >
            <Link to="/" fontWeight="500">
              Home
            </Link>
            <Link to="/Application-Status" fontWeight="500">
              Application Status
            </Link>
            <Link to="/Tenant-FAQ" fontWeight="500">
              Tenant FAQ
            </Link>
            <Link to="/Partnership-Program" fontWeight="500">
              Partnership Program
            </Link>
            <Spacer />
            <Flex
              align="center"
              justify="center"
              fontWeight="700"
              gap="1em"
              display={{ base: "flex", xl: "none" }}
            >
              <Button
                letterSpacing="3px"
                bg="transparent"
                color="#007E24"
                border="1px solid #007E24"
                borderRadius="7px"
                px="32px"
                _hover={{ bg: "#007E24", color: "#fff" }}
              >
                Login
              </Button>
              <Button
                letterSpacing="3px"
                bg="#007E24"
                px="32px"
                color="#fff"
                _hover={{ opacity: 0.7 }}
              >
                Register
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
