import React, { useState, useEffect } from 'react';
import supabase from "../../services/supabaseClient";
import { fetchEventById } from '../../services/supabaseEventsApi';
import { useUser } from "../../services/UserContext";
import { Link, useParams, useNavigate } from 'react-router-dom';
// import { add, format } from "date-fns";
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

  useEffect(() => {
    let itemInListPlaceholder = false;
    for(let i=0; i < list.length; i++) {
      if(list[i].event_id === event[0].id) {
        itemInListPlaceholder = true;
      }
    }
    setItemAlreadyInList(itemInListPlaceholder);
  }, [event, list])

  if (loading) return <h1>Loading...</h1>;

  // const dateObject = new Date(event[0].date);
  // const addDay = add(dateObject, {days: 1});
  // const formattedDate = format(addDay, 'cccc, MMMM d, yyy');

  // let formattedTime;

  // const slicedTimeHoursOnly = event[0].time.slice(0, 2);
  // const slicedTimeMinutesOnly = event[0].time.slice(3, 5);

  // if(slicedTimeHoursOnly > 13) {
  //   formattedTime = (slicedTimeHoursOnly - 12) + ":" + slicedTimeMinutesOnly + " PM"
  // } else {
  //   formattedTime = slicedTimeHoursOnly + ":" + slicedTimeMinutesOnly + " AM"
  // };

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
    if(event[0].isFree === false) {
      return (
        <div className={styles.EventDetail}>
          {/* <p><b>{formattedDate} at {formattedTime}</b></p> */}
          <p>{event[0].title}</p>
          <p>{event[0].description}</p>
          <p><i>{event[0].location}, {event[0].address}</i></p>
          <p><a href={event[0].url} target="_blank" rel="noopener noreferrer">Event website</a></p>
          <p>${event[0].price}</p>
          <Link to="/">Go back to all events</Link>
        </div>
      ) } else {
        return (
          <div className={styles.EventDetail}>
            {/* <p><b>{formattedDate} at {formattedTime}</b></p> */}
            <p>{event[0].title}</p>
            <p>{event[0].description}</p>
            <p><i>{event[0].location}, {event[0].address}</i></p>
            <p><a href={event[0].url} target="_blank" rel="noopener noreferrer">Event website</a></p>
            <p>Free</p>
            <Link to="/">Go back to all events</Link>
          </div>
        )
      }
    } else if(event[0].isFree === false) {
      return (
        <div className={styles.EventDetail}>
          {/* <p><b>{formattedDate} at {formattedTime}</b></p> */}
          <p>{event[0].title}</p>
          <p>{event[0].description}</p>
          <p><i>{event[0].location}, {event[0].address}</i></p>
          <p><a href={event[0].url} target="_blank" rel="noopener noreferrer">Event website</a></p>
          <p>${event[0].price}</p>
          <button onClick={handleClick}>Add to wishlist</button>
          <Link to="/">Go back to all events</Link>
        </div>
      )
    } else {
      return (
        <div className={styles.EventDetail}>
          {/* <p><b>{formattedDate} at {formattedTime}</b></p> */}
          <p>{event[0].title}</p>
          <p>{event[0].description}</p>
          <p><i>{event[0].location}, {event[0].address}</i></p>
          <p><a href={event[0].url} target="_blank" rel="noopener noreferrer">Event website</a></p>
          <p>Free</p>
          <button onClick={handleClick}>Add to wishlist</button>
          <Link to="/">Go back to all events</Link>
        </div>
      )
    }
  }

  // if(itemAlreadyInList === true) {
  //   return (
  //     <div>
  //       <div className={styles.EventDetail}>
  //         <div>
  //           <h3>{event[0].title}</h3>
  //           <div>Description: {event[0].description}</div>
  //         </div>
  //       </div>
  //       <Link to="/">Go back to all events</Link>
  //     </div>
  //   )
  // } else {
  //     return (
  //       <div>
  //         <div className={styles.EventDetail}>
  //           <div>
  //             <h3>{event[0].title}</h3>
  //             <div>{event[0].description}</div>
  //           </div>
  //         </div>
  //         <button onClick={handleClick}>Add to wishlist</button>
  //         <Link to="/">Go back to all events</Link>
  //       </div>
  //     );
  //   }


export default PrivateEventDetail;