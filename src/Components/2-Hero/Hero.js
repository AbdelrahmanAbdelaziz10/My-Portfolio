import React from "react";
import "./hero.css";
import { Col, Row } from "react-bootstrap";
import portfolio from "../../Images/portfolio-modified.png";
import { MdVerified } from "react-icons/md";
import {
  FaGithub,
  FaCloudDownloadAlt,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import Lottie from "lottie-react";
import developerAnimation from "../../Images/animation/developer.json";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="hero mt-5 pt-3">
      <Row className="d-flex justify-content-between">
        <Col xs="12" lg="7" md="6" sm="12">
          <div className="avatar d-flex">
            <motion.img
              initial={{ transform: "scale(.3)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ damping: 7, type: "spring", stiffness: 100 }}
              src={portfolio}
              alt="avatar"
              className="avatar_img"
            />
            <span className="avatar_icon align-item-end">
              <MdVerified />
            </span>
          </div>
          <div className="hero_text mt-5">
            <h3> hello, I'm </h3>
            <h1 className="my-1"> Abdelrahman </h1>
            <h4 className="my-3">I'm FrontEnd Developer </h4>
          </div>

          <div className="hero_icon d-flex mt-4 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=100004103023482"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="icon" />
            </a>
            <a
              href="https://github.com/AbdelrahmanAbdelaziz10?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrahman-abdelaziz-533296189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>

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
              download="Abdelrahman_Abdelaziz_CV.pdf"
            >
              DOWNLOAD CV <FaCloudDownloadAlt className="down_icon" />
            </a> */}
          </div>
        </Col>
        <Col xs="" lg="5" md="6" sm="0" className="pt-lg-0 pt-md-5">
          <div className="animation">
            <Lottie animationData={developerAnimation} />
          </div>
        </Col>
      </Row>
    </section>
  );
};
