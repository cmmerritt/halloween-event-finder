import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Event = ({ id, title, description, date, time, location, address, url, isFree, price, category }) => (
  <>
    <Link to={`/events/${id}`}>{title}</Link>
    <p>Event description: {description}</p>
    <p>Date: {date}</p>
    <p>Time: {time}</p>
    <p>Location: {location}</p>
    <p>Address: {address}</p>
    <p>Link: {url}</p>
    <p>Is this event free? {isFree}</p>
    <p>Price: ${price}</p>
    <p>Category: {category}</p>
  </>
);

Event.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      date: PropTypes.instanceOf(Date).isRequired,
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