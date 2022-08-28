import React, { useState } from "react";
import supabase from "../../services/supabaseClient";
import { useNavigate } from "react-router-dom";

const AddEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [link, setLink] = useState("");
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
        link: link,
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
    <>
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
        <label htmlFor="date">date</label>
        <input
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="time">time</label>
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
        <label htmlFor="link">Link</label>
        <input
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label htmlFor="isFree">isFree</label>
        <input
          name="isFree"
          value={isFree}
          onChange={(e) => setIsfree(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
};

export default AddEventForm;