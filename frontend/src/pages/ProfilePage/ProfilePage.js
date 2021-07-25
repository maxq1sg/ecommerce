import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { profileAction } from "../../actions/profileActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import PageContainer from "../../components/PageContainer/PageContainer";
import { USER_PROFILE_REVIEWS_RESET } from "../../constants/userLoginConstants";
import SingleReview from "../ProductPage/singleReview";
import UserOrders from "./UserOrders";
import UserReviews from "./UserReviews";

const ProfilePage = () => {


  return (
    <>
      <Helmet>
        <title>Профиль</title>
      </Helmet>
      <PageContainer>
        <UserOrders />
        <UserReviews />
      </PageContainer>
    </>
  );
};

export default ProfilePage;
