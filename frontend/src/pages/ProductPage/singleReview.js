import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import React from "react";
import convertDate from "../../middlewares/convertDate";
import useStyles from "../../pages/ProductPage/styles";
import stars from "../../middlewares/stars";
import { Link } from "react-router-dom";
const SingleReview = ({ name, comment, date, rating, isProfile, id }) => {
  const styles = useStyles();
  const createdAt = convertDate(date);
  return (
    <>
      <Card className={styles.review}>
        <CardHeader
          avatar={<Avatar>{name[0]}</Avatar>}
          title={name}
          subheader={
            <>
              {createdAt}
              {isProfile ? <Link to={`product/${id}`}>   к товару</Link> : null}
            </>
          }
          action={
            <>
              <span className={styles["rating__stars"]}>
                {stars(rating).map((item, index) => (
                  <i
                    className="rating__star"
                    key={index}
                    className={`${item} ${name}`}
                  ></i>
                ))}
              </span>
            </>
          }
        />
        <CardContent>
          <Typography variant="h5" component="p">
            {comment}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
SingleReview.defaultProps = {
  isProfile: false,
};
export default SingleReview;
