import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import uni2 from "../assets/img/mit-wpu_logo.png";
import uni1 from "../assets/img/syracuse-logo.png";
import '../styles/Education.css';

export const Education = () => {
  const educationData = [
    {
      img: uni1,
      university: "Syracuse University",
      degree: "Master of Science in Computer Science",
      gpa: "GPA: 3.6/4.0",
      duration: "Expected Graduation: May 2025"
    },
    {
      img: uni2,
      university: "MIT World Peace University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      gpa: "CGPA: 9.75/10",
      duration: "Graduated: June 2022"
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="education-bx wow zoomIn">
              <h2>Education</h2>
              <p>My academic journey helped me build a solid foundation in computer science and software engineering practices.</p>
              <div className="education-grid">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-item">
                    <img src={edu.img} alt={edu.university} />
                    <h5>{edu.university}</h5>
                    <p className="degree">{edu.degree}</p>
                    <div className="edu-meta">
                        <p className="gpa">{edu.gpa}</p>
                        <p className="duration">{edu.duration}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
