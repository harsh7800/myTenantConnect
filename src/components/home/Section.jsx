import { Flex, Img, Text } from "@chakra-ui/react";
import tenants_served from "../../assets/tenants-served.svg";
import rating from "../../assets/rating.svg";
import Testimonials from "./TestiMonials";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useInView } from "react-intersection-observer";

// import useCount from "./useCount";
import PropTypes from "prop-types";
import { useCountUp } from "use-count-up";

gsap.registerPlugin(ScrollTrigger);

const Section = ({ titleRef, ratingRef }) => {
  const [ref, inView] = useInView({
    threshold: 1, // Adjust the threshold as needed
  });
  const subTitleref = useRef();
  const subTitleref2 = useRef();
  const start = 0;
  const end = 2350000;
  const duration = 3; // 3 seconds
  const thousandsSeparator = ",";
  const easing = "linear";
  const [show, setShow] = useState(false);

  const { value } = useCountUp({
    isCounting: show,
    start,
    end,
    duration,
    easing,
    thousandsSeparator,
  });
  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      subTitleref.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: subTitleref.current,
          start: "top center", // Adjust the trigger start point as needed
          end: "center center", // Adjust the trigger end point as needed
        },
      }
    ).fromTo(
      subTitleref2.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: subTitleref2.current,
          start: "top center", // Adjust the trigger start point as needed
          end: "center center", // Adjust the trigger end point as needed
        },
      }
    );
  }, []);
  return (
    <Flex
      as="main"
      fontFamily="DM Sans"
      fontWeight="600"
      flexDirection="column"
      // justify="center"
      align="center"
      w="100vw"
      pt="4em"
    >
      <Text
        ref={titleRef}
        textAlign="center"
        fontSize={{ base: "25px", lg: "35px" }}
        letterSpacing="1px"
        as="h1"
      >
        <span style={{ color: "#007E24" }}>We Are On</span> The Track To Save
        Tenants Over
      </Text>
      <Flex align="center" justify="center" ref={ratingRef}>
        <Img
          src={tenants_served}
          alt="tenants_served"
          w={{ base: "150px", md: "219px" }}
        />

        <Text
          ref={ref}
          fontSize={{ base: "30px", md: "50px", lg: "70px" }}
          color="#fff"
          bg="#007E24"
          px=".5em"
          borderRadius="25px"
          as="h1"
        >
          {/* $2,350,000 */}
          {`$ ${value}`}
        </Text>
      </Flex>
      <Text
        data-aos="fade-down"
        data-aos-offset="500"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
        textAlign="center"
        fontSize={{ base: "25px", lg: "35px" }}
        as="h1"
      >
        This Year On{" "}
        <span style={{ color: "#007E24" }}>Rental Application Fees</span>
      </Text>
      <Flex
        data-aos="fade-down"
        data-aos-offset="500"
        data-aos-duration="500"
        data-aos-anchor-placement="center"
        data-aos-once="true"
        w={{ base: "90%", md: "auto" }}
        align="center"
        justify="center"
        border="4px solid #007E2445"
        borderRadius="20px"
        gap="0em"
        my="5em"
        p={{ base: "1em 1.5em", lg: "1em 3em" }}
      >
        <Img src={rating} alt="rating" w="150px" />
        <Text
          as="h1"
          fontSize={{ base: "20px", md: "20px", lg: "35px", xl: "44px" }}
          color="#007E24"
          fontWeight="700"
          letterSpacing="2px"
          textAlign="center"
        >
          <span style={{ fontWeight: 500 }}>97%</span> Customer Satisfaction
          Rating
        </Text>
      </Flex>
      <Testimonials />
    </Flex>
  );
};

export default Section;

Section.propTypes = {
  titleRef: PropTypes.element,
  ratingRef: PropTypes.element,
};
