import { primaryColor } from "./config/config";

const { Spinner, Center } = require("@chakra-ui/react");

const loading = () => {
  return (
    <Center>
      <Spinner size="xl" color={primaryColor} />;
    </Center>
  );
};

export default loading;
