import { useUser } from "../services/UserContext"
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ component: RouteComponent }) => {

  const { user } = useUser();
  const navigate = useNavigate();

  console.log(user);

  if (user !== null) {
    return <RouteComponent />
  } else {
    navigate("/events");
  }
};


