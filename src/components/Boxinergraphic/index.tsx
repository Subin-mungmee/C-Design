import { MDBCardImage } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import BannerGraphic from '../Img/banner-graphic.png';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'; // 🔄 CSS แยกออกแล้ว
import icon1 from '../Img/icon-1.png';
import icon2 from '../Img/icon-2.png';
import icon3 from '../Img/icon-3.png';
import icon4 from '../Img/icon-4.png';
import icon5 from '../Img/icon-5.png';
import icon6 from '../Img/icon-6.png';
import icon7 from '../Img/icon-7.png';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

interface Service {
  name: string;
  link: string;
  image: string;
}

export default function Boxinner() {
  const [hover, setHover] = useState(false);

  const services: Service[] = [
    {
      name: 'ภาพโปรโมท Social',
      link: 'https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20ภาพโปรโมท%20Social%20ค่ะ',
      image: icon1.src,
    },
    {
      name: 'Banner โฆษณา',
      link: 'https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20Banner%20โฆษณาค่ะ',
      image: icon2.src,
    },
    {
      name: 'Label & Packaging',
      link: 'https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20Label%20%26%20Packaging%20ค่ะ',
      image: icon3.src,
    },
    {
      name: 'สื่อสิ่งพิมพ์และนามบัตร',
      link: 'https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20สื่อสิ่งพิมพ์และนามบัตร%20ค่ะ',
      image: icon4.src,
    },
    {
      name: 'Infographics',
      link: 'https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20Infographics%20ค่ะ',
      image: icon5.src,
    },
    {
      name: 'ไดคัท & รีทัช',
      link: 'https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20ไดคัท%20%26%20Photoshop%20ค่ะ',
      image: icon6.src,
    },
    {
      name: 'ออกแบบ CI',
      link: 'https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20ออกแบบ%20CI%20ค่ะ',
      image: icon7.src,
    },
  ];

  return (
    <div>
      <Container style={{ paddingTop: '5rem',textAlign:'center', paddingBottom:'2rem' }}>
        <span className="main-title">
          ออกแบบกราฟิกที่ใช่ เพื่อแบรนด์ที่น่าจดจำ
        </span>
        <br />
        <div className="main-description">
          งานออกแบบของเราจะช่วยเสริมภาพลักษณ์ให้แบรนด์ของคุณดูโดดเด่น น่าเชื่อถือ และตรงกับกลุ่มเป้าหมายมากที่สุด<br />
          พร้อมดีไซน์ที่คำนึงถึงความสวยงาม ความชัดเจน และการใช้งานในหลากหลายแพลตฟอร์ม เช่น Facebook, Instagram, LINE OA หรือเว็บไซต์
        </div>

        <div>
          <MDBCardImage
            src={BannerGraphic.src}
            position="top"
            className="banner-image"
          />
        </div>

        <div>
          <h4 className="section-title">บริการออกแบบกราฟิก</h4>
          <Row xs={1} sm={2} md={3} className="g-4">
            {services.map((service, idx) => (
              <Col key={idx}>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  <Card className="hover-transparent service-card">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center p-4">
                      <MDBCardImage
                        src={service.image}
                        alt={service.name}
                        className="service-image"
                      />
                      <Card.Title className="card-title">{service.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <Button
            href="https://www.youtube.com/watch?v=c9B4TPnak1A"
            target="_blank"
            rel="nofollow"
            size="lg"
            className={`cta-button ${hover ? 'hovered' : ''}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            ติดต่อปรึกษาออกแบบกราฟิก
          </Button>
        </div>
      </Container>
    </div>
  );
}
