import { MDBCardImage } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import onepage from "../Img/01_1.jpg";
import SalePage from "../Img/01_2.jpg";
import Corporate from "../Img/01_0.jpg";
import Ecommerce from "../Img/01_3.jpg";

interface Service {
  name: string;
  link: string;
  image: string;
}

export default function Boxinner() {
  const services: Service[] = [
    {
      name: "Sale Page (เซลเพจ)",
      link: "https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20เซลเพจค่ะ",
      image: SalePage.src,
    },
    {
      name: "Landing Page (เว็บหน้าเดียว)",
      link: "https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20เว็บหน้าเดียวค่ะ",
      image: onepage.src,
    },
    {
      name: "Corporate Web (เว็บไม่เกิน 5 หน้า) ",
      link: "https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20Corporateค่ะ",
      image: Corporate.src,
    },
    {
      name: "E-commerce Web (เว็บระบบตะกร้า)",
      link: "https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20เว็บระบบตะกร้า%20ค่ะ",
      image: Ecommerce.src,
    },
  ];

  return (
    <div>
      <Container style={{ paddingTop: "2rem" ,textAlign:'center'}}>
        <div style={{ marginTop: "0rem" }}>
          <h4
            style={{
              color: "#003ba5",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            บริการทำเว็บไซต์
          </h4>
          <Row xs={1} sm={2} md={3} className="g-4">
            {services.map((service, idx) => (
              <Col key={idx}>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    className="hover-transparent"
                    style={{
                      height: "100%",
                      border: "1px solid #eee",
                      borderRadius: "15px",
                      transition: "0.3s",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center p-4">
                      <MDBCardImage
                        src={service.image}
                        alt={service.name}
                        style={{
                          width: "100%",
                          maxWidth: "250px",
                          height: "auto",
                          objectFit: "contain",
                          marginBottom: "1rem",
                        }}
                      />
                      <Card.Title className="card-title">
                        {service.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
