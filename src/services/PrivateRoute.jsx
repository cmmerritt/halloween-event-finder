import { useUser } from "../services/UserContext"
import EventFeed from "../components/events/ListContainer";

export const PrivateRoute = ({ component: RouteComponent }) => {

  const { user } = useUser();


  console.log(user);

  if (user !== null) {
    return <RouteComponent />
  } else {
    return <EventFeed />
  }

};





