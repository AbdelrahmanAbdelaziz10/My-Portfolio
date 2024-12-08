import React from "react";
import "./contact.css";
import { Col, Row } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { RiMailSendFill } from "react-icons/ri";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../Images/animation/done.json";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mgejgqqz");

  return (
    <section className="contact" id="contact">
      <Row>
        <Col lg="6" md="6" sm="12">
          <div className="contact_title mt-3 md-5">
            <h3>
              Send Us a <span>Massage</span>{" "}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="mb-3">
              <input
                type="text"
                autoComplete="off"
                className="form-control input"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                autoComplete="off"
                className="form-control input"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control input"
                id="exampleFormControlInput1"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control mt-3"
                focused
                name="message"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Massage"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="d-flex mt-4">
                <button
                  className="btn2"
                  type="submit"
                  disabled={state.submitting}
                >
                  Send Massage <RiMailSendFill className="down_icon" />{" "}
                </button>
              </div>
              {state.succeeded && (
                <h3 className="mt-3 d-flex">
                  <Lottie
                    style={{ height: 35 }}
                    loop={false}
                    animationData={doneAnimation}
                  />
                  Your massage has been send successfully
                </h3>
              )}
            </div>
          </form>
        </Col>
        <Col lg="6" md="6" sm="12" className="mt-5">
          <Row className="ms-lg-3 ">
            <h2 className="contact_title2">
              Contact <span>Us</span>
            </h2>
            <p className="contact_p mt-2 mb-4">
              If you have an idea for a website, contact me to make it a
              reality.
            </p>
          </Row>
          <Row className="ms-lg-3">
            <Col lg="12" md="12" sm="12">
              <Row className="d-flex ms-lg-0">
                <Col lg="1" md="3" xs="6" className="contact_icon d-flex">
                  <LocationOnIcon />
                </Col>
                <Col lg="11" md="9" xs="6" className="loc_text ps-3 ">
                  <h4>Location</h4>
                  <p>Cairo, Egypt</p>
                </Col>
              </Row>
              <Row className="d-flex ms-lg-0">
                <Col lg="1" md="3" xs="6" className="contact_icon d-flex">
                  <LocalPhoneIcon />
                </Col>
                <Col lg="11" md="9" xs="6" className="loc_text ps-3">
                  <h4>Phone</h4>
                  <p>01154236307</p>
                </Col>
              </Row>
              <Row className="d-flex ms-lg-0">
                <Col lg="1" md="3" xs="6" className="contact_icon d-flex">
                  <EmailIcon />
                </Col>
                <Col lg="11" md="9" xs="6" className="loc_text ps-lg-3">
                  <h4>Email</h4>
                  <p>abdelazizabdelrahman373@gmail.com</p>
                </Col>
              </Row>
              <Row className="ps-md-5">
                <Col
                  xs=""
                  lg="3"
                  md="4"
                  sm="12"
                  className="hero footer_hero mt-3 ms-2"
                >
                  <div className="hero_icon d-flex ">
                    <a
                      href="https://www.facebook.com/profile.php?id=100004103023482"
                      target="_blank"
                    >
                      <FaFacebookSquare className="icon " />
                    </a>
                    <a
                      href="https://github.com/AbdelrahmanAbdelaziz10?tab=repositories"
                      target="_blank"
                    >
                      <FaGithub className="icon" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdelrahman-abdelaziz-533296189/"
                      target="_blank"
                    >
                      <FaLinkedin className="icon" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
