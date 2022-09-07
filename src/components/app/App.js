import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "../../services/UserContext";
import supabaseClient from '../../services/supabaseClient';
import EventFeed from "../events/ListContainer";
import EventDetail from "../events/EventDetail";
import SignUp from "../signup/SignUp";
import AddEventForm from '../events/AddEventForm';
import WishListFeed from '../wishlist/WishListContainer';
import { PrivateRoute } from '../../services/PrivateRoute';
import styles from "./App.module.css";

export default function App() {

  return (
    <>
      <div className={styles.App}>
      <Router>
        <UserContextProvider supabaseClient={supabaseClient}>
          <Header />
          <Routes>
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addevent" element={<PrivateRoute component={AddEventForm}/>} />
            <Route path="/wishlist" element={<PrivateRoute component={WishListFeed}/>} />
            <Route path="/" element={<EventFeed />} />
          </Routes>
        </UserContextProvider>
      </Router>
      </div>
    </>
  );
}


