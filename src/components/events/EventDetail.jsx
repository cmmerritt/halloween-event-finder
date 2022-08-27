import React, { useState, useEffect } from 'react';
import { fetchEventById } from '../../services/supabaseEventsApi';
import { useParams } from 'react-router-dom';
import styles from "./EventDetail.module.css";

const EventDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(
    () =>
      fetchEventById(id)
        .then((data) => data.body)
        .then((event) => {
          setEvent(event);
        })
        .finally(() => setLoading(false)),
    [id]
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <section className={styles.EventDetail}>
      <dl>
        <dt>Title: </dt>
        <dd>{event[0].title}</dd>

        <dt>Description: </dt>
        <dd>{event[0].description}</dd>
      </dl>
    </section>
  );
};

export default EventDetail;