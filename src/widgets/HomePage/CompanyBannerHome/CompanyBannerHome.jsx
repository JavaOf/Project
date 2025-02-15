import React from "react";
import human from "../../../assets/images/human.png";
import './companyBannerHome.scss';

export default function CompanyBannerHome() {
  return (
    <section className="company-banner-home__parent">
      <div className="container">
        <div className="company-banner-home__parent-context">
          <h1>о компании</h1>
        </div>
        <div className="company-banner-home__parent-content">
          <div className="company-banner-home__parent-content-itemImage">
            <img src={human} alt="human" />
          </div>
          <div className="company-banner-home__parent-content-itemInformation">
            <p>
              Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам
              в «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой
              аккумулятор именно для вашего авто! С 1997 года сеть магазинов
              «PRO Auto» занимается продажей автомобильных аккумуляторов, масел,
              расходных материалов, химией и аксессуаров.
            </p>
            <button>УЗНАТЬ БОЛЬШЕ</button>
          </div>
        </div>
      </div>
    </section>
  );
}
