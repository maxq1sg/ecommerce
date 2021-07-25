import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";
import UserListPage from "./pages/UserListPage/UserListPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage/ProductEditPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:id" component={ProductPage} />
      {/* зн exactак вопроса - id необязательно */}
      <Route exact path="/cart/:id?" component={CartPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/orderdetails" component={OrderDetailsPage} />
      <Route exact path="/admin/users" component={UserListPage} />
      <Route exact path="/admin/products" component={ProductListPage} />
      <Route
        exact
        path="/admin/products/:id/edit"
        component={ProductEditPage}
      />
      <Route path="/page/:pageNumber" component={HomePage} />
      <Route exact path="/search/:keyword/:pageNumber" component={HomePage} />
      <Route exact path="/search/:keyword" component={HomePage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
