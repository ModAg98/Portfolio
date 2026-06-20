import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "lightbox2/dist/css/lightbox.min.css";
import "./img/icons/css/ionicons.min.css";
import "./animate.css";
import "./style.css";

import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min";
import "lightbox2/dist/js/lightbox.min";

import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Preloader from "./components/preloader";
import BackToTop from "./components/back-top";
import * as serviceWorker from "./serviceWorker";

class App extends React.Component {
  constructor() {
    super();
    const savedLanguage = localStorage.getItem("language");
    this.state = {
      language: savedLanguage === "fr" ? "fr" : "en"
    };
  }

  setLanguage = language => {
    this.setState({ language });
    localStorage.setItem("language", language);
  };

  render() {
    const { language } = this.state;

    return (
      <>
        <Preloader />
        <Navbar language={language} onLanguageChange={this.setLanguage} />
        <Intro language={language} />
        <About language={language} />
        <Portfolio language={language} />
        <Contact language={language} />
        <BackToTop />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();