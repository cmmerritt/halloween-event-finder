import React from "react";
import { Link } from 'react-router-dom';
import { add, format } from "date-fns";
import PropTypes from "prop-types";

const Event = ({ id, title, description, date, time, location, address, url, isFree, price, category }) => {

  const dateObject = new Date(date);
  const addDay = add(dateObject, {days: 1});
  const formattedDate = format(addDay, 'cccc, MMMM d, yyy');

  let formattedTime;
  const slicedTimeHoursOnly = time.slice(0, 2);
  const slicedTimeMinutesOnly = time.slice(3, 5);
  if(slicedTimeHoursOnly > 13) {
    formattedTime = (slicedTimeHoursOnly - 12) + ":" + slicedTimeMinutesOnly + " PM"
  } else {
    formattedTime = slicedTimeHoursOnly + ":" + slicedTimeMinutesOnly + " AM"
  };

  const slicedDescription = description.slice(0, 300) + "...";

  if(isFree === false) {
    return (
      <>
        <p><b>{formattedDate} at {formattedTime}</b></p>
        <Link to={`/events/${id}`}>{title}</Link>
        <p>{slicedDescription}</p>
        <p><i>{location}, {address}</i></p>
        <p><a href={url} target="_blank" rel="noopener noreferrer">Event website</a></p>
        <p>${price}</p>
      </>
    )
  } else {
      return (
        <>
          <p><b>{formattedDate} at {formattedTime}</b></p>
          <Link to={`/events/${id}`}>{title}</Link>
          <p>{slicedDescription}</p>
          <p><i>{location}, {address}</i></p>
          <p><a href={url} target="_blank" rel="noopener noreferrer">Event website</a></p>
          <p>Free</p>
        </>
      )
  };



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