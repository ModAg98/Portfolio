import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    const { language } = this.props;
    const isFrench = language === "fr";

    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          {isFrench
                            ? "Envoyez un message"
                            : "Send a Message"}
                        </h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/xdoeonlo"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            {isFrench
                              ? "Votre message a ete envoye avec succes. Merci."
                              : "Your message has been sent successfully. Thank you."}
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder={isFrench ? "Votre nom" : "Your Name"}
                                  data-rule="minlen:4"
                                  data-msg={
                                    isFrench
                                      ? "Veuillez entrer au moins 4 caracteres"
                                      : "Please enter at least 4 chars"
                                  }
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder={
                                    isFrench ? "Votre e-mail" : "Your Email"
                                  }
                                  data-rule="email"
                                  data-msg={
                                    isFrench
                                      ? "Veuillez entrer un e-mail valide"
                                      : "Please enter a valid email"
                                  }
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder={isFrench ? "Sujet" : "Subject"}
                                  data-rule="minlen:4"
                                  data-msg={
                                    isFrench
                                      ? "Veuillez entrer au moins 8 caracteres pour le sujet"
                                      : "Please enter at least 8 chars of subject"
                                  }
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg={
                                    isFrench
                                      ? "Veuillez ecrire votre message"
                                      : "Please write something for us"
                                  }
                                  placeholder={isFrench ? "Message" : "Message"}
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                {isFrench ? "Envoyer" : "Send Message"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">
                          {isFrench ? "Contact" : "Get in Touch"}
                        </h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          {isFrench
                            ? "Ouvert aux opportunites a temps plein et aux collaborations en developpement web produit et entreprise."
                            : "Open to full-time roles and collaboration opportunities in product and enterprise web development."}
                          <br />
                          {isFrench
                            ? "Disponible pour des projets ambitieux en Full-Stack."
                            : "Available for ambitious full-stack projects."}
                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="ion-ios-location"></span>{" "}
                            {isFrench ? "Tunis, Tunisie" : "Tunis, Tunisia"}
                          </li>
                          <li>
                            <span className="ion-ios-telephone"></span> +216 58
                            74 16 37
                          </li>
                          <li>
                            <span className="ion-email"></span>{" "}
                            mohamedagoubi98@gmail.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/mohamedagoubi"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="LinkedIn"
                            >
                              <span className="ico-circle">
                                <i className="ion ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto:mohamedagoubi98@gmail.com"
                              aria-label="Gmail"
                            >
                              <span className="ico-circle">
                                <i className="ion ion-social-google"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto:m.agoubi23139@pi.tn"
                              aria-label="Outlook"
                            >
                              <span className="ico-circle">
                                <i className="ion ion-social-windows"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p className="copyright">
                    Mohamed Agoubi -{" "}
                    {isFrench ? "Developpeur Full-Stack" : "Full-Stack Developer"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
