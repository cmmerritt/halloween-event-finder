import React from "react";
import { Link } from 'react-router-dom';
import { format } from "date-fns";
import PropTypes from "prop-types";

const Event = ({ id, title, description, date, time, location, address, url, isFree, price, category }) => {

  const formattedDate = format((new Date(date)), 'cccc, MMMM d, yyy');

  let formattedTime;

  const slicedTimeHoursOnly = time.slice(0, 2);

  if(slicedTimeHoursOnly > 13) {
    formattedTime = (slicedTimeHoursOnly - 12) + ":00 PM"
  } else {
    formattedTime = slicedTimeHoursOnly + ":00 AM"
  }
  
  return (
  <>
    <Link to={`/events/${id}`}>{title}</Link>
    <p>{description}</p>
    <p>{formattedDate}</p>
    <p>{formattedTime}</p>
    <p>{location}, {address}</p>
    <p><a href={url}>Link to event</a></p>
    <p>Is this event free? {isFree}</p>
    <p>Price: ${price}</p>
    <p>Category: {category}</p>
  </>
)
};

Event.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      time: PropTypes.number,
      location: PropTypes.string,
      address: PropTypes.string,
      url: PropTypes.string,
      isFree: PropTypes.bool,
      price: PropTypes.number,
      category: PropTypes.string
    })
  ),
};

export default Event;