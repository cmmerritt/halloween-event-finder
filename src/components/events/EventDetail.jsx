import React from "react";
import PropTypes from "prop-types";

const EventDetail = ({ title, description, date, time, location, address, url, isFree, price, category }) => (
  <>
    <p>{title}</p>
    <p>{description}</p>
    <p>{date}</p>
    <p>{time}</p>
    <p>{location}</p>
    <p>{address}</p>
    <p>{url}</p>
    <p>{isFree}</p>
    <p>{price}</p>
    <p>{category}</p>
  </>
);

EventDetail.propTypes = {
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

export default EventDetail;