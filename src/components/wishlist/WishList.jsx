import React from "react";
import WishListItem from "./WishListItem";
import styles from "./WishList.module.css";

const WishList = ({ list }) => (
  <>
    <ul aria-label="list" className={styles.WishList}>
      {list.map((item) => (
        <li key={item.id}>
          <WishListItem {...item} />
          <hr />
        </li>
      ))}
    </ul>
  </>
);

export default WishList;