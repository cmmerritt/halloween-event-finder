import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import supabase from "../../services/supabaseClient";
import PropTypes from "prop-types";

const WishListItem = ({ id, user_id, event_id }) => {

  const navigate = useNavigate();

  async function handleClick() {
    const { data, error } = await supabase
    .from("favorites")
    .delete()
    .match({ id: id })
    if (error) {
      console.error(error);
      return alert(error.message);
    }
    navigate("/wishlist");
    console.log(data);
  }

  return (
    <>
    <Link to={`/events/${event_id}`}>{event_id}</Link>
    <button onClick={handleClick}>Delete</button>
  </>
  )
  
  };

Event.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      event_id: PropTypes.number.isRequired,
    })
  ),
};

export default WishListItem;