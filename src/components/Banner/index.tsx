'use client';

import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';
import Banner1 from '../Img/banner1.png';
import './stylebanner.css';

const SplitFlexBox: React.FC = () => {
  return (
    <MDBContainer className="container" style={{paddingBottom:'2rem'}} >
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-0 border-0 shadow-0 rounded-4 overflow-hidden">
            <div className="herosection d-flex">
              <div className="text-section">
                <h2>
                  สร้าง Website ง่ายๆ <br />
                  เพียง 3 ขั้นตอน
                </h2>
              </div>
              <div className="step-section">
                <Step number="01" title="เก็บ Requirement" desc="วิเคราะห์ความต้องการและเป้าหมายธุรกิจของคุณให้ชัดเจน" />
                <hr />
                <Step number="02" title="ออกแบบและพัฒนา" desc="ดีไซน์เว็บไซต์สวยงาม ตรงใจ เหมาะกับธุรกิจคุณ" />
                <hr />
                <Step number="03" title="เปิดใช้งานได้ทันที" desc="ส่งมอบเว็บไซต์คุณภาพพร้อมใช้งาน พร้อมดูแลและปรับแต่งตามต้องการ" />
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow style={{ paddingTop: '20px' }}>
        <MDBCol>
          <MDBCard className="p-0 border-0 shadow-0 rounded-4 overflow-hidden">
            <div className="hero-section-box2">
              <div className="text-section-box2">
                <h2>OTHER SERVICE</h2>
                <h2>บริการอื่นๆ ของเรา</h2>
              </div>
              <div className="step-section-box2">
                <Service title="Facebook" desc="รับดูแลเพจ Facebook ลงโพสต่างๆ พร้อมภาพ" />
                <hr />
                <Service title="Lazada Shopee" desc="รับดูแล Lazada Shopee ทำภาพ และลงสินค้า" />
                <hr />
                <Service title="ตกแต่งหน้าร้าน" desc="รับตกแต่งหน้าร้าน Shopee, Lazada, Facebook" />
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" sm="12" className="image-col">
          <MDBCard className="p-0 border-0 shadow-0 rounded-4 overflow-hidden">
            <div className="hero-section-box3">
              <MDBCardImage src={Banner1.src} position="top" alt="Banner" />
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SplitFlexBox;

// Reusable component
interface StepProps {
  number: string;
  title: string;
  desc: string;
}

const Step: React.FC<StepProps> = ({ number, title, desc }) => (
  <div className="step">
    <span className="step-number">{number}</span>
    <div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  </div>
);

const Service: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="step-box2">
    <div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);
