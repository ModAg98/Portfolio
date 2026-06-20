import React from "react";

import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import devflow from "../img/devflow.png";

const GITHUB_URL = "https://github.com/ModAg98";

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
    id: "proconnect",
    image: stock3,
    title: "ProConnect",
    summary:
      "ProConnect is a comprehensive platform connecting freelancers, clients, and service companies. This Angular-based application provides role-based dashboards, project management, and real-time collaboration features.",
    stack: "Spring Boot, Angular, REST API",
    lightbox: "portfolio"
  },
  {
    id: "devflow",
    image: devflow,
    title: "DevFlow",
    summary:
      "Lightweight, AI-powered alternative to Jira and Notion for software teams: async daily standups, automatic blocker detection, and predictive sprint outcomes with insights devs and managers actually want.",
    stack: "AI Insights, Async Standups, Sprint Forecasting",
    lightbox: "portfolio"
  },
  {
    id: "spa-migration",
    image: stock1,
    title: "Lean Execution Intelligence Suite",
    summary:
      "Built a decision-support module that centralizes shopfloor insights, action tracking, and KPI visibility for faster operational decisions.",
    stack: "Vue.js, Spring Boot, PostgreSQL, KPI Dashboards",
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
    id: "proconnect",
    image: stock3,
    title: "ProConnect",
    summary:
      "ProConnect est une plateforme complete connectant freelances, clients et entreprises de services. Cette application sur Angular offre des tableaux de bord adaptes aux roles, la gestion de projets et des fonctionnalites de collaboration en temps reel.",
    stack: "Spring Boot, Angular, API REST",
    lightbox: "portfolio"
  },
  {
    id: "devflow",
    image: devflow,
    title: "DevFlow",
    summary:
      "Alternative legere et propulsee par l'IA a Jira et Notion pour les equipes logicielles : standups asynchrones, detection automatique des blocages et prevision des sprints avec des insights utiles aux devs et aux managers.",
    stack: "AI Insights, Async Standups, Sprint Forecasting",
    lightbox: "portfolio"
  },
  {
    id: "spa-migration",
    image: stock1,
    title: "Suite d'intelligence d'execution Lean",
    summary:
      "Conception d'un module d'aide a la decision centralisant les insights terrain, le suivi d'actions et la visibilite KPI pour accelerer les decisions operationnelles.",
    stack: "Vue.js, Spring Boot, PostgreSQL, KPI Dashboards",
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
          <div className="row portfolio-grid">
            {projects.map(project => (
              <div className="col-md-4 d-flex" key={project.id}>
                <div className="work-box">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} - View on GitHub`}
                  >
                    <div className="work-img">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="work-content">
                      <div className="work-content-inner">
                        <h2 className="w-title">{project.title}</h2>
                        <p className="w-more mb-2">{project.summary}</p>
                        <div className="w-more">
                          <span className="w-ctegory">{project.stack}</span>
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
