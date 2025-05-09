'use client';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import Image, { StaticImageData } from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SiteShowcase.module.css';

// รูปภาพ
import w1 from '../Img/01_0.jpg';
import w2 from '../Img/01_1.jpg';
import w3 from '../Img/01_3.jpg';
import w4 from '../Img/01_2.jpg';

import g1 from '../Img/p1.jpg';
import g2 from '../Img/p2.jpg';
import g3 from '../Img/p3.jpg';
import g4 from '../Img/p4.jpg';
import g5 from '../Img/p5.jpg';
import g6 from '../Img/p6.jpg';
import g7 from '../Img/p7.jpg';
import g8 from '../Img/p8.jpg';

interface WorkItem {
  id: number;
  title: string;
  image: StaticImageData;
}

const websiteWorks: WorkItem[] = [
  { id: 1, title: 'ผลงานเว็บไซต์ 1', image: w1 },
  { id: 2, title: 'ผลงานเว็บไซต์ 2', image: w2 },
  { id: 3, title: 'ผลงานเว็บไซต์ 3', image: w3 },
  { id: 4, title: 'ผลงานเว็บไซต์ 4', image: w4 },
];

const graphicWorks: WorkItem[] = [
  { id: 1, title: 'ผลงานกราฟิก 1', image: g1 },
  { id: 2, title: 'ผลงานกราฟิก 2', image: g2 },
  { id: 3, title: 'ผลงานกราฟิก 3', image: g3 },
  { id: 4, title: 'ผลงานกราฟิก 4', image: g4 },
  { id: 5, title: 'ผลงานกราฟิก 5', image: g5 },
  { id: 6, title: 'ผลงานกราฟิก 6', image: g6 },
  { id: 7, title: 'ผลงานกราฟิก 7', image: g7 },
  { id: 8, title: 'ผลงานกราฟิก 8', image: g8 },

];

const SiteShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0',
  };

  const renderWorks = (works: WorkItem[]) =>
    isMobile ? (
      <Slider {...sliderSettings}>
        {works.map((work) => (
          <div key={work.id}>
            <Card className="mb-3">
              <Image
                src={work.image}
                alt={work.title}
                layout="responsive"
                placeholder="blur"
              />
              <Card.Body>
                <Card.Title>{work.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    ) : (
      <Row>
        {works.map((work) => (
          <Col md={3} className="mb-4" key={work.id}>
            <Card>
              <Image
                src={work.image}
                alt={work.title}
                layout="responsive"
                placeholder="blur"
              />
              <Card.Body>
                <Card.Title>{work.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );

  return (
    <div className={styles.heroSection}>
      <div style={{ paddingTop: '3rem', color: '#00e1d4', fontSize: '50px', fontWeight: 'bold' }}>C-DESIGN</div><br />
      <div style={{ fontSize: '30px' }}>
        <h2>ผลงานเว็บไซต์</h2>
        สร้างสรรค์ <span style={{ color: '#fbca02', fontSize: '50px', fontWeight: 'bold' }}>เว็บไซต์</span> ที่ไม่เหมือนใคร
      </div>
      <Container className="my-5">{renderWorks(websiteWorks)}</Container>

      <div style={{ fontSize: '30px', paddingTop: '3rem' }}>
        <h2>ผลงานกราฟิก</h2>
        จุดประกาย <span style={{ color: '#ff55a3', fontSize: '40px', fontWeight: 'bold' }}>จินตนาการ</span> ผ่านงานภาพและดีไซน์
      </div>
      <Container className="my-5">{renderWorks(graphicWorks)}</Container>
    </div>
  );
};

export default SiteShowcase;
