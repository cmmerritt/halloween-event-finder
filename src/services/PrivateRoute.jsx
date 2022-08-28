import { useUser } from "../services/UserContext"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PrivateRoute = ({ children }) => {

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/events");
    }
  }, [navigate, user])

  return children;
};


