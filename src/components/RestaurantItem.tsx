import { Component } from "react";

import getCategoryImage from "../assets/images/category";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantItem.module.css";

interface Props {
  restaurant: Restaurant;
}

class RestaurantItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, category, distance, description } = this.props.restaurant;

    return (
      <li className={styles.restaurant}>
        <div className={styles.category}>
          <img src={getCategoryImage(category)} alt={category} className={styles.categoryIcon} />
        </div>
        <div className={styles.info}>
          <h3 className={`${styles.name} text-subtitle`}>{name}</h3>
          <span className={`${styles.distance} text-body`}>캠퍼스부터 {distance}분 내</span>
          <p className={`${styles.description} text-body`}>{description}</p>
        </div>
      </li>
    );
  }
}

export default RestaurantItem;