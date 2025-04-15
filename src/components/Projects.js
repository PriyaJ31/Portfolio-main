import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { publications, frontend_projects, backend_projects } from "../assets/texts/ProjectPublications";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/Projects.css';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects and Publications</h2>
                <p>A collection of projects I’ve built spanning frontend, backend, and full-stack development — crafted for smooth experiences and clean, scalable code.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-4 justify-content-center align-items-center">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Backend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Publications</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="projects-scroll">
                        {frontend_projects.map((project, index) => (
                          <div key={index} className="project-card">
                            <img src={project.imgUrl} alt={project.title} />
                            <h5>{project.title}</h5>
                            <p>{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <div className="projects-scroll">
                        {/* Example API projects */}
                        {backend_projects.slice(0, 3).map((project, index) => (
                          <div key={index} className="project-card">
                            <img src={project.imgUrl} alt={project.title} />
                            <h5>{project.title}</h5>
                            <p>{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <div className="projects-scroll">
                        {publications.map((project, index) => (
                          <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-link"
                          >
                            <div className="project-card">
                              <img src={project.imgUrl} alt={project.title} />
                              <h5>{project.title}</h5>
                              <p>{project.Publisher}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
