import { useUser } from "../../services/UserContext";
import PublicHeader from "./PublicHeader";
import PrivateHeader from "./PrivateHeader";

const Header = () => {
  const { user } = useUser();

  if(user !== null) {
    return <PrivateHeader />;
  } else {
    return <PublicHeader />;
  }
};

export default Header;