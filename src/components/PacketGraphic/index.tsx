import Head from 'next/head';
import { MDBCardImage } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from '../Img/icon-1.png';
import icon2 from '../Img/icon-2.png';
import icon3 from '../Img/icon-3.png';
import icon4 from '../Img/icon-4.png';
import icon5 from '../Img/icon-5.png';
import icon6 from '../Img/icon-6.png';
import icon7 from '../Img/icon-7.png';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './GraphicPack.css';

interface Service {
  name: string;
  link: string;
  image: string;
}

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

export default function GraphicPackages() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Head>
        <title>แพ็กเกจกราฟิก | บริการออกแบบครบวงจร</title>
      </Head>

      <div className="p-0 min-vh-100 w-100">
        <div className="d-flex justify-content-center align-items-center flex-column text-center py-5">
          <Row xs={1} sm={2} md={3} className="g-4 w-100">
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

          <div className="d-flex justify-content-center mt-4">
            <Button
              href="https://line.me/R/ti/p/@018jebed"
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
        </div>
      </div>
    </>
  );
}
