import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLine, FaEnvelope } from "react-icons/fa";
import Logo from "../Img/LogoC-De.png";
import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <Row className="mb-4">
              {/* โลโก้และคำอธิบาย */}
              <Col md={4} className="mb-4">
                <img src={Logo.src} alt="Logo" style={{ width: "60px" }} />
                <div className={`mt-2 ${styles["footer-brand"]}`}>C-DESIGN</div>
                <p className="small mb-0">
                  บริการออกแบบเว็บไซต์ และกราฟิกดีไซน์<br />
                  ที่ตอบโจทย์ธุรกิจของคุณ
                </p>
              </Col>

              {/* เมนู */}
              <Col md={4} className="mb-4">
                <h6 className="fw-bold mb-3">เมนู</h6>
                <ul className="list-unstyled small">
                  <li><a href="/" className={styles["footer-link"]}>หน้าแรก</a></li>
                  <li><a href="/Pagewebsite" className={styles["footer-link"]}>บริการของเรา</a></li>
                  <li><a href="/Pagegraphic" className={styles["footer-link"]}>ผลงาน</a></li>
                  <li>
                    <a href="https://line.me/R/ti/p/@018jebed?text=สนใจทำเว็บไซต์ครับ"
                       target="_blank" rel="noopener noreferrer"
                       className={styles["footer-link"]}>
                       ติดต่อเรา
                    </a>
                  </li>
                </ul>
              </Col>

              {/* ติดต่อเรา */}
              <Col md={4}>
                <h6 className="fw-bold mb-3">ติดต่อเรา</h6>
                <p className="small mb-2"><FaLine className="me-2" />@018jebed</p>
                <p className="small mb-2"><FaFacebook className="me-2" />Creceivedesign</p>
                <div className={`d-flex justify-content-center gap-3 ${styles["footer-icons"]}`}>
                  <a href="#" className={styles["footer-icon"]}><FaEnvelope /></a>
                  <a href="#" className={styles["footer-icon"]}><FaInstagram /></a>
                </div>
              </Col>
            </Row>

            <hr className="border-secondary my-3" />
            <p className="text-center text-secondary small mb-0">
              © {currentYear} DESIGN By{" "}
              <a href="#" className={styles["footer-link"]}>C-DESIGN</a>. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
