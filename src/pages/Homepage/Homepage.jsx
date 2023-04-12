import { useState, useEffect } from "react";
import Logo from "../../assets/images/santaCDA.png";
import Camellia from "../../assets/images/camellia23.jpg";
import TurkeyShoot from "../../assets/images/turkeyShoot.jpg";
import StocktonRB from "../../assets/images/stocktonRB.jpg";
import "./Homepage.css";
import * as NewsApi from "../../utilities/news-api";

export default function Homepage({ setUser }) {
  const [newsArticle, setNewsArticle] = useState([]);

  useEffect(() => {
    async function getAllArticles() {
      const newsArticle = await NewsApi.getAllArticles();
      setNewsArticle(newsArticle);
    }
    getAllArticles();
  }, []);

  console.log(newsArticle);

  return (
    <>
      <main>
        <section id="mainLogo">
          <img src={Logo} alt="Santa Cruz Dart League Logo" className="w-25" />
        </section>
        <section id="upcomingEvents" className="text-center">
          <img src={Camellia} alt="Camellia Classic Flyer" className="w-25" />
          <img
            src={TurkeyShoot}
            alt="Santa Cruz Turkey Shoot Flyer"
            id="mobile"
            className="w-25"
          />
          <img
            src={StocktonRB}
            alt="The Riverboat Flyer"
            id="mobile"
            className="w-25"
          />
        </section>

        <section className="home-bottom">
          <section className="fall-results">
            <section>
              <section className="card" id="fall-card">
                <section className="card-header text-center">
                  <h3>Fall 2022 A League</h3>
                  <section className="card-body text-center">
                    <h4>Dartvernugen</h4>
                    <h5>Champions</h5>
                    <h6>Captain: Darin Heath</h6>
                    <hr />
                    <h4>Trip-n-Dubs</h4>
                    <h5>Regular Season Best Record</h5>
                    <h6>Captain: Kris MacKellar</h6>
                  </section>
                </section>
              </section>
            </section>
            <section>
              <section className="card" id="fall-card">
                <section className="card-header text-center">
                  <h3>Fall 2022 B League</h3>
                  <section className="card-body text-center">
                    <h4>Bulls Deep</h4>
                    <h5>Champions</h5>
                    <h6>Captain: Richard Mundy</h6>
                    <hr />
                    <h4>Bulls Deep</h4>
                    <h5>Regular Season Best Record</h5>
                    <h6>Captain: Richard Mundy</h6>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <section className="info-map">
            <img src="https://i.imgur.com/HAzluOd.jpg" alt="" />
          </section>
        </section>
        <section className="home-news">
          {newsArticle.length > 0 && (
            <section className="card" id="home-news-card">
              <section className="card-header">
                <h2>{newsArticle[newsArticle.length - 1].headline}</h2>
              </section>
              <section className="card-body">
                <p>{newsArticle[newsArticle.length - 1].post}</p>
              </section>
            </section>
          )}
          {newsArticle.length > 0 && (
            <section className="card" id="home-news-card">
              <section className="card-header">
                <h2>{newsArticle[newsArticle.length - 2].headline}</h2>
              </section>
              <section className="card-body">
                <p>{newsArticle[newsArticle.length - 2].post}</p>
              </section>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
