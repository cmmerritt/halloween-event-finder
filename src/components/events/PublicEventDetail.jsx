import React, { useState, useEffect } from 'react';
import { fetchEventById } from '../../services/supabaseEventsApi';
import { Link, useParams } from 'react-router-dom';
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
    return (
      <div>
        <div className={styles.EventDetail}>
          <div>
            <h3>{event[0].title}</h3>
            <div>Description: {event[0].description}</div>
          </div>
        </div>
        <Link to="/events">Go back to all events</Link>
      </div>
    );
  }

export default PublicEventDetail;