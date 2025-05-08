import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardImage
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { BsWindowStack, BsCodeSquare, BsWindowPlus } from 'react-icons/bs';
import Bannerweb from '@/components/Img/Bannerweb2.png';
import Innerwebsite from '@/components/Boxinerwebsite';
import './Boxinner.css';

const Boxinner: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div>
      <Container style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="section-header">
          <h2>เว็บไซต์ที่ดี ต้องตอบโจทย์ทั้งธุรกิจและลูกค้า</h2>
          <p>
            เราพร้อมให้บริการครบวงจร ตั้งแต่การออกแบบเว็บไซต์ที่สะท้อนตัวตนของแบรนด์<br />
            ไปจนถึงการพัฒนาเว็บไซต์ให้พร้อมใช้งานออนไลน์อย่างมีประสิทธิภาพ <br />
            ด้วยเทคโนโลยี React และ Next.js ที่ทันสมัย ช่วยให้เว็บไซต์โหลดไว รองรับ SEO และขยายธุรกิจของคุณได้อย่างมั่นใจ
          </p>
        </div>

        <MDBCardImage
          src={Bannerweb.src}
          position="top"
          className="banner-image"
        />

        <MDBRow className="row-cols-1 row-cols-md-3 g-4" style={{ paddingTop: '5rem' }}>
          <MDBCol>
            <MDBCard className="card-custom">
              <MDBCardBody>
                <BsWindowStack size={70} color="#003ba5" className="icon" />
                <MDBCardTitle className="card-title-custom">UX/UI</MDBCardTitle>
                <MDBCardText>
                  ทีมออกแบบเว็บไซต์ของคุณให้เข้ากับ<br />
                  พฤติกรรมของกลุ่มลูกค้าเป้าหมาย
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="card-custom">
              <MDBCardBody>
                <BsCodeSquare size={70} color="#003ba5" className="icon" />
                <MDBCardTitle className="card-title-custom">DEVELOPER</MDBCardTitle>
                <MDBCardText>
                  ทีมพัฒนา และดูแลการวางแผนพัฒนาเว็บไซต์<br />
                  ของลูกค้าเป็นไปตามที่ลูกค้าต้องการ
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="card-custom">
              <MDBCardBody>
                <BsWindowPlus size={70} color="#003ba5" className="icon" />
                <MDBCardTitle className="card-title-custom">MAINTENANCE</MDBCardTitle>
                <MDBCardText>
                  ทีมดูแลระบบ รับผิดชอบในการปรับปรุง แก้ไขเว็บไซต์<br />
                  เพื่อที่จะให้เว็บไซต์สามารถใช้งานได้เต็มประสิทธิภาพ
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <div style={{ marginTop: '4rem' }}>
          <Innerwebsite />
        </div>

        <div className="d-flex justify-content-center mt-4">
          <Button
            href="https://www.youtube.com/watch?v=c9B4TPnak1A"
            target="_blank"
            rel="nofollow"
            size="lg"
            className="cta-button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            ติดต่อปรึกษาทำเว็บไซต์
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Boxinner;
