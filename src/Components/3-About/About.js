import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCloudDownloadAlt } from "react-icons/fa";
import aboutImg from "../../Images/photo.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about mb-5" id="about">
      <Row className="justify-content-center mb-5 pb-4">
        <Col lg={6} className="text-center">
          <h2>
            About <span>Me</span>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={12} className="img_about">
          <div className="about_photo">
            <img
              src={aboutImg}
              alt="Abdelrahman Abdelaziz"
              className="about_img"
            />
          </div>
        </Col>
        <Col lg={8} md={8} sm={12} className="mt-4">
          <div className="about_text">
            <h3>Abdelrahman Abdelaziz</h3>
            <h5>
              <span>FrontEnd Developer</span>
            </h5>
            <p>
              I'm a Frontend Developer based in Egypt who is passionate about
              delivering value to businesses through technology. I love the
              challenge of finding creative solutions to problems, and I enjoy
              collaborating with teams to achieve great results.
            </p>
            <div className="d-flex">
              <a
                className="btn2"
                href="/Abdelrahman-Abdelaziz-Resume.pdf"
                download="Abdelrahman_Abdelaziz_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD CV <FaCloudDownloadAlt className="down_icon" />
              </a>
              {/* <a
                className="btn2"
                href="/Abdelrahman-Abdelaziz-Resume.pdf"
                download="Abdelrahman_Abdelaziz_CV"
              >
                DOWNLOAD CV <FaCloudDownloadAlt className="down_icon" />
              </a> */}
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
