import React, { useState, useEffect } from 'react';
import { fetchEventById } from '../../services/supabaseEventsApi';
import { Link, useParams } from 'react-router-dom';
import { add, format } from "date-fns";
import styles from "./EventDetail.module.css";

const PublicEventDetail= () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetchEventById(id)
        .then((data) => data.body)
        .then((event) => {
          setEvent(event);
        })
        .finally(() => setLoading(false))
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  const dateObject = new Date(event[0].date);
  const addDay = add(dateObject, {days: 1});
  const formattedDate = format(addDay, 'cccc, MMMM d, yyy');

  let formattedTime;

  const slicedTimeHoursOnly = event[0].time.slice(0, 2);
  const slicedTimeMinutesOnly = event[0].time.slice(3, 5);

  if(slicedTimeHoursOnly > 13) {
    formattedTime = (slicedTimeHoursOnly - 12) + ":" + slicedTimeMinutesOnly + " PM"
  } else {
    formattedTime = slicedTimeHoursOnly + ":" + slicedTimeMinutesOnly + " AM"
  };

  if(event[0].isFree === false) {
    return (
      <div className={styles.EventDetail}>
        <p><b>{formattedDate} at {formattedTime}</b></p>
        <p>{event[0].title}</p>
        <p>{event[0].description}</p>
        <p><i>{event[0].location}, {event[0].address}</i></p>
        <p><a href={event[0].url} target="_blank" rel="noopener noreferrer">Event website</a></p>
        <p>${event[0].price}</p>
        <Link to="/">Go back to all events</Link>
      </div>
    )
  } else {
      return (
        <div className={styles.EventDetail}>
          <p><b>{formattedDate} at {formattedTime}</b></p>
          <p>{event[0].title}</p>
          <p>{event[0].description}</p>
          <p><i>{event[0].location}, {event[0].address}</i></p>
          <p><a href={event[0].url} target="_blank" rel="noopener noreferrer">Event website</a></p>
          <p>Free</p>
          <Link to="/">Go back to all events</Link>
        </div>
      )
      }
}

export default PublicEventDetail;