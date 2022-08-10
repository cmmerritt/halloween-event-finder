import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventFeed from "../../components/events/ListContainer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="events" element={<EventFeed />} />
        </Routes>
      </Router>
    </>
  );
}


