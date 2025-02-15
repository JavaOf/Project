import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrLinkNext } from "react-icons/gr";
import "./newsBannerHome.scss";

export default function NewsBannerHome() {
  const [newsItem, setNewsItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://670f95893e71518616588f5e.mockapi.io/news")
      .then(({ data }) => setNewsItem(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="news-banner-home__parent">
      <div className="container">
        <div className="news-banner-home__parent-context">
          <h1>новости</h1>
        </div>
        <div className="news-banner-home__parent-elements">
          {newsItem.map((item) => {
            return (
              <div
                key={item.id}
                className="news-banner-home__parent-elements-item"
              >
                <img src={item.image} alt="newsImage" />
                <b>{item.data}</b>
                <h2>{item.title}</h2>
                <span>
                  <GrLinkNext />
                </span>
              </div>
            );
          })}
        </div>
        <div className="news-banner-home__parent-elementsTwo">
          <button>ЗАДАТЬ ВОПРОС</button>
        </div>
      </div>
    </section>
  );
}
