import Head from 'next/head';
import styles from './Portfolio.module.css';
import HeaderNavbar from "@/components/Menu/indexnon";


type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: 'Landing Page สำหรับสินค้า',
    description: 'ออกแบบและพัฒนาเว็บขายสินค้าเดี่ยวด้วย React + Bootstrap',
    imageUrl: '/images/project1.jpg',
    link: 'https://your-demo-link.com',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    description: 'ดูแลภาพลักษณ์เพจพร้อมออกแบบภาพโฆษณา',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    description: 'ดูแลภาพลักษณ์เพจพร้อมออกแบบภาพโฆษณา',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    description: 'ดูแลภาพลักษณ์เพจพร้อมออกแบบภาพโฆษณา',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    description: 'ดูแลภาพลักษณ์เพจพร้อมออกแบบภาพโฆษณา',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    description: 'ดูแลภาพลักษณ์เพจพร้อมออกแบบภาพโฆษณา',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    description: 'ดูแลภาพลักษณ์เพจพร้อมออกแบบภาพโฆษณา',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    description: 'ดูแลภาพลักษณ์เพจพร้อมออกแบบภาพโฆษณา',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    description: 'ดูแลภาพลักษณ์เพจพร้อมออกแบบภาพโฆษณา',
    imageUrl: '/images/project2.jpg',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>ผลงานของเรา | C-Design</title>
      </Head>
      <HeaderNavbar />
      <main className={styles.container}>
        <h1 className={styles.title}>ตัวอย่างผลงาน</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <img src={project.imageUrl} alt={project.title} className={styles.image} />
              <div className={styles.content}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    ดูตัวอย่าง
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
