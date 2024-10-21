import Link from "next/link";
import {
  Box,
  Center,
  Wrap,
  WrapItem,
  Container,
  Button,
} from "@chakra-ui/react";

import { FaSignInAlt, FaSignOutAlt, FaStar } from "react-icons/fa";
import { primaryColor, secondaryColor, textColor } from "./config/config";

export default function Home() {
  return (
    <>
      <Box bg={primaryColor} p={5} color={textColor}>
        <Center fontSize="xl" fontWeight="bold">
          <h1> Welcome to Next Auth Pages</h1>
        </Center>
        <Center>
          <p>Ease Login, Register and Otp pages</p>
        </Center>
      </Box>
      <Container>
        <Center marginTop="50">
          <Wrap>
            <WrapItem>
              <Box mt={100} p={10}>
                <h3 fontSize="2xl" fontWeight="bold">
                  Hi, Welcome back, kindly perform an action
                </h3>
              </Box>
            </WrapItem>
          </Wrap>
        </Center>

        <Center>
          <Wrap>
            <WrapItem>
              <Link href="/auth/login">
                <Button
                  background={primaryColor}
                  color="white"
                  borderRadius="7"
                  pt={7}
                  pb={7}
                  pl={20}
                  pr={20}
                  leftIcon={<FaSignInAlt />}
                >
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button
                  background={secondaryColor}
                  color="white"
                  borderRadius="7"
                  pt={7}
                  pb={7}
                  pl={20}
                  pr={20}
                  ml={3}
                  rightIcon={<FaSignOutAlt />}
                >
                  Register
                </Button>
              </Link>
            </WrapItem>
          </Wrap>
        </Center>
      </Container>
    </>
  );
}
