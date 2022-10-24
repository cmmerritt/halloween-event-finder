import React, { useState, useEffect } from "react";
import EventList from "../../components/events/EventList";
import { fetchEvents } from "../../services/supabaseEventsApi";

const EventFeed = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
        .then((data) => data.body)
        .then((events) => {
          setEvents(events);
        })
        .finally(() => setLoading(false))
  }, []);

  if (loading) return <h1>Loading...</h1>;

  events.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

  return <EventList events={events} />;
};

export default EventFeed;