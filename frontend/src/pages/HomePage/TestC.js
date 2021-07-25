import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
const TestC = ({ product }) => {
  return (
    <>
      <Card>
        <CardHeader title={product.name} subheader={product.category} />

        {/* {product?.image && (
          <CardMedia
            //   className={classes.media}
            image={product.image}
            title={product.name}
            src={product.image}
          />
        )} */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.desc}
          </Typography>
        </CardContent>
        <img src={product.image} alt="" />
      </Card>
    </>
  );
};

export default TestC;
