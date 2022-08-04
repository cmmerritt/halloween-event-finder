import React from 'react';
// import Header from './Header';
import { Routes, Route } from "react-router-dom";
import EventFeed from "../../components/events/ListContainer";

export default function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path="/events" element={<EventFeed />} />
      </Routes>
    </>
  );
}


