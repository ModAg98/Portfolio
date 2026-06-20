import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const subject = (data.get("subject") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const body = `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    const mailto =
      "mailto:mohamedagoubi98@gmail.com" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailto;
  };

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
                          onSubmit={this.handleSubmit}
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
                              href="mailto:mohamedagoubi98@gmail.com"
                              aria-label="Gmail"
                              className="ico-circle social-gmail"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/ModAg98"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub"
                              className="ico-circle social-github"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/mohamedagoubi"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="LinkedIn"
                              className="ico-circle social-linkedin"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                              </svg>
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
