import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import KeyTitle from "../../components/KeyTitle";
import SingleReview from "./singleReview";
import { addReviewAction } from "../../actions/addReviewAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Message from "../../components/Message";
import { ADD_REVIEW_RESET } from "../../constants/reviewsConstants";
import { useEffect } from "react";
import styleModule from "./ProductPage.module.css";
import useStyles from "./styles";

const starsSelect = [1, 2, 3, 4, 5];

const Reviews = () => {
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(4);
  const [isNotFull, setIsNotFull] = useState(false);

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error } = useSelector((state) => state.addReview);

  const { reviews } = useSelector((state) => state.productDetails.product);
  const { product } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const reviewSubmitHandler = (event) => {
    event.preventDefault();
    if (comment && stars) {
      setIsNotFull(false);
      dispatch(
        addReviewAction({
          product: product._id,
          comment,
          stars,
          user: userInfo._id,
        })
      );
    } else {
      setIsNotFull(true);
    }
  };
  useEffect(() => {
    return () => {
      dispatch({ type: ADD_REVIEW_RESET });
    };
  }, [dispatch]);
  useEffect(() => {
    if (loading === false && !error) {
      setComment("");
    }
  }, [loading, error]);
  const styles = useStyles();
  return (
    <div className={styleModule.wrapper}>
      <div className={styleModule["wrapper-into"]}>
        <KeyTitle size="20px" style={{ fontWeight: "bold" }}>
          отзывы
        </KeyTitle>
        {isNotFull ? (
          <Message variant="error">Недостаточно данных для отправки</Message>
        ) : null}
        {error ? <Message variant="error">{error}</Message> : null}
        <div>
          <form onSubmit={reviewSubmitHandler}>
            <TextField
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className={styles.input}
              id="outlined-multiline-static"
              // label="Multiline"
              multiline
              rows={4}
              placeholder="Напиишите свой отзыв"
              variant="outlined"
              InputProps={{
                className: styles.input,
              }}
            />
            <div className={styleModule["submit-wrapper"]}>
              <FormControl className={styles.select}>
                <InputLabel id="stars">Оценка</InputLabel>
                <Select
                  labelId="stars"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                >
                  {starsSelect.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                disabled={loading}
                type="submit"
                variant="contained"
                color="secondary"
                className={styles.submitButton}
              >
                Добавить отзыв
              </Button>
            </div>
          </form>
        </div>

        <div className={styleModule["review-wrapper"]}>
          {reviews.length > 0
            ? reviews.map((review, index) => (
                <SingleReview
                  key={index}
                  date={review.createdAt}
                  comment={review.comment}
                  name={review.name}
                  isProfile={false}
                  rating={review.stars}
                  id={review.product}
                />
              ))
            : "Пока что отзывов нет"}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
