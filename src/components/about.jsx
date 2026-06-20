import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "react_skill", content: "React.js", porcentage: "90%", value: "90" },
        { id: "vue_skill", content: "Vue.js", porcentage: "85%", value: "85" },
        {
          id: "node_skill",
          content: "Node.js / Express",
          porcentage: "88%",
          value: "88"
        },
        { id: "spring_skill", content: "Java / Spring Boot", porcentage: "84%", value: "84" },
        {
          id: "db_skill",
          content: "PostgreSQL, MongoDB, Redis, MySQL",
          porcentage: "82%",
          value: "82"
        },
        {
          id: "architecture_skill",
          content: "PWA / SPA Architecture",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "api_skill",
          content: "REST APIs & Integration",
          porcentage: "86%",
          value: "86"
        },
        {
          id: "agile_skill",
          content: "Agile Collaboration",
          porcentage: "88%",
          value: "88"
        }
      ],
      about_me_en: [
        {
          id: "first-p-about",
          content:
            "I am a Full-Stack Developer with a passion for building modern, scalable, and impactful digital products."
        },
        {
          id: "second-p-about",
          content:
            "With professional experience in enterprise software development and a strong background in both frontend and backend technologies, I specialize in creating seamless web experiences from concept to deployment."
        },
        {
          id: "third-p-about",
          content:
            "When I'm not coding, I'm continuously learning new technologies and expanding my expertise in software architecture, cloud technologies, and modern web development."
        },
        {
          id: "fourth-p-about",
          content:
            "I believe great software is not only about writing code is about understanding users, solving problems, and delivering solutions that create real value."
        }
      ],
      about_me_fr: [
        {
          id: "first-p-about",
          content:
            "Je suis Développeur Full-Stack spécialisé dans la conception et le développement d'applications web modernes, performantes et évolutives."
        },
        {
          id: "second-p-about",
          content:
            "Fort d'une expérience professionnelle dans le développement de solutions d'entreprise, j'interviens sur l'ensemble du cycle de vie d'un produit, de la conception technique jusqu'au déploiement."
        },
        {
          id: "third-p-about",
          content:
            "En dehors du développement, je poursuis continuellement ma montée en compétences dans les domaines de l'architecture logicielle, du cloud et des technologies web modernes."

        },
        {
          id: "fourth-p-about",
          content:
            "Ma vision du développement va au-delà du code : comprendre les besoins utilisateurs, résoudre des problématiques complexes et créer des solutions qui apportent une réelle valeur métier."

        }
      ]
    };
  }

  render() {
    const { language } = this.props;
    const isFrench = language === "fr";
    const aboutContent = isFrench
      ? this.state.about_me_fr
      : this.state.about_me_en;

    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          {isFrench ? "A propos" : "About Me"}
                        </h5>
                      </div>
                      {aboutContent.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
