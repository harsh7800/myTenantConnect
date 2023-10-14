import { Text, Flex, Img } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import testimonial_vector from "../../assets/testimonial_vector.svg";
import profile from "../../assets/profile.svg";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import Aos from "aos";
import Marquee from "react-fast-marquee";
import "aos/dist/aos.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Testimonials = () => {
  const subTitleref = useRef(null);
  const subTitleref2 = useRef(null);
  const testimonialRef = useRef(null);
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     subTitleref.current,
  //     { opacity: 0, y: -20 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: subTitleref.current,
  //       },
  //       duration: 1,
  //       ease: "power3.inOut",
  //       delay: 2,
  //     }
  //   )
  //     .fromTo(
  //       subTitleref2.current,
  //       { opacity: 0, y: -20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scrollTrigger: {
  //           trigger: subTitleref2.current,
  //         },
  //         duration: 1,
  //         ease: "power3.inOut",
  //       }
  //     )
  //     .fromTo(
  //       testimonialRef.current.children,
  //       { opacity: 0, y: -20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.3,
  //         scrollTrigger: {
  //           trigger: subTitleref2.current,
  //         },
  //         duration: 1,
  //         ease: "power3.inOut",
  //       }
  //     );
  // }, []);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Flex
      w="100vw"
      as="section"
      align="center"
      justify="center"
      fontFamily="DM Sans"
      fontWeight="700"
      direction="column"
      gap="1em"
      overflow="hidden"
      mb="3em"
    >
      <Text
        ref={subTitleref}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-anchor-placement={subTitleref}
        data-aos-once="true"
        textAlign="center"
        fontSize={{ base: "25px", lg: "35px", xl: "44px" }}
        letterSpacing="2px"
        position="relative"
      >
        Trusted By <span style={{ color: "#007E24" }}>Tenants</span> &{" "}
        <span style={{ color: "#007E24" }}>Landlords</span>
      </Text>
      <Text
        ref={subTitleref2}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-anchor-placement={subTitleref2}
        data-aos-once="true"
        textAlign="center"
        color="#4F4F4F"
        w={{ base: "95%", lg: "750px" }}
        fontWeight="500"
        fontSize="20px"
      >
        Our commitment to excellence and customer satisfaction sets us apart in
        the industry. Join our community today and experience the difference.{" "}
      </Text>
      <Marquee pauseOnHover>
        <Flex
          ref={testimonialRef}
          justify="center"
          align="center"
          columnGap="1em"
          rowGap="3em"
          flexWrap={{ base: "wrap" }}
          overflow="visible"
        >
          <Feedback
            delay="300"
            ref={testimonialRef}
            profile={profile}
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          Dolore."
            Name="Mark Zuck"
            client="owner"
          />
          <Feedback
            delay="500"
            ref={testimonialRef}
            profile={profile}
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          Dolore."
            Name="Mark Zuck"
            client="owner"
          />
          <Feedback
            delay="500"
            ref={testimonialRef}
            profile={profile}
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          Dolore."
            Name="Mark Zuck"
            client="owner"
          />
          <Feedback
            delay="500"
            ref={testimonialRef}
            profile={profile}
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          Dolore."
            Name="Mark Zuck"
            client="owner"
          />
        </Flex>
      </Marquee>
      <Marquee pauseOnHover>
        <Flex
          mt="1em"
          ref={testimonialRef}
          justify="center"
          align="center"
          columnGap="1em"
          rowGap="3em"
          flexWrap={{ base: "wrap" }}
          overflow="visible"
        >
          <Feedback
            delay="300"
            ref={testimonialRef}
            profile={profile}
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          Dolore."
            Name="Mark Zuck"
            client="tenant"
          />
          <Feedback
            delay="500"
            ref={testimonialRef}
            profile={profile}
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          Dolore."
            Name="Mark Zuck"
            client="tenant"
          />
          <Feedback
            delay="500"
            ref={testimonialRef}
            profile={profile}
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          Dolore."
            Name="Mark Zuck"
            client="tenant"
          />
          <Feedback
            delay="500"
            ref={testimonialRef}
            profile={profile}
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          Dolore."
            Name="Mark Zuck"
            client="tenant"
          />
        </Flex>
      </Marquee>
    </Flex>
  );
};

export default Testimonials;

const Feedback = ({ profile, Name, comment, ref, delay, client }) => {
  return (
    <Flex
      data-aos="fade-down"
      data-aos-easing="ease-inOut"
      data-aos-delay={delay}
      data-aos-duration="500"
      data-aos-anchor-placement={ref}
      data-aos-once="true"
      overflow="hidden"
      w="auto"
      align="center"
      justify="center"
      gap="2.5em"
      px={{ base: "1em", md: 0 }}
    >
      <Flex
        w="100px"
        h="100px"
        bgImage={testimonial_vector}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="left"
        position="relative"
        overflow="visible"
      >
        <Img
          w="60px"
          position="absolute"
          top="0%"
          right="-20%"
          src={profile}
          alt="profile"
        />
      </Flex>
      <Flex
        w={{ base: "90%", md: "400px" }}
        align="flex-start"
        justify="center"
        gap=".5em"
        direction="column"
        fontFamily="DM Sans"
        fontWeight="700"
        pt="3em"
        position="relative"
      >
        <Text fontSize="24px" as="h1" textTransform="capitalize">
          {Name}
          <span
            style={{
              fontSize: "13px",
              color: "#007E24",
              textTransform: "capitalize",
              marginLeft: "5px",
            }}
          >
            - {client}
          </span>
        </Text>
        <Text as="p" fontWeight="400" fontSize="14px" lineHeight="20px">
          {comment}
        </Text>
        <Flex>
          <StarIcon color="#007E24" w="25px" />
          <StarIcon color="#007E24" w="25px" />
          <StarIcon color="#007E24" w="25px" />
          <StarIcon color="#007E24" w="25px" />
          <StarIcon color="#007E24" w="25px" />
        </Flex>
      </Flex>
    </Flex>
  );
};

Feedback.propTypes = {
  profile: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  ref: PropTypes.element.isRequired,
};
