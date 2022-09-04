import React, { useState } from "react";
import supabase from "../../services/supabaseClient";
import { useNavigate } from "react-router-dom";
import styles from './AddEventForm.module.css';

const AddEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const [isFree, setIsfree] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  
  async function handleClick() {
    const { data, error } = await supabase.from("events").insert([
      {
        title: title,
        description: description,
        date: date,
        time: time,
        location: location,
        address: address,
        url: url,
        isFree: isFree,
        price: price,
        category: category,
      },
    ]);
    if (error) {
      console.error(error);
      return alert(error.message);
    }
    navigate("/events");
    console.log(data);
  }

  return (
    <div className={styles.AddEventForm}>
      <h1>Add an Event</h1>
      <div>
        <label htmlFor="title">Event title</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="time">Time</label>
        <input
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label htmlFor="location">Location</label>
        <input
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="url">Link</label>
        <input
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <label htmlFor="isFree">Is it free?
            <select title="isFree" name="isFree" value={isFree} onChange={(e) => setIsfree(e.target.value)}>
              <option value="true">Yes, it's free</option>
              <option value="false">No, it costs money</option>
            </select>
          </label>

        <label htmlFor="price">Price</label>
        <input
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="category">Category
            <select title="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="barcrawl">Bar Crawl</option>
              <option value="concert">Concert</option>
              <option value="convention">Convention/Expo</option>
              <option value="paint">Create Your Own Painting, Ceramics, etc.</option>
              <option value="haunt">Haunt (e.g., haunted house)</option>
              <option value="hayride">Hayride</option>
              <option value="hike">Hike</option>
              <option value="market">Market</option>
              <option value="maze">Maze/Haunted Maze</option>
              <option value="movie">Movie</option>
              <option value="parade">Parade</option>
              <option value="party">Party/Dance Party/Masquerade/Ball</option>
              <option value="performance">Play/Theatrical Performance/Circus</option>
              <option value="tour">Tour</option>
              <option value="tricktreat">Trick-or-Treating</option>
            </select>
          </label>

        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default AddEventForm;