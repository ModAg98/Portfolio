import React from "react";
import "./stars.scss";
import Typed from "./reactTypedDefault";

class Intro extends React.Component {
  render() {
    const { language } = this.props;
    const isFrench = language === "fr";
    const typedStrings = isFrench
      ? [
          "Developpeur Full-Stack",
          "React, Vue.js, Node.js, Spring Boot",
          "PWA, SPA, integration d'API",
          "Creation de produits web scalables pour les entreprises"
        ]
      : [
          "Full-Stack Developer",
          "React, Vue.js, Node.js, Spring Boot",
          "PWA, SPA, API Integration",
          "Building scalable products for enterprise teams"
        ];

    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Mohamed Agoubi</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={typedStrings}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  {isFrench ? "Voir mes projets" : "View My Work"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
