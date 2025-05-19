'use client';

import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaFacebookMessenger, FaLine } from 'react-icons/fa';
import styles from './PricingTable.module.css';

const packages = [
  {
    name: "SALE PAGE",
    description: "เว็บไซต์เริ่มต้นโปรโมทธุรกิจ",
    price: "฿2,500",
    color: "#fb2002",
    features: [
      "ระยะเวลาในการทำงาน 7 วัน",
      "เว็บไซต์จำนวน 1 Page",
      "ลงข้อมูลสินค้าไม่เกิน 6 รายการ",
      "Responsive รองรับการแสดงผลบนมือถือ แท็บเล็ต และ PC",
      "ติดตั้ง SSL Certificates (HTTPS) เพิ่มความปลอดภัยให้เว็บไซต์",
      "เพิ่มลิงค์ไปยัง Line / Facebook / Tiktok",
      "ตั้งค่าคียเวิร์ดพื้นฐานสำหรับเว็บไซต์เพื่อให้ค้นหาง่ายใน google ",
      "รองรับการใส่ VDO, Gallery, Image",
      "ปรับ Speed Page ให้เว็บโหลดเร็ว",
      "แก้ไขงานได้ 2 ครั้ง และไม่เกินขอบเขตงาน"
    ],
    cta: "สอบถาม",
    contact: "line",
    note: "*ราคานี้ยังไม่รวมโดเมน และโฮสติ้ง",
    ctaLink: "https://m.me/Creceivedesign"
  },
  {
    name: "SINGLE PAGE WEBSITE",
    description: "เว็บไซต์เริ่มต้นโปรโมทธุรกิจ",
    price: "฿4,500",
    color: "#06b6d4",
    features: [
      "ระยะเวลาในการทำงาน 7 วัน",
      "เว็บไซต์จำนวน 1 Page",
      "เพิ่มปุ่ม Contact เพื่อติดต่อธุรกิจ",
      "เพิ่มลิงค์ไปยัง Line / Facebook / Tiktok",
      "Responsive รองรับการแสดงผลบนมือถือ แท็บเล็ต และ PC",
      "ติดตั้ง SSL Certificates (HTTPS) เพิ่มความปลอดภัยให้เว็บไซต์",
      "พร้อมตั้งค่าพื้นฐาน SEO/KEYWORD บนเว็บไซต์",
      "ฟรี Design Banner 1 ภาพ",
      "ติดตั้งเครื่องมือ สำหรับรองรับการทำ SEO ในอนาคต",
      "ตั้งค่าคียเวิร์ดพื้นฐานสำหรับเว็บไซต์เพื่อให้ค้นหาง่ายใน google ",
      "รองรับการใส่ VDO, Gallery, Image",
      "ปรับ Speed Page ให้เว็บโหลดเร็ว",
      "ติดตั้งแผนที่ Google Map",
      "แก้ไขงานได้ 2 ครั้ง และไม่เกินขอบเขตงาน"
    ],
    cta: "สอบถาม",
    contact: "line",
    note: "*ราคานี้ยังไม่รวมโดเมน และโฮสติ้ง",
    ctaLink: "https://m.me/Creceivedesign"
  },
  {
    name: "CORPORATE WEBSITE",
    description: "เว็บไซต์ขนาดกลาง มีสินค้าหรือบริการเยอะ",
    price: "฿8,000",
    color: "#ec4899",
    features: [
      "ระยะเวลาในการทำงาน 14 วัน",
      "เว็บไซต์จำนวนไม่เกิน 5 Page",
      "เพิ่มปุ่ม Contact เพื่อติดต่อธุรกิจ",
      "เพิ่มลิงค์ไปยัง Line / Facebook / Tiktok",
      "Responsive Website  รองรับการแสดงผลบนมือถือ แท็บเล็ต และ PC",
      "ติดตั้ง SSL Certificates (HTTPS) เพิ่มความปลอดภัยให้เว็บไซต์",
      "ฟรี Design Banner 1 ภาพ",
      "พร้อมตั้งค่าพื้นฐาน SEO/KEYWORD บนเว็บไซต์",
      "ลงสินค้า ไม่เกิน 5 SKU (ไม่มีปุ่มสั่งซื้อ)",
      "ลงบทความ(Blog) ไม่เกิน 5 บทความ",
      "รองรับการใส่ VDO, Gallery, Image",
      "ปรับ Speed Page ให้เว็บโหลดเร็ว",
      "ติดตั้งแผนที่ Google Map",
      "แก้ไขงานได้ 3 ครั้ง และไม่เกินขอบเขตงาน"
    ],
    cta: "สอบถาม",
    contact: "line",
    note: "*ราคานี้ยังไม่รวมโดเมน และโฮสติ้ง",
    ctaLink: "https://m.me/Creceivedesign"
  },
  {
    name: "E-COMMERCE WEBSITE",
    description: "เว็บไซต์ธุรกิจ มีระบบซื้อขายภายในเว็บไซต์",
    price: "฿25,900+",
    color: "#fb923c",
    features: [
      "ระยะเวลาในการทำงาน 20 วัน",
      "เว็บไซต์จำนวนไม่เกิน 5 Page",
      "เพิ่มปุ่ม Contact เพื่อติดต่อธุรกิจ",
      "เพิ่มลิงค์ไปยัง Line / Facebook / Tiktok",
      "ระบบสั่งซื้อสินค้าได้ในเว็บไซต์",
      "Responsive Website รองรับการแสดงผลบนมือถือ แท็บเล็ต และ PC",
      "ติดตั้ง SSL Certificates (HTTPS) เพิ่มความปลอดภัยให้เว็บไซต์",
      "ฟรี Banner 1 ภาพ",
      "พร้อมตั้งค่าพื้นฐาน SEO/KEYWORD บนเว็บไซต์",
      "ลงสินค้า ไม่เกิน 10 SKU",
      "ลงบทความ ไม่เกิน 10 บทความ",
      "รองรับการใส่ VDO,Gallery,Image",
      "ปรับ Speed Page เว็บ",
      "ติดตั้งแผนที่ Google Map",
      "แก้ไขงานได้ 3 ครั้ง และไม่เกินขอบเขตงาน"
    ],
    cta: "สอบถาม",
    contact: "line",
    note: "*ราคานี้ยังไม่รวมโดเมน และโฮสติ้ง",
    ctaLink: "https://m.me/Crereceivedesign"
  }
];

function PricingTable() {
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center px-2">
        {packages.map((pkg, index) => (
          <Col lg={3} md={6} sm={12} key={index} className="mb-4">
            <Card className="shadow-sm h-100" style={{ minHeight: "520px" }}>
              <Card.Header
                style={{
                  backgroundColor: pkg.color,
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <h5 className="mb-0 fw-bold">{pkg.name}</h5>
                <small className="fs-5">{pkg.description}</small>
                <h3 className="mt-2 fw-bold">{pkg.price}</h3>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled fs-6">
                  {pkg.features.map((f, i) => (
                    <div key={i}>
                      <li className="d-flex align-items-start mb-2 text-start">
                        <span className="me-2 mt-1">
                          <FaCheckCircle className="text-success" size={18} />
                        </span>
                        <span>{f}</span>
                      </li>
                      {i !== pkg.features.length - 1 && (
                        <div
                          style={{
                            borderBottom: "1px solid #e0e0e0",
                            margin: "6px 0"
                          }}
                        />
                      )}
                    </div>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer className="bg-white border-0 text-center">
                <Button
                  as="a"
                  href={pkg.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.ctaButton} w-75 mb-3`}
                  style={{
                    backgroundColor: pkg.color,
                    border: 'none',
                    fontSize: '1.1rem',
                    padding: '10px 24px'
                  }}
                >
                  {pkg.cta}
                </Button>
                {pkg.contact === "line" ? (
                  <Button
                    as="a"
                    href="https://line.me/R/ti/p/@018jebed?text=สนใจทำเว็บไซต์ครับ"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-success"
                    size="sm"
                    className="me-2"
                  >
                    <FaLine className="me-2" size={20} /> ติดต่อทาง Line
                  </Button>
                ) : (
                  <Button
                    as="a"
                    href="https://www.facebook.com/Creceivedesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary"
                    size="sm"
                  >
                    <FaFacebookMessenger className="me-2" size={20} /> ติดต่อทาง Messenger
                  </Button>
                )}
                {pkg.note && (
                  <p className="mt-3 text-muted small fst-italic">
                    {pkg.note}
                  </p>
                )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PricingTable;
