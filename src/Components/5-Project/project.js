import React, { useState } from "react";
import "./project.css";
import { Col, Row } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import project1 from "../../Images/project1.PNG";
import project2 from "../../Images/project2.PNG";
import project3 from "../../Images/project3.PNG";
import project4 from "../../Images/project4.PNG";
import project5 from "../../Images/project5.PNG";
import project6 from "../../Images/project6.PNG";
import project10 from "../../Images/project10.PNG";
import project11 from "../../Images/project11.PNG";
import project12 from "../../Images/project12.jpg";
import project13 from "../../Images/project13.PNG";
import project14 from "../../Images/project14.PNG";
import project62 from "../../Images/project62.PNG";
import project63 from "../../Images/project63.PNG";
import project64 from "../../Images/project64.PNG";

const myProject = [
  {
    id: 1,
    Title: "Engage Business Design",
    category: "css",
    Discretion:
      "A sleek and modern user interface design for a business-oriented web application home page.",
    imagePath: project1,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Task1",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Task1/",
  },
  {
    id: 2,
    Title: "Bakery Design",
    category: "css",
    Discretion:
      "A visually appealing design for a bakery website featuring Home, About, and Contact pages with responsive layouts.",
    imagePath: project2,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Task-2",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Task-2/",
  },
  {
    id: 3,
    Title: "HTML & CSS Design",
    category: "css",
    Discretion:
      "A clean and responsive homepage design for a web application focusing on user experience.",
    imagePath: project3,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Task-3",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Task-3/",
  },
  {
    id: 4,
    Title: "Watch Shop",
    category: "bootstrap",
    Discretion:
      "An elegant e-commerce website design for a watch shop, built using HTML, CSS, and Bootstrap.",
    imagePath: project4,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Task-4",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Task-4/",
  },
  {
    id: 5,
    Title: "Clock & Calculator Collection",
    category: "js",
    Discretion:
      "A collection of small utilities, including a clock, digital clock, stopwatch, and calculator, built with HTML, CSS, and JavaScript.",
    imagePath: project6,
    CodePath:
      "https://github.com/AbdelrahmanAbdelaziz10/Clock-Calculator-Project",
    demoPath:
      "https://abdelrahmanabdelaziz10.github.io/Clock-Calculator-Project/",
  },
  {
    id: 6,
    Title: "Millennium Restaurant",
    category: "js",
    Discretion:
      "A comprehensive restaurant website showcasing a menu, food reservations, and table booking features, built with LocalStorage integration.",
    imagePath: project5,
    CodePath:
      "https://github.com/AbdelrahmanAbdelaziz10/Millennium-Restaurant.",
    demoPath:
      "https://abdelrahmanabdelaziz10.github.io/Millennium-Restaurant./",
  },
  {
    id: 7,
    Title: "E-commerce Template",
    category: "js",
    Discretion:
      "A complete template for a shopping platform, featuring product listings and cart functionality, built with HTML, CSS, Bootstrap, and JavaScript.",
    imagePath: project62,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Ecommerce_js",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Ecommerce_js/",
  },
  {
    id: 8,
    Title: "We Entertainment",
    category: "js",
    Discretion:
      "A website template for an event management company, providing information about services for parties and gatherings.",
    imagePath: project63,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/We_Entertainment",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/We_Entertainment/",
  },
  {
    id: 9,
    Title: "Real Estate",
    category: "js",
    Discretion:
      "A responsive website for a real estate company allowing users to search for and purchase properties online.",
    imagePath: project64,
    CodePath: "",
    demoPath: "https://riyadhrealestatee.com/",
  },
  {
    id: 10,
    Title: "Menu App",
    category: "react",
    Discretion:
      "A dynamic restaurant application displaying the menu and enabling users to order meals online.",
    imagePath: project10,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/menu-app",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/menu-app/",
  },
  {
    id: 11,
    Title: "Weather App",
    category: "react",
    Discretion:
      "A weather forecasting app that provides real-time weather updates based on city names, built with React and REST API integration.",
    imagePath: project11,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Weather_App",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Weather_App/",
  },
  {
    id: 12,
    Title: "Movies App",
    category: "react",
    Discretion:
      "An interactive movie discovery platform with search functionality and detailed information about movies, using React and REST APIs.",
    imagePath: project12,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Movies_DB_App",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Movies_DB_App/",
  },
  {
    id: 13,
    Title: "Red Sea",
    category: "react",
    Discretion:
      "An operational website for a soap factory, showcasing products and company details, built with React and REST APIs.",
    imagePath: project13,
    CodePath: "",
    demoPath: "https://rsdyemen.com/",
  },
  {
    id: 14,
    Title: "Knock Knock",
    category: "react",
    Discretion:
      "A platform offering home services and product shopping with integrated booking and payment features, built with React and REST APIs.",
    imagePath: project14,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Knock",
    demoPath: "https://knock-omega.vercel.app/",
  },
];
// start function of project
export const Project = () => {
  const [currantactive, setCurrentactive] = useState("all");
  const [project, setProject] = useState(myProject);

  const buttonClick = (category) => {
    setCurrentactive(category);
    const bootStrapArray = myProject.filter((item) => {
      return item.category === category;
    });

    setProject(bootStrapArray);
  };

  return (
    <main id="project">
      <Row className="justify-content-center md-5">
        <Col lg="6" className="text-center">
          <h2>
            {" "}
            <span>My</span> Project
          </h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="left_section d-flex " lg="2" md="3">
          <button
            onClick={() => {
              setCurrentactive("all");
              setProject(myProject);
            }}
            className={currantactive === "all" ? "active" : null}
          >
            All Product
          </button>
          <button
            onClick={() => buttonClick("css")}
            className={currantactive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => buttonClick("bootstrap")}
            className={currantactive === "bootstrap" ? "active" : null}
          >
            {" "}
            Bootstrap
          </button>
          <button
            onClick={() => buttonClick("js")}
            className={currantactive === "js" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => buttonClick("react")}
            className={currantactive === "react" ? "active" : null}
          >
            React & MUI
          </button>
        </Col>
        <Col className="right_section  " lg="10" md="9">
          <Row className="ms-lg-5 justify-content-center">
            <AnimatePresence>
              {project.map((item) => {
                return (
                  <Col
                    key={item.id}
                    lg="4"
                    md="6"
                    sm="1"
                    className="mb-3 projects"
                  >
                    <motion.article
                      layout
                      initial={{ transform: "scale(0)" }}
                      animate={{ transform: "scale(1)" }}
                      transition={{ type: "spring", damping: 8, stiffness: 50 }}
                      class="card "
                    >
                      <motion.img
                        src={item.imagePath}
                        class="card-img-top p-1"
                        alt="..."
                      />
                      <motion.div class="card-body">
                        <h5 class="card-title">{item.Title} </h5>
                        <p class="card-text">{item.Discretion}</p>
                        <Col className="d-flex ">
                          <a
                            href={item.demoPath}
                            target="_blank"
                            className="card_icon"
                             rel="noreferrer"
                          >
                            <FaLink />
                          </a>
                          {item.CodePath !== "" ? (
                            <a
                              href={item.CodePath}
                              target="_blank"
                              className="card_icon"
                               rel="noreferrer"
                            >
                              <FaGithub />
                            </a>
                          ) : null}
                        </Col>
                      </motion.div>
                    </motion.article>
                  </Col>
                );
              })}
            </AnimatePresence>
          </Row>
        </Col>
      </Row>
    </main>
  );
};
