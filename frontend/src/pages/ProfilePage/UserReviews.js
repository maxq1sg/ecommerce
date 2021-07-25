import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../../actions/profileActions";
import KeyTitle from "../../components/KeyTitle";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { USER_PROFILE_REVIEWS_RESET } from "../../constants/userLoginConstants";
import SingleReview from "../ProductPage/singleReview";

const UserReviews = () => {
  const { reviews, loading, error } = useSelector(
    (state) => state.profileReviews
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileAction());

    return () => {
      // localStorage.setItem("reviews", JSON.stringify(reviews));
      dispatch({ type: USER_PROFILE_REVIEWS_RESET });
    };
  }, [dispatch]);
  return (
    <div>
      <KeyTitle size="25px">МОИ ОТЗЫВЫ</KeyTitle>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : reviews.length ? (
        <>
          {reviews.map((review) => (
            <SingleReview
              key={review.product}
              name={userInfo.name}
              date={review.createdAt}
              isProfile={true}
              comment={review.comment}
              rating={review.stars}
              id={review.product}
            />
          ))}
        </>
      ) : (
        <Message variant="warning">
          {"Вы еще не оставили ни одного отзыва!"}
        </Message>
      )}
    </div>
  );
};

export default UserReviews;
