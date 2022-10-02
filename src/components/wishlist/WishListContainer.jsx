import React, { useState, useEffect } from "react";
import { useUser } from "../../services/UserContext";
import WishList from "./WishList";
import { fetchWishlistByUserId } from "../../services/supabaseFavoritesApi";

const WishListFeed = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    fetchWishlistByUserId(user.id)
        .then((data) => data.body)
        .then((list) => {
          setList(list);
        })
        .finally(() => setLoading(false))
  }, [user.id]);

  

  if (loading) return <h1>Loading...</h1>;

  return <WishList list={list} />;
};

export default WishListFeed;