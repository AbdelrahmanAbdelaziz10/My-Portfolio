import React from 'react'
import './footer.css';
import { Row, Col } from 'react-bootstrap';
import { SiGmail } from "react-icons/si";
import { FaGithub ,FaLinkedin, FaFacebookSquare} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer >
    <Row className='justify-content-between align-item-center mb-3'>
      <Col xs='' lg='3' md='4' sm='12' className='hero footer_hero'>
      <div className='hero_icon d-flex '>
        <a href="https://www.facebook.com/profile.php?id=100004103023482" target="_blank">
        <FaFacebookSquare className='icon '/>
        </a>
        <a href="https://github.com/AbdelrahmanAbdelaziz10?tab=repositories" target="_blank">
        <FaGithub className='icon' />
        </a>
        <a  href="https://www.linkedin.com/in/abdelrahman-abdelaziz-533296189/" target="_blank">
        <FaLinkedin className='icon' />
        </a>
        </div>

      </Col> 
      <Col xs='' lg='3' md='6' sm='12' className='footer_text'>
      <p className='f_text '>
       Made By Abdelrahman Abdelaziz
      </p>

      </Col>
    </Row>

    </footer>
  )
}
