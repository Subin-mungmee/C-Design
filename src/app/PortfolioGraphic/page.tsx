import Head from 'next/head';
import styles from './Portfolio.module.css';
import HeaderNavbar from "@/components/Menu/indexnon";

import Pic9 from '@/components/Img/p9.jpg';
import Pic10 from '@/components/Img/p10.jpg';


type Project = {
  title: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    title: 'Ads. รถยนต์',
    imageUrl: Pic9.src,
  },
  {
    title: 'Company Profile',
    imageUrl: Pic10.src,
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
    imageUrl: '/images/project2.jpg',
  },
  {
    title: 'เพจร้าน Shopee/Lazada',
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
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
