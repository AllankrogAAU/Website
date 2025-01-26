import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Links = () => {
  const socialMedia = [
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/AllankrogAAU?tab=repositories" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/allan-krog-b26729295/" },
    { name: "Facebook", icon: <FaFacebook />, link: "https://www.facebook.com/allan.krog.37/" },
  ];

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ maxWidth: "500px", width: "100%", borderRadius: "20px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <Card.Body className="text-center">
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>
            Social
          </Card.Title>
          <Row className="justify-content-center">
            {socialMedia.map((social, index) => (
              <Col key={index} xs={3} className="my-2">
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#495057",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                  onMouseLeave={(e) => (e.target.style.color = "#495057")}
                >
                  {social.icon}
                </a>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Links;
