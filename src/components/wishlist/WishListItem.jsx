import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const WishListItem = ({ id, user_id, event_id }) => (
  <>
    <Link to={`/events/${event_id}`}>{event_id}</Link>
  </>
);

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