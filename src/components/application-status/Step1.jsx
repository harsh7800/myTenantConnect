import { Button, Flex, Img, Input, Text } from "@chakra-ui/react";
import step1Vector from "../../assets/step1Vector.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
const Step1 = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
    Navigate("/steps/step2");
  };

  const registerOptions = {
    firstname: { required: "Please Enter Name" },
    middlename: { required: "Please Enter Name" },
    lastname: { required: "Please Enter Name" },
    email: { required: "Please Enter a Valid Email" },
    ssn: {
      required: "SSN is required",
      minLength: {
        value: 9,
        message: "SSN must have 9 characters",
      },
    },
    phone: {
      required: "Phone number is required",
      minLength: {
        value: 10,
        message: "Phone number must have 10 characters",
      },
    },
    DOB: {
      required: "Enter your DOB Please",
    },
  };

  return (
    <Flex
      onSubmit={handleSubmit(handleRegistration)}
      w="100vw"
      h="fit-content"
      fontFamily="DM Sans"
      fontWeight="600"
      align="center"
      direction="column"
      position="relative"
      as="form"
    >
      <Img
        w={{ base: "0", lg: "6em" }}
        src={step1Vector}
        position="absolute"
        bottom="5%"
        left="0%"
      />

      <Details
        registerOptions={registerOptions}
        register={register}
        errors={errors}
      />
      <Button
        // onClick={() => Navigate("/steps/step2")}
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
        type="submit"
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default Step1;

const Details = ({ register, errors, registerOptions }) => {
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
        Applicant Details
      </Text>
      {/* //this code contains inputs of @1st Row [Employment Type, Position, Company] */}
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        rowGap="2em"
        columnGap="3em"
      >
        <Flex
          w={{ base: "100%", md: "35%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            First Name
          </Text>
          <Input
            {...register("firstname", registerOptions.firstname, {
              require: true,
            })}
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
            placeholder="First Name"
          />
          <span style={{ color: "red", marginTop: ".5em" }} color="red">
            {errors?.firstname && errors.firstname.message}
          </span>
        </Flex>
        <Flex
          w={{ base: "100%", md: "35%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Middle Name
          </Text>
          <Input
            {...register("middlename", registerOptions.middlename)}
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
            placeholder=" Middle Name"
          />
          <span style={{ color: "red", marginTop: ".5em" }} color="red">
            {errors?.middlename && errors.middlename.message}
          </span>
        </Flex>
        <Flex
          w={{ base: "100%", md: "35%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Last Name
          </Text>
          <Input
            {...register("lastname", registerOptions.lastname)}
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
            placeholder="Last Name"
          />
          <span style={{ color: "red", marginTop: ".5em" }} color="red">
            {errors?.lastname && errors.lastname.message}
          </span>
        </Flex>
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        rowGap="2em"
        gap="3em"
      >
        <Flex
          w={{ base: "100%", md: "50%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Phone
          </Text>
          <Input
            {...register("phone", registerOptions.phone)}
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
          <span style={{ color: "red", marginTop: ".5em" }} color="red">
            {errors?.phone && errors.phone.message}
          </span>
        </Flex>
        <Flex
          w={{ base: "100%", md: "50%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Email
          </Text>
          <Input
            {...register("email", registerOptions.email)}
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
          <span style={{ color: "red", marginTop: ".5em" }} color="red">
            {errors?.email && errors.email.message}
          </span>
        </Flex>
      </Flex>
      <Flex
        w={{ base: "85%", md: "80%" }}
        justify="flex-start"
        direction={{ base: "column", md: "row" }}
        align="flex-start"
        rowGap="2em"
        gap="3em"
      >
        <Flex
          w={{ base: "100%", md: "25%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            Date Of Birth
          </Text>
          <Input
            {...register("DOB", registerOptions.DOB)}
            type="date"
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
          <span style={{ color: "red", marginTop: ".5em" }} color="red">
            {errors?.DOB && errors.DOB.message}
          </span>
        </Flex>
        <Flex
          w={{ base: "100%", md: "25%" }}
          direction="column"
          align="flex-start"
        >
          <Text color="rgba(0, 0, 0, 1)" as="label">
            SSN
          </Text>
          <Input
            {...register("ssn", registerOptions.ssn)}
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
            placeholder="***-**-1234"
          />
          <span style={{ color: "red", marginTop: ".5em" }} color="red">
            {errors?.ssn && errors.ssn.message}
          </span>
        </Flex>
      </Flex>
    </Flex>
  );
};

Details.propTypes = {
  register: PropTypes.func.isRequired, // You can replace "object" with the correct prop type
  errors: PropTypes.object.isRequired, // You can replace "object" with the correct prop type
  registerOptions: PropTypes.object.isRequired, // You can replace "object" with the correct prop type
};
