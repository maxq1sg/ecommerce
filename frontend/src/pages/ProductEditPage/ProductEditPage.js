import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";
import { productUpdateAction } from "../../actions/productUpdateAction";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  PRODUCT_DETAILS_RESET,
  PRODUCT_UPDATE_RESET,
} from "../../constants/productsConstants";
import { validationSchema } from "./formValidation";

const ProductEditPage = ({ history, match }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const {
    loading: updateLoading,
    product: updatedProduct,
    error: updateError,
  } = useSelector((state) => state.productUpdate);
  //   const formik = useFormik({
  //     initialValues: { name, price, countInStock, image, category, description },
  //     validationSchema,
  //     onSubmit: (values) => {
  //       //   const { email, password } = values;
  //       //   dispatch(userLoginAction(email, password));
  //       console.log(formik.values);
  //     },
  //   });

  const id = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: PRODUCT_UPDATE_RESET });
    if (updatedProduct) {
      history.push("/admin/products");
    }
  }, [updatedProduct]);
  useEffect(() => {
    if (product && product.name) {
      (async () => {
        setName(product.name);
        setPrice(product.price);
        setCountInStock(product.countInStock);
        setImage(product.image);
        setCategory(product.category);
        setDescription(product.description);
      })();
    }
  }, [loading]);
  useEffect(() => {
    dispatch({ type: PRODUCT_DETAILS_RESET });
    dispatch(listProductDetails(id));
  }, []);
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      productUpdateAction(
        {
          name,
          price,
          countInStock,
          image,
          category,
          description,
        },
        id
      )
    );
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <form onSubmit={formSubmitHandler} action="">
          <TextField
            fullWidth
            name="name"
            label="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            name="price"
            label="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            fullWidth
            name="countInStock"
            label="countInStock"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
          <TextField
            fullWidth
            name="image"
            label="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button variant="contained" component="label">
            Upload File
            <input onChange={uploadFileHandler} type="file" hidden />
          </Button>
          <TextField
            fullWidth
            name="category"
            label="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            fullWidth
            name="description"
            label="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button
            disabled={updateLoading}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Сохранить
          </Button>
        </form>
      )}
    </>
  );
};

export default ProductEditPage;
