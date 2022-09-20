import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import supabase from "../../services/supabaseClient";
import { fetchEventById } from "../../services/supabaseEventsApi";
import PropTypes from "prop-types";

const WishListItem = ({ id, user_id, event_id }) => {

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetchEventById(event_id)
        .then((data) => data.body)
        .then((event) => {
          setEvent(event);
        })
        .finally(() => setLoading(false))
  }, [event_id]);

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


  if (loading) return <h3>Loading...</h3>;

  return (
    <>
    <Link to={`/events/${event_id}`}>{event[0].title}</Link> 
    &nbsp;
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