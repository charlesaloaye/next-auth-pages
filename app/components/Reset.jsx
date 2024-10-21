import { primaryColor, secondaryColor, textColor } from "@/app/config/config";
import {
  Card,
  CardBody,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
const ResetPage = () => {
  return (
    <Container mt={35}>
      <Card bg={"red.02"}>
        <CardBody>
          <FormControl>
            <FormLabel mt={5}>Email address</FormLabel>
            <Input type="email" isRequired />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <Button
            mt={5}
            color={textColor}
            leftIcon={<FaLock />}
            bg={primaryColor}
            variant="solid"
            type="button"
          >
            Send a reset link
          </Button>

          <Center mt={5}>
            <Text color={secondaryColor}>
              <Link href="/auth/login" color={primaryColor}>
                Cancel
              </Link>
            </Text>
          </Center>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ResetPage;
