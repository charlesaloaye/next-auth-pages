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
const LoginPage = () => {
  return (
    <>
      <Container mt={35}>
        <Card bg={"red.02"}>
          <CardBody>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" isRequired />
              <FormHelperText>We'll never share your email.</FormHelperText>

              <FormLabel mt={5}>Password</FormLabel>
              <Input type="password" isRequired />
            </FormControl>

            <Button
              mt={5}
              color={textColor}
              leftIcon={<FaSignInAlt />}
              bg={primaryColor}
              variant="solid"
              type="button"
            >
              Login
            </Button>

            <Center mt={5}>
              <Text color={primaryColor}>
                <Link href="/auth/reset">Reset Password</Link>
              </Text>
              |
              <Text color={secondaryColor}>
                <Link href="/auth/register" color={primaryColor}>
                  Register
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

export default LoginPage;
