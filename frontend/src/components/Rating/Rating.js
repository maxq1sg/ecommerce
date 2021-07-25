import React from "react";
import stars from "../../middlewares/stars";
// import PropTypes from "prop-types";
import styles from "./Rating.module.css";

export default function Rating({ name, value, reviews }) {
  // const starsHoverEventHandler = (e) => {
  //   // if (e.target.classList.contains(styles['rating__stars'])) {
  //   //     e.target.classList.toggle(styles['rating__stars-hover'])
  //   // }
  // };
  return (
    <div className={styles["rating__section"]}>
      <span
        className={styles["rating__stars"]}
      >
        {stars(value).map((item, index) => (
          <i
            className="rating__star"
            key={index}
            className={`${item} ${name}`}
          ></i>
        ))}
      </span>

      <span className={styles["rating__reviews"]}>({reviews})</span>
    </div>
  );
}
// Rating.defaultProps = {
//     color: 'green'
// }

// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   reviews: PropTypes.number.isRequired,
//   color: PropTypes.string,
// };
