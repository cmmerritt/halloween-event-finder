import { useUser } from "../../services/UserContext";
import PublicEventDetail from "./PublicEventDetail";
import PrivateEventDetail from "./PrivateEventDetail";

const EventDetail = () => {
  const { user } = useUser();

  if(user == null) {
    return <PublicEventDetail />;
  } else {
    return <PrivateEventDetail />;
  }
};

export default EventDetail;