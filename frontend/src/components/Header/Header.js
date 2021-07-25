import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogoutAction } from "../../actions/userLoginAction";
import { registerLogoutAction } from "../../actions/userRegisterAction";
import "./header.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupIcon from "@material-ui/icons/Group";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
export default function Header() {
  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  const { userInfo } = userLogin;
  const [burgerState, setBurgerState] = useState("fas fa-bars");
  const menu = useRef(null);
  const handleRedirect = (e) => {
    setBurgerState((prev) => {
      if (prev == "fas fa-bars") {
        return "fas fa-times";
      }
      return "fas fa-bars";
    });

    menu.current.classList.remove("burger-menu");
    if (e.target.id === "logout") {
      dispatch(userLogoutAction());
      dispatch(registerLogoutAction());
      localStorage.removeItem("cartItems");
    }
  };
  const burgerClickHandler = () => {
    setBurgerState((prev) => {
      switch (burgerState) {
        case "fas fa-bars":
          return "fas fa-times";
        case "fas fa-times":
          return "fas fa-bars";
      }
    });
    menu.current.classList.toggle("burger-menu");
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <NavLink
              onClick={() => {
                menu.current.classList.remove("burger-menu");
                setBurgerState("fas fa-bars");
              }}
              className="header__logo-link"
              to="/"
            >
              Интернет-Магазин
            </NavLink>
          </div>
          <ul ref={menu} className="header__menu menu">
            {userInfo && Object.keys(userInfo).length ? (
              <>
                <li className="menu__item">
                  <NavLink
                    activeClassName="is-active"
                    onClick={handleRedirect}
                    className="menu__item-link"
                    to="/cart"
                  >
                    <i className="fas fa-shopping-cart"></i> Корзина
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink
                    id="logout"
                    onClick={handleRedirect}
                    className="menu__item-link"
                    to="/"
                  >
                    <ExitToAppIcon style={{ marginRight: "8px" }} />
                    Выйти
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink
                    activeClassName="is-active"
                    onClick={handleRedirect}
                    className="menu__item-link"
                    to="/profile"
                  >
                    <i className="fas fa-user"></i> профиль
                  </NavLink>
                </li>
                {userInfo.isAdmin ? (
                  <>
                    <li className="menu__item">
                      <NavLink
                        activeClassName="is-active"
                        onClick={handleRedirect}
                        className="menu__item-link"
                        to="/admin/users"
                      >
                        <GroupIcon style={{ marginRight: "4px" }} />
                        Пользователи
                      </NavLink>
                    </li>
                    <li className="menu__item">
                      <NavLink
                        activeClassName="is-active"
                        onClick={handleRedirect}
                        className="menu__item-link"
                        to="/admin/products"
                      >
                        <AddShoppingCartIcon style={{ marginRight: "4px" }} />
                        Продукты
                      </NavLink>
                    </li>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <li className="menu__item">
                  <NavLink
                    activeClassName="is-active"
                    onClick={handleRedirect}
                    className="menu__item-link"
                    to="/login"
                  >
                    <i className="fas fa-user"></i> Войти
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink
                    activeClassName="is-active"
                    onClick={handleRedirect}
                    className="menu__item-link"
                    to="/register"
                  >
                    <i className="far fa-user"></i> Регистрация
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div onClick={burgerClickHandler} className="burger">
            <i className={burgerState}></i>
          </div>
        </div>
      </div>

      {/* <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>
                  <LinkContainer to='/'>
                      <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                  </LinkContainer>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                          <LinkContainer to='/cart' exact>
                              <Nav.NavLink><i className="fas fa-shopping-cart"></i> Cart</Nav.NavLink>
                          </LinkContainer>
                          <LinkContainer to='/login' exact>
                              <Nav.NavLink><i className="fas fa-user"></i> Войти</Nav.NavLink>
                          </LinkContainer>
                      </Nav>
                  </Navbar.Collapse>
              </Container>

          </Navbar> */}
    </header>
  );
}
