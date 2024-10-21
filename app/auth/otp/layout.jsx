import Link from "next/link";
import { Box, Center } from "@chakra-ui/react";
import { primaryColor, textColor } from "@/app/config/config";
import { FaHome } from "react-icons/fa";
export default function AuthLayout({
  title = "Verify One-Time Password",
  description = "Kindly enter the OTP sent to your registered email address or phone number to address your identity.",
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
