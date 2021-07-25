import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { Col, Row, Spinner } from "react-bootstrap";
import { listProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ProductCard from "../ProductCard./ProductCard";
import { Grid } from "@material-ui/core";
import SearchBox from "../../components/SearchBox/SearchBox";
import Paginate from "../../components/Paginate/Paginate";
import { Helmet } from "react-helmet";
import { PRODUCT_LIST_RESET } from "../../constants/productsConstants";

export default function HomePage({ match, history }) {
  const dispatch = useDispatch();
  const { keyword, pageNumber: pageNumberFromUrl } = match.params;
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  const productList = useSelector((state) => state.productList);
  const { loading, products, error, totalPages, pageNumber } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumberFromUrl));
    return () => {
      dispatch({ type: PRODUCT_LIST_RESET });
    };
  }, [dispatch, keyword, pageNumberFromUrl]);

  return (
    <>
      <Helmet>
        <title>Добро пожаловать</title>
      </Helmet>
      {userInfo && Object.keys(userInfo).length ? (
        <Message variant="success">{`Добро пожаловать, ${userInfo.name}!`}</Message>
      ) : null}
      <div className={"container"}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="error">{error}</Message>
        ) : (
          <>
            <SearchBox />
            <Grid container spacing={2} style={{ marginTop: "20px" }}>
              {products.length ? (
                products.map((product) => {
                  return (
                    <Grid key={product._id} item lg={3} md={4} sm={6} xs={12}>
                      <ProductCard product={product} />
                    </Grid>
                  );
                })
              ) :loading===false? (
                <Grid item={true} xs={12}>
                  <Message variant="warning">Ничего не найдено</Message>
                </Grid>
              ):null}
            </Grid>
            <Paginate page={pageNumber} totalPages={totalPages} />
          </>
        )}
      </div>
    </>
  );
}
