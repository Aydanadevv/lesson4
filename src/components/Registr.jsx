import React from "react";
import logo from "../images/unsplash_XHBCqZGZre0.png";
import logo1 from "../images/image 1 (6).png";
import logo2 from "../images/image 2 (1).png";
import { Link } from "react-router-dom";

const Registr = () => {
  return (
    <div id="header">
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
        <div className="logins">
          <div className="loginsBlock">
            <h1>Регистрация</h1>
            <div className="loginsText">
              <p>Имя</p>
              <input type="text" placeholder="Введите свое имя" />
            </div>
            <div className="loginsText">
              <p>Фамилие</p>
              <input type="text" placeholder="Введите свое фамилие" />
            </div>
            <div className="loginsText">
              <p>Почта</p>
              <input type="text" placeholder="Введите свою почту" />
            </div>{" "}
            <div className="loginsText">
              <p>Пароль*</p>
              <input type="text" placeholder="Введите свой пароль" />
            </div>
            <div className="loginsText2">
              <p>Согласен с Условиями</p>
            </div>
            <button className="btnVxods">Зарегистрироваться</button>
            <div className="loginsText3">
              <hr color="blue" />

              <p>Или</p>

              <hr color="blue" />
            </div>
            <div className="loginsText4">
              <div className="loginsBtn">
                <img src={logo1} alt="" />
                <p>Google </p>
              </div>
              <div className="loginsBtn">
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

export default Registr;
