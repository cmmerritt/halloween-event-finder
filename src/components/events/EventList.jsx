import React from "react";
import PropTypes from "prop-types";
import EventDetail from "../events/EventDetail.jsx";
import { NavLink } from "react-router-dom";

const EventList = ({ events }) => (
  <>
    <NavLink to="/form">Go To Form</NavLink>
    <ul aria-label="events">
      {events.map((event) => (
        <li key={event.event_id}>
          <EventDetail
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            address={event.address}
            url={event.url}
            isFree={event.isFree}
            price={event.price}
            category={event.category}
          />
        </li>
      ))}
    </ul>
  </>
);

EventList.propTypes = {
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

export default EventList;