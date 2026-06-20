import React from "react";

import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

const projectsEn = [
  {
    id: "gemba-walk-assistant",
    image: stock,
    title: "Gemba Walk Assistant",
    summary:
      "Enterprise PWA integrated into iObeya platform for Lean management workflows.",
    stack: "React.js, Node.js, Redis, PWA",
    lightbox: "portfolio"
  },
  {
    id: "spa-migration",
    image: stock1,
    title: "Core Platform SPA Migration",
    summary:
      "Led migration from MVP architecture to Vue.js + Spring Boot SPA with stronger maintainability.",
    stack: "Vue.js, Spring Boot, SPA",
    lightbox: "portfolio"
  },
  {
    id: "postgres-migration",
    image: stock2,
    title: "Data Layer Modernization",
    summary:
      "Spearheaded Redis to PostgreSQL migration to improve reliability, persistence, and scale.",
    stack: "PostgreSQL, Redis, Data Migration",
    lightbox: "portfolio"
  },
  {
    id: "proconnect",
    image: stock3,
    title: "ProConnect Marketplace",
    summary:
      "Marketplace platform connecting clients, freelancers, and service companies with advanced management features.",
    stack: "Spring Boot, Angular, REST API",
    lightbox: "portfolio"
  },
  {
    id: "gamified-elearning",
    image: stock4,
    title: "Gamified E-Learning Platform",
    summary:
      "3D full-stack educational platform designed to boost engagement and interactive learning outcomes.",
    stack: "Three.js, Node.js, Unity, MongoDB",
    lightbox: "portfolio"
  },
  {
    id: "client-web-delivery",
    image: stock5,
    title: "Client Web Solutions",
    summary:
      "Delivered responsive websites and e-commerce features for startups and business clients.",
    stack: "Laravel, JavaScript, HTML/CSS, MySQL",
    lightbox: "portfolio"
  }
];

const projectsFr = [
  {
    id: "gemba-walk-assistant",
    image: stock,
    title: "Gemba Walk Assistant",
    summary:
      "PWA d'entreprise integree a la plateforme iObeya pour les workflows Lean.",
    stack: "React.js, Node.js, Redis, PWA",
    lightbox: "portfolio"
  },
  {
    id: "spa-migration",
    image: stock1,
    title: "Migration SPA de la plateforme",
    summary:
      "Migration d'une architecture MVP vers une SPA Vue.js + Spring Boot pour une meilleure maintenabilite.",
    stack: "Vue.js, Spring Boot, SPA",
    lightbox: "portfolio"
  },
  {
    id: "postgres-migration",
    image: stock2,
    title: "Modernisation de la couche donnees",
    summary:
      "Pilotage de la migration Redis vers PostgreSQL pour renforcer la fiabilite, la persistance et la scalabilite.",
    stack: "PostgreSQL, Redis, Migration de donnees",
    lightbox: "portfolio"
  },
  {
    id: "proconnect",
    image: stock3,
    title: "Marketplace ProConnect",
    summary:
      "Plateforme marketplace reliant clients, freelances et entreprises de services avec des outils avances de gestion.",
    stack: "Spring Boot, Angular, API REST",
    lightbox: "portfolio"
  },
  {
    id: "gamified-elearning",
    image: stock4,
    title: "Plateforme e-learning gamifiee",
    summary:
      "Application educative full-stack 3D concue pour augmenter l'engagement et l'interactivite.",
    stack: "Three.js, Node.js, Unity, MongoDB",
    lightbox: "portfolio"
  },
  {
    id: "client-web-delivery",
    image: stock5,
    title: "Solutions web clients",
    summary:
      "Livraison de sites responsives et de fonctionnalites e-commerce pour startups et clients business.",
    stack: "Laravel, JavaScript, HTML/CSS, MySQL",
    lightbox: "portfolio"
  }
];

class Portfolio extends React.Component {
  render() {
    const { language } = this.props;
    const isFrench = language === "fr";
    const projects = isFrench ? projectsFr : projectsEn;

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  {isFrench
                    ? "Projets selectionnes en entreprise et en produit."
                    : "Selected enterprise and product work."}
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map(project => (
              <div className="col-md-4" key={project.id}>
                <div className="work-box">
                  <a
                    href={project.image}
                    data-lightbox={project.lightbox}
                    data-title={`${project.title} - ${project.summary}`}
                  >
                    <div className="work-img">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">{project.title}</h2>
                          <p className="w-more mb-2">{project.summary}</p>
                          <div className="w-more">
                            <span className="w-ctegory">{project.stack}</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
