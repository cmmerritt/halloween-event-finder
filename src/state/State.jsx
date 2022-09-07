import { useState, useEffect } from 'react';
import { fetchEventById } from "../services/supabaseEventsApi";
import { fetchWishlistByUserId } from '../services/supabaseFavoritesApi';

export const useWishList = (id) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchWishlistByUserId(id)
        .then((data) => data.body)
        .then((list) => {
          setList(list);
        })
  }, [id]);
  return list;
}

export const useEvent = (id) => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetchEventById(id)
        .then((data) => data.body)
        .then((event) => {
          setEvent(event);
        })
  }, [id]);
  return event;
}