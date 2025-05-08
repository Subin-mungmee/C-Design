'use client';

import './style.css';
import Image from 'next/image';
import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';
import Bannerh from '../Img/Banner3.png';
import Bannercom from '../Img/Banner2.png';

const BannerHeader: React.FC = () => {
  return (
    <MDBContainer >
      <MDBRow className="align-items-center">
        <MDBCol md="6" className="text-section-Bannerheadr">
          <MDBCard className="p-0 border-0 shadow-0 rounded-4 overflow-hidden hero-section-Bannerheadr">
            <div className="hero-section-Bannerheadr d-flex">
              <div className="text-section-Bannerheadr">
                <Image
                  src={Bannerh}
                  alt="Banner Header"
                  className="img-fluid"
                />
                <div className="row g-4">
                  {[
                    ['Responsive', 'รองรับการแสดงผลทุกขนาดหน้าจอ'],
                    ['Free Image', 'เว็บประกอบด้วยภาพตามธุรกิจคุณ'],
                    ['SEO Friendly', 'รองรับการทำ SEO เพื่อติดอันดับ Google'],
                    ['Ready To Use', 'ออกแบบเว็บไซต์ให้จนเสร็จ พร้อมใช้งาน'],
                  ].map(([title, desc], idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="custom-card card-blue text-white p-4 rounded shadow text-center">
                        <h4>{title}</h4>
                        <h6>{desc}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="step-section-Bannerheadr">
                <div className="step-Bannerheadr">
                  <Image
                    src={Bannercom}
                    alt="Banner Company"
                    className="img-fluid"
                  />
                </div>
                <div className="row g-4">
                  {[
                    ['Fast Loading', 'เว็บไซต์โหลดเร็ว ประสิทธิภาพสูง'],
                    ['Low Price', 'เว็บราคาถูก จับต้องได้ มีคุณภาพ'],
                  ].map(([title, desc], idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="custom-card card-blue text-white p-4 rounded shadow text-center">
                        <h4>{title}</h4>
                        <h6>{desc}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default BannerHeader;
