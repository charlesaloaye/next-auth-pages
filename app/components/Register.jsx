import {
  appleColor,
  fbColor,
  googleColor,
  primaryColor,
  secondaryColor,
  textColor,
} from "@/app/config/config";
import {
  Card,
  CardBody,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  Center,
  Box,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaApple, FaFacebook, FaGoogle, FaSignInAlt } from "react-icons/fa";
const RegisterPage = () => {
  return (
    <>
      <Container mt={35}>
        <Card bg={"red.02"}>
          <CardBody>
            <form action="/auth/otp">
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type="text" isRequired />

                <FormLabel mt={5}>Last Name</FormLabel>
                <Input type="text" isRequired />

                <FormLabel mt={5}>Email address</FormLabel>
                <Input type="email" isRequired />
                <FormHelperText>We'll never share your email.</FormHelperText>

                <FormLabel mt={5}>Password</FormLabel>
                <Input type="password" isRequired />
              </FormControl>
            </form>

            <Button
              mt={5}
              color={textColor}
              leftIcon={<FaSignInAlt />}
              bg={primaryColor}
              variant="solid"
              type="submit"
            >
              Register
            </Button>

            <Center mt={5}>
              <Text color={secondaryColor}>
                <Link href="/auth/login" color={primaryColor}>
                  Login Now
                </Link>
              </Text>
            </Center>

            <Center mt={5}>
              <Wrap>
                <WrapItem>
                  <Link href="#">
                    <FaGoogle fontSize={25} color={googleColor} />
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link href="#">
                    <FaApple fontSize={25} color={appleColor} />
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link href="#">
                    <FaFacebook fontSize={25} color={fbColor} />
                  </Link>
                </WrapItem>
              </Wrap>
            </Center>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default RegisterPage;
