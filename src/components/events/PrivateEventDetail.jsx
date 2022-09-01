import React, { useState, useEffect } from 'react';
import supabase from "../../services/supabaseClient";
import { fetchEventById } from '../../services/supabaseEventsApi';
import { useUser } from "../../services/UserContext";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchWishlistByUserId } from "../../services/supabaseFavoritesApi";
import styles from "./EventDetail.module.css";

const PrivateEventDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([{data: []}]);
  const [list, setList] = useState([]);
  const [itemAlreadyInList, setItemAlreadyInList] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEventById(id)
        .then((data) => data.body)
        .then((event) => {
          setEvent(event);
        })
        .finally(() => setLoading(false))
  }, [id]);

  useEffect(() => {
    fetchWishlistByUserId(user.id)
        .then((data) => data.body)
        .then((list) => {
          setList(list);
        })
        .finally(() => setLoading(false))
  }, [user.id]);

  console.log(list);
  console.log(event);

  useEffect(() => {
    let itemInListPlaceholder = false;
    // if(Object.values(list).indexOf(`${event[0].id}` > -1)) {
    //   itemInListPlaceholder = true;
    // }
    for(let i=0; i < list.length; i++) {
      if(list[i].event_id === event[0].id) {
        itemInListPlaceholder = true;
      }
    }
    setItemAlreadyInList(itemInListPlaceholder);
  }, [event, list])

  if (loading) return <h1>Loading...</h1>;

  async function handleClick() {
    const { data, error } = await supabase.from("favorites").insert([
      {
        user_id: user.id,
        event_id: event[0].id,
      },
    ]);
    if (error) {
      console.error(error);
      return alert(error.message);
    }
    navigate("/wishlist");
    console.log(data);
  }

  if(itemAlreadyInList === true) {
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
    )
  } else {
      return (
        <div>
          <div className={styles.EventDetail}>
            <div>
              <h3>{event[0].title}</h3>
              <div>Description: {event[0].description}</div>
            </div>
          </div>
          <button onClick={handleClick}>Add to wishlist</button>
          <Link to="/events">Go back to all events</Link>
        </div>
      );
    }
  }

export default PrivateEventDetail;