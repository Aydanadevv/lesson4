import React from "react";
import logo from "../images/unsplash_XHBCqZGZre0.png";
import logo1 from "../images/image 1 (6).png";
import logo2 from "../images/image 2 (1).png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login">
      <div className="container">
        <div className="header">
          <div className="header-block">
            <Link to="/header">
              <h3>Student</h3>
              <h3>Space</h3>
            </Link>
          </div>
          <div className="header-block2">
            <a href="#">Консультация</a>
            <a href="#">Контакты</a>
          </div>
        </div>
        <div className="login">
          <div className="loginImg">
            <img src={logo} alt="" />
          </div>
          <div className="loginBlock">
            <h1>Добро пожаловать</h1>
            <div className="loginText">
              <p>Почта</p>
              <input type="text" placeholder="Введите свою почту" />
            </div>
            <div className="loginText">
              <p>Пароль</p>
              <input type="text" placeholder="Введите свой пароль" />
            </div>
            <button className="btnVxod">Вход</button>
            <div className="loginText2">
              <p>
                У вас нет аккаунта? <span>Зарегистрироваться</span>
              </p>
            </div>
            <div className="loginText3">
              <hr color="blue" />

              <p>Или</p>

              <hr color="blue" />
            </div>
            <div className="loginText4">
              <div className="loginBtn">
                <img src={logo1} alt="" />
                <p>Google </p>
              </div>
              <div className="loginBtn">
                <img src={logo2} alt="" />
                <p>Fasebook </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
