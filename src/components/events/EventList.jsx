import React from "react";
import Event from "./Event.jsx";
import styles from './EventList.module.css';

const EventList = ({ events }) => (
  <>
    <ul aria-label="events" className={styles.EventList}>
      {events.map((event) => (
        <li key={event.id}>
          <Event {...event} />
        </li>
      ))}
    </ul>
  </>
);

export default EventList;