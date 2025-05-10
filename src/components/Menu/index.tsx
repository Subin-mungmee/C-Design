'use client'; // ถ้าใช้ Next.js 13+ และอยู่ใน app/ ให้ใส่ไว้

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

import Imglogo from '../Img/C-Logo-New.png';
import Banner1 from '../Img/clearHeaderOem-branding.jpg';
import PicNextjs from '../Img/nextjs.png';
import PicReact from '../Img/reactlogo.png';

import './style.css';

export default function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          lineHeight: '2',
          padding: '0px',
        }}
        className="topbar-container"
      >
        <Container className="d-flex justify-content-end gap-3 py-1">
          <a
            className="topbar-link"
            href="https://line.me/ti/p/@018jebed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-line"></i> LINE
          </a>
          <a className="topbar-link" href="tel:0624197469">
            <i className="fas fa-phone-alt"></i> โทร: 062-419-7469
          </a>
          <a
            className="topbar-link"
            href="https://www.facebook.com/Creceivedesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i> Facebook
          </a>
        </Container>
      </div>

      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="sticky-top slim-navbar">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={Imglogo}
              alt="Logo"
              height={38}
              style={{ width: 'auto' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">หน้าแรก</Nav.Link>
              <Nav.Link href="/Pagewebsite">แพ็คเกจเว็บ</Nav.Link>
              <Nav.Link href="/PortfolioGraphic">แพ็คเกจกราฟิก</Nav.Link>
              <NavDropdown title="ผลงาน" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/portfolio/web">เว็บ</NavDropdown.Item>
                <NavDropdown.Item href="/portfolio/ads">ภาพ ADS.</NavDropdown.Item>
                <NavDropdown.Item href="/portfolio/images">ภาพ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">....</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/services/web">บริการทำเว็บไซต์</Nav.Link>
              <Nav.Link href="/services/graphic">บริการออกแบบกราฟิก</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${Banner1.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 responsive-heading">รับทำเว็บไซต์ | Graphic Design</h1>
              <h4 className="mb-3 responsive-subheading">
                พัฒนาเว็บไซต์ด้วยเทคโนโลยี React และ Next.js
                <Image
                  src={PicNextjs}
                  alt="Next.js Logo"
                  width={50}
                  height={50}
                  style={{ marginLeft: '8px', height: 'auto' }}
                />
                <Image
                  src={PicReact}
                  alt="React Logo"
                  width={45}
                  height={45}
                  style={{ marginLeft: '8px', height: 'auto' }}
                />
              </h4>
              <Button
                href="https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20ทำ%20Giveaway%20ค่ะ"
                target="_blank"
                rel="nofollow"
                variant="light"
                size="lg"
                className="m-2 d-inline-block responsive-button"
              >
                ทำเว็บไซต์
              </Button>
              <Button
                href="https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20ทำ%20Giveaway%20ค่ะ"
                target="_blank"
                rel="nofollow"
                variant="outline-light"
                size="lg"
                className="m-2 d-inline-block responsive-button"
              >
                ออกแบบกราฟิก
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
