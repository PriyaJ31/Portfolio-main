import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-me.jpg";
import gmail from "../assets/img/gmail.webp";
import outlook from "../assets/img/outlook.webp";
import '../styles/Contact.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="contact-bg">
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact" />
              }
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-card ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2>Let’s Connect</h2>
                  <p>You can reach me at:</p>
                  <div className="contact-card-email">
                    <img src={gmail} alt="App Logo" className="contact-card-logo" />
                    <h4>
                      <a
                        href="https://mail.google.com/mail/u/0/?fs=1&to=priyankajawalkar2020@gmail.com&tf=cm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card-mail"
                      >
                        priyankajawalkar2020@gmail.com
                      </a>
                    </h4>
                  </div>
                  <div className="contact-card-email">
                    <img src={outlook} alt="App Logo" className="contact-card-logo" />
                    <h4>
                      <a
                        href="https://mail.google.com/mail/u/0/?fs=1&to=pjawalka@syr.edu&tf=cm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card-mail"
                      >
                        pjawalka@syr.edu
                      </a>
                    </h4>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
