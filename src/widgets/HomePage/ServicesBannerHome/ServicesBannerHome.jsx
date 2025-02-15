import React, { useState } from "react";
import Man from "../../../assets/images/Man.png";
import { SiNginxproxymanager } from "react-icons/si";
import { RiExchangeLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import './servicesBannerHome.scss';

export default function ServicesBannerHome() {
  const [elements] = useState([
    {
      id: 1,
      image: <SiNginxproxymanager />,
      titleImage: "Consultant",
      title: "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА",
      description:
        "Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования.",
    },
    {
      id: 2,
      image: <RiExchangeLine />,
      titleImage: "Exchange",
      title: "ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ",
      description:
        "Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!",
    },
    {
      id: 1,
      image: <FaLaptopCode />,
      titleImage: "Laptop",
      title: "БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА",
      description:
        "Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!",
    },
  ]);

  return (
    <section className="services-banner__parent">
      <div className="container">
        <div className="services-banner__parent-context">
          <h1>услуги</h1>
        </div>
        <div className="services-banner__parent-contextDetail">
          <h3>
            Менеджеры компании с радостью ответят на ваши вопросы и помогут с
            выбором продукции.
          </h3>
        </div>
        <div className="services-banner__parent-global">
          <div className="services-banner__parent-global-item">
            {elements.map((item) => {
              return (
                <div
                  className="services-banner__parent-global-item-block"
                  key={item.id}
                >
                  <div className="services-banner__parent-global-item-block-image">
                    {item.image}
                  </div>
                  <div className="services-banner__parent-global-item-block-titles">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="services-banner__parent-global-item">
            <img src={Man} alt="ManImage" />
          </div>
        </div>
        <div className="services-banner__parent-global-item-button">
          <button>ЗАДАТЬ ВОПРОС</button>
        </div>
      </div>
    </section>
  );
}
