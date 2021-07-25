import React, { useState, useEffect } from "react";
// import { Image, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { listProductDetails } from "../../actions/productActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import numberVariants from "../../middlewares/variants";
import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import Rating from "../../components/Rating/Rating";
import PageTitle from "../../components/PageTitle/PageTitle";
import Reviews from "./Reviews";
import ReviewsWrapper from "./ReviewsWrapper";
import { Helmet } from "react-helmet";
import PageContainer from "../../components/PageContainer/PageContainer";
import { addToCart } from "../../actions/cartActions";


export default function ProductPage({ history, match }) {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const productId = match.params.id;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = (e) => {
    e.preventDefault();
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
    history.push(`/cart/${productId}?qty=${qty}`); //запись в историю + редирект
  };
  const isInStock = product.countInStock > 0;
  return (
    <>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <>
          <PageTitle value={product.name} />
          {/* <h1 className={styles.title}>{product.name}</h1> */}
          <PageContainer>
            <Grid container>
              <Grid item md={6} sm={12}>
                <img
                  className={styles.img}
                  style={{ height: "400px" }}
                  src={product.image}
                />
              </Grid>
              <Grid item md={6} sm={12} style={{ padding: "10px" }}>
                <h3 className={styles.price}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.price)}
                </h3>
                <Rating
                  name={product.name}
                  value={product.rating}
                  reviews={product.numReviews}
                />
                <div>
                  <h4>Описание:</h4>
                  <Paper>{product.description}</Paper>
                </div>

                {isInStock ? (
                  <div className={styles.success}>есть в наличии</div>
                ) : (
                  <div className={styles.fail}>нет в наличии</div>
                )}
                <FormControl fullWidth>
                  <InputLabel id="count">Количество</InputLabel>
                  <Select
                    defaultValue=""
                    disabled={!isInStock}
                    labelId="count"
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {numberVariants(product.countInStock).map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className={styles.buttonWrapper}>
                  <Button
                    onClick={addToCartHandler}
                    variant="contained"
                    color="secondary"
                    disabled={!isInStock}
                  >
                    добавить в корзину
                  </Button>
                </div>
              </Grid>
            </Grid>
          </PageContainer>

          <ReviewsWrapper />
        </>
      )}
    </>
  );
}
