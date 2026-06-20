import React from "react";
import $ from "jquery";

import logo from "../img/male.png";

class Navbar extends React.Component {
  constructor() {
    super();
    const savedDarkMode = localStorage.getItem("darkMode");
    this.state = {
      logo: logo,
      darkMode: savedDarkMode === null ? true : savedDarkMode === "true"
    };
  }

  toggleDarkMode = () => {
    const newDarkMode = !this.state.darkMode;
    this.setState({ darkMode: newDarkMode });
    localStorage.setItem("darkMode", String(newDarkMode));
    document.documentElement.setAttribute(
      "data-theme",
      newDarkMode ? "dark" : "light"
    );
  };

  changeLanguage = language => {
    const { onLanguageChange } = this.props;
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

  componentDidMount() {
    // Set initial dark mode on mount
    document.documentElement.setAttribute(
      "data-theme",
      this.state.darkMode ? "dark" : "light"
    );

    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        this.setState({ logo: logo });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ logo: logo });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    const { language } = this.props;
    const isFrench = language === "fr";

    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={this.state.logo}
              alt="logo"
              className="navbar-logo"
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  {isFrench ? "Accueil" : "Home"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  {isFrench ? "A propos" : "About"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  {isFrench ? "Projets" : "Work"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  {isFrench ? "Contact" : "Contact"}
                </a>
              </li>
              <li className="nav-item nav-item-controls">
                <div className="language-switch" role="group" aria-label="Language switch">
                  <button
                    type="button"
                    className={`language-btn ${!isFrench ? "active" : ""}`}
                    onClick={() => this.changeLanguage("en")}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    className={`language-btn ${isFrench ? "active" : ""}`}
                    onClick={() => this.changeLanguage("fr")}
                    aria-label="Passer en francais"
                  >
                    FR
                  </button>
                </div>
              </li>
              <li className="nav-item nav-item-controls">
                <button
                  type="button"
                  className="dark-mode-toggle"
                  onClick={this.toggleDarkMode}
                  title="Toggle Dark Mode"
                  aria-label="Toggle Dark Mode"
                >
                  <span className="toggle-slider"></span>
                  <span className="sun-icon">☀</span>
                  <span className="moon-icon">☾</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
