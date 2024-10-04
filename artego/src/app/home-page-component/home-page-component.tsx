"use client";

import { useState } from "react";
import { HomeEvents } from "./home-page-events";
import "./home-page-styles.css"

const homeEvents = new HomeEvents();
export default function Home() {
    const [modalCompanent, stateModal] = useState<React.ReactNode>(null);

    return (
          <div className="global-background">
            <div className="header">
              <div className="logo">
                <img className="ratio" src="../images/Kappa.png"/>
                <img src="../images/ArtEgo.png"/>
              </div>
              <div className="buttons-block">
                <p className="href-section">Услуги</p>
                <p className="href-section">Проекты</p>
                <p className="href-section">Контакты</p>
                <p className="href-section">О компании</p>
                <p className="href-section">Блог</p>
              </div>
              <div className="phone-number">
                <img className="phone-image" src="../images/Phone.png"/>
                <p className="number">+7(999)-999-99-00</p>
              </div>
            </div>
            <div className="main">
              <div className="description-container">
                <h2>
                  Ваш надежный партнер <br/>
                  в разработке программного обеспечения<br/>
                  и веб-сайтов.
                </h2>
                <button 
                  className="button-request"
                  onClick={()=>homeEvents.openModal(stateModal)}
                >
                  Оставить заявку
                </button>
              </div>
              <div className="start-img-container">
                <img  className="start-img" src="../images/HomePagePicture.png"/>
              </div>
              {modalCompanent}
            </div>
          </div>
    );
  }