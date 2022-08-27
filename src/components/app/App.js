import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventFeed from "../events/ListContainer";
import EventDetail from '../events/EventDetail';
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <div className={styles.App}>
      <Router>
        <Header />
        <Routes>
          <Route path="/events" element={<EventFeed />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </Router>
      </div>
    </>
  );
}


