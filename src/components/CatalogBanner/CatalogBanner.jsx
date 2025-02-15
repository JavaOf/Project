import { useState } from "react";
import "./catalogBanner.scss";

export default function CatalogBanner() {
  const [hoverItem, setHoverItem] = useState(null);
  const [elements] = useState([
    {
      id: 1,
      image: require("../../assets/images/268463-1506198528-9ed9b84faa459632f559365b4185f3cf 1.png"),
      title: "АККУМУЛЯТОРЫ",
      button: "ЗАКАЗАТЬ ОНЛАЙН",
    },
    {
      id: 2,
      image: require("../../assets/images/B2B_KeyVisual_Shooting_2892_Batteriewechsel2 1.png"),
      title: "ТОРМОЗНАЯ ЖИДКОСТЬ",
      button: "ЗАКАЗАТЬ ОНЛАЙН",
    },
    {
      id: 3,
      image: require("../../assets/images/карточка Автоаксессуары.png"),
      title: "МОТОРНОЕ МАСЛО",
      button: "ЗАКАЗАТЬ ОНЛАЙН",
    },
    {
      id: 4,
      image: require("../../assets/images/карточка Автомасла.png"),
      title: "РЕМОНТНЫЕ КОМПЛЕКТЫ",
      button: "ЗАКАЗАТЬ ОНЛАЙН",
    },
    {
      id: 5,
      image: require("../../assets/images/карточка Автохимия.png"),
      title: "АНТИФРИЗЫ",
      button: "ЗАКАЗАТЬ ОНЛАЙН",
    },
    {
      id: 6,
      image: require("../../assets/images/B2B_KeyVisual_Shooting_2892_Batteriewechsel2 1.png"),
      title: "ШИНЫ",
      button: "ЗАКАЗАТЬ ОНЛАЙН",
    },
  ]);

  return (
    <section className="catalog-banner__parent">
      <div className="container">
        <div className="catalog-banner__parent-context">
          <h1>Автотовары: аксессуары, расходники и многое другое</h1>
        </div>
        <div className="catalog-banner__parent-contextDetail">
          <h3>
            PROAuto - это специализированный интернет магазин востребованных
            товаров для автомобилей.
          </h3>
        </div>
        <div className="catalog-banner__parent-content">
          {elements.map((item) => {
            return (
              <div
                className="catalog-banner__parent-content-item"
                key={item.id}
                onMouseEnter={() => setHoverItem(item.id)}
                onMouseLeave={() => setHoverItem(null)}
              >
                <img src={item.image} alt={item.title} />
                {hoverItem === item.id && (
                  <div className="hover-overlay">
                    <h4>{item.title}</h4>
                    <button>{item.button}</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
