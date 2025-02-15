import React, { useState } from "react";
import money from "../../../assets/images/money.png";
import consultant from "../../../assets/images/consultant.png";
import achievements from "../../../assets/images/achievements.png";
import message from "../../../assets/images/message.png";
import { FaArrowRightToBracket } from "react-icons/fa6";
import './informationBannerHome.scss';

export default function InformationBannerHome() {
  const [elements] = useState([
    {
      id: 1,
      image: money,
      title: "Наличный и безналичный расчет",
      titleImage: "money",
    },
    {
      id: 2,
      image: consultant,
      title: "Техническая помощь и консультация",
      titleImage: "consultant",
    },
    {
      id: 3,
      image: achievements,
      title: "Только качественная и проверенная продукция",
      titleImage: "achievements",
    },
    {
      id: 4,
      image: message,
      title: "Мы всегда на связи с 9:00 до 18:00!",
      titleImage: "message",
    },
  ]);
  return (
    <section className="home-information__parent">
      <div className="home-information__parent-item">
        {elements.map((item, index) => {
          return (
            <div key={item.id} className="home-information__parent-item-block">
              <img src={item.image} alt={item.titleImage} />
              <h3>{item.title}</h3>
              {index === elements.length - 1 ||
              index === elements.length - 2 ? (
                <FaArrowRightToBracket className="home-information__parent-item-block-icon" />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
