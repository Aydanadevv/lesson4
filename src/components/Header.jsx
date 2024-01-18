import React from "react";
import logo from "../images/msg1319346122-13712.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header-block">
            <h3>Student</h3>
            <h3>Space</h3>
          </div>
          <div className="header-block2">
            <a href="#">Консультация</a>
            <a href="#">Контакты</a>
            <Link to="/login">
              <button>Войти</button>
            </Link>
          </div>
        </div>
      </div>
      <img className="imageBack" src={logo} alt="" />
      <h1 className="textBack">
        Ваш универсальный инструмент для успеха в учебе
      </h1>
      <Link to="/registr">
        <button className="btnBack">Зарегистрироваться</button>
      </Link>
    </header>
  );
};

export default Header;
