import React from "react";
import "./Skills.css";
import { Col, Row } from "react-bootstrap";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { SiMui, SiPostman, SiReactrouter } from "react-icons/si";
import { FaGitAlt, FaGithub, FaBootstrap, FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills" id='skills'>
      <Row className="justify-content-center md-5 pb-4">
        <Col lg="6" className="text-center">
          <h2>
            <span>My </span>Skills
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
          <FaHtml5 className="skill_icon" />
          <h4>HTML</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <IoLogoCss3 className="skill_icon" />
            <h4>CSS</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <FaBootstrap className="skill_icon" />
            <h4>Bootstrap</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <IoLogoJavascript className="skill_icon" />
            <h4>JavaScript</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <FaReact className="skill_icon" />
            <h4>React</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <SiReactrouter className="skill_icon" />
            <h4>React Router</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <TbBrandRedux className="skill_icon" />
            <h4>Redux</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <SiMui className="skill_icon" />
            <h4>Material-UI</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <FaGitAlt className="skill_icon" />
            <h4>Git</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <FaGithub className="skill_icon" />
            <h4>Github</h4>
        </Col>
        <Col xs='6' lg="2" md="4" sm="6" className="text-center mb-5">
        <SiPostman className="skill_icon" />
            <h4>PostMan</h4>
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
