"use client";

import { useState } from "react";
import { HomeEvents } from "./home-page-events";
import "./home-page-styles.css"
import { TabsTypes } from "../shared/enums/tabs-types";

const homeEvents = new HomeEvents();
export default function Home() {
    const [modalCompanent, stateModal] = useState<React.ReactNode>(null);
    const [pageOrTab, statePageOrTab] = useState<React.ReactNode>(null);
    const [activeBackground, setActiveBackground] = useState<React.ReactNode>(true);

    const changeBackgraunde = (active:boolean) => {
      setActiveBackground(active);
    }

    return (
          <div className={activeBackground ? "global-background" : "global-background-white"}>
            <div className="header">
              <div onClick={() => {
                homeEvents.transitionHref(TabsTypes.Home, statePageOrTab);
                changeBackgraunde(true);}} 
                className="logo">
                <img className="ratio" src="../images/Kappa.png"/>
                <img src="../images/ArtEgo.png"/>
              </div>
              <div className="buttons-block">
                <p onClick={() => {
                  homeEvents.transitionHref(TabsTypes.Services, statePageOrTab);
                  changeBackgraunde(false);}}  
                  className="href-section">Услуги</p>
                <p onClick={() => {
                  homeEvents.transitionHref(TabsTypes.Projects, statePageOrTab);
                  changeBackgraunde(false);}}  
                  className="href-section">Проекты</p>
                <p onClick={() => {
                  homeEvents.transitionHref(TabsTypes.Contacts, statePageOrTab);
                  changeBackgraunde(false);}}  
                  className="href-section">Контакты</p>
                <p onClick={() => {
                  homeEvents.transitionHref(TabsTypes.AboutCompany, statePageOrTab);
                  changeBackgraunde(false);}}  
                  className="href-section">О компании</p>
                <p onClick={() => {
                  homeEvents.transitionHref(TabsTypes.Blog, statePageOrTab);
                  changeBackgraunde(false);}}  
                  className="href-section">Блог</p>
              </div>
              <div className="phone-number">
                <img onClick={() => { 
                  homeEvents.transitionHref(TabsTypes.Contacts, statePageOrTab);
                  changeBackgraunde(false);}}  
                  className="phone-image" src="../images/Phone.png"/>
                <p className="number">+7(999)-999-99-00</p>
              </div>
            </div>
            <div className="main">
              {pageOrTab || (
              <section className="inline-container">
                <div className="description-container">
                  <h2 className="title">
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
                  <img className="start-img" src="../images/HomePagePicture.png"/>
                </div>
              </section>)}
              
              {modalCompanent}
            </div>
          </div>
    );
  }