import React from "react";
import { Link } from 'react-router-dom';
import { format } from "date-fns";
import PropTypes from "prop-types";

const Event = ({ id, title, description, date, time, location, address, url, isFree, price, category }) => {
  const formattedDate = format(new Date(date), 'cccc, MMMM d, yyy');
  const datePlusTime = date + ' ' + time;
  const formattedTime = format(new Date(datePlusTime), 'h:mm bbbb')
  
  return (
  <>
    <Link to={`/events/${id}`}>{title}</Link>
    <p>{description}</p>
    <p>{formattedDate} at {formattedTime}</p>
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