import Link from "next/link";
import { Box, Center } from "@chakra-ui/react";
import { primaryColor, textColor } from "@/app/config/config";
import { FaHome } from "react-icons/fa";
export default function AuthLayout({
  title = "Register Your Account",
  description = "Register to your account to access our services",
  children,
}) {
  return (
    <>
      <Box bg={primaryColor} p={5} color={textColor}>
        <Link href="/">
          <FaHome />
        </Link>
        <Center fontSize="xl" fontWeight="bold">
          <h1> {title}</h1>
        </Center>
        <Center>
          <p>{description}</p>
        </Center>
      </Box>
      {children}
    </>
  );
}
