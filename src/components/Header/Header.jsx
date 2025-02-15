import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__items">
        <div className="header__items-logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__items-link">
          <Link className="link" to={"/company"}>
            КОМПАНИЯ
          </Link>
          <Link className="link" to={"/catalog"}>
            КАТАЛОГ
          </Link>
          <Link className="link" to={"/services"}>
            УСЛУГИ
          </Link>
          <Link className="link" to={"/information"}>
            ИНФОРМАЦИЯ
          </Link>
          <Link className="link" to={"/contacts"}>
            КОНТАКТЫ
          </Link>
        </div>
        <div className="header__items-button">
          <button>ЗАКАЗАТЬ ЗВОНОК</button>
        </div>
        <div className="header__items-search">
          <IoSearch />
        </div>
        <div className="header__items-bags">
          <FaShoppingCart />
          <span>0</span>
        </div>
      </div>
    </header>
  );
}
