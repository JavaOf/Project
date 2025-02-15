import React from "react";
import "./footer.scss";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__items">
        <div className="footer__items-information">
          <img src={logo} alt="logo" />
          <p>© 2019 PRO Auto. Все права защищены.</p>
        </div>
        <div className="footer__items-navigation">
          <div className="footer__items-navigation-links">
            <div className="footer__items-navigation-links-box">
              <Link className="link" to={"/company"}>
                КОМПАНИЯ
              </Link>
              <span>О КОМПАНИИ</span>
              <span>ЛИЦЕНЗИИ</span>
              <span>ПАРТНЕРЫ</span>
              <span>ОТЗЫВЫ КЛИЕНТОВ</span>
              <span>РЕКВИЗИТЫ</span>
              <span>ВАКАНСИИ</span>
            </div>
            <div className="footer__items-navigation-links-box">
              <Link className="link" to={"/services"}>
                КАТАЛОГ
              </Link>
              <span>АККУМУЛЯТОРЫ</span>
              <span>АВТОМАСЛА</span>
              <span>АКСЕССУАРЫ</span>
              <span>АВТОХИМИЯ</span>
            </div>
            <div className="footer__items-navigation-links-box">
              <Link className="link" to={"/catalog"}>
                УСЛУГИ
              </Link>
              <span>ДИАГНОСТИКА АККУМУЛЯТОРА</span>
              <span>ПРИЕМ АККУМУЛЯТОРОВ</span>
            </div>
            <div className="footer__items-navigation-links-box">
              <Link className="link" to={"/information"}>
                ИНФОРМАЦИЯ
              </Link>
              <span>АКЦИИ</span>
              <span>НОВОСТИ</span>
              <span>СТАТЬИ</span>
              <span>ВОПРОС - ОТВЕТ</span>
            </div>
          </div>
        </div>
        <div className="footer__items-contacts">
          <div className="footer__items-contacts-item">
            <span>
              <FaPhoneAlt />
            </span>
            <a href="tel:990797374" target="__blank" rel="noopener noreferrer">
              +996 990 79 73 74
            </a>
          </div>
          <div className="footer__items-contacts-item">
            <span>
              <MdEmail />
            </span>
            <a
              href="mailto:vistus707@gmail.com"
              target="__blank"
              rel="noopener noreferrer"
            >
              vistus707@gmail.com
            </a>
          </div>
          <div className="footer__items-contacts-item">
            <span>
              <FaTelegramPlane />
            </span>
            <a
              href="https://t.me/Lord090818"
              target="__blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
          <div className="footer__items-contacts-item">
            <span>
              <FaGithub />
            </span>
            <a
              href="https://github.com/JavaOf"
              target="__blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="footer__items-contacts-item">
            <button>ЗАКАЗАТЬ ЗВОНОК</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
