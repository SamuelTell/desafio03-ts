import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { getAllLocalStorage } from "../services/storage";

const ContaInfo = () => {
  const { user } = useContext(AppContext);
  const storage = getAllLocalStorage();

  let localS;
  if (storage) {
    localS = JSON.parse(storage).email;
  }

  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        {user}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {localS}
      </Text>
    </>
  );
};

export default ContaInfo;
