import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "../../services/UserContext";
import supabaseClient from '../../services/supabaseClient';
import EventFeed from "../events/ListContainer";
import EventDetail from "../events/EventDetail";
import SignUp from "../signup/SignUp";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <div className={styles.App}>
      <Router>
        <UserContextProvider supabaseClient={supabaseClient}>
          <Header />
          <Routes>
            <Route path="/events" element={<EventFeed />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserContextProvider>
      </Router>
      </div>
    </>
  );
}


