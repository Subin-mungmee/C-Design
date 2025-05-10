import Head from 'next/head';
import styles from './Portfolio.module.css';
import HeaderNavbar from "@/components/Menu/indexnon";

import Pic9 from '@/components/Img/p9.jpg';
import Pic10 from '@/components/Img/p10.jpg';
import Pic11 from '@/components/Img/p11.jpg';
import Pic12 from "@/components/Img/p12.jpg";
import Pic13 from "@/components/Img/p13.jpg";
import Pic14 from "@/components/Img/p14.jpg";
import Pic15 from "@/components/Img/p15.jpg";
import Pic16 from "@/components/Img/p16.jpg";
import Pic17 from "@/components/Img/p17.jpg";
import Pic18 from "@/components/Img/p18.jpg";
import Pic19 from "@/components/Img/p19.jpg";
import Pic20 from "@/components/Img/p20.jpg";
import Pic21 from "@/components/Img/p21.jpg";
import Pic22 from "@/components/Img/p22.jpg";

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
    title: 'Power Point',
    imageUrl: Pic11.src,
  },
  {
    title: 'แผนผังระบบ',
    imageUrl: Pic12.src,
  },
  {
    title: 'Ads. คลีนิค',
    imageUrl: Pic13.src,
  },
  {
    title: 'Ads. ร้านขนม Lazada',
    imageUrl: Pic14.src,
  },
  {
    title: 'Ads. ร้านขนม Shopee',
    imageUrl: Pic15.src,
  },
  {
    title: 'Ads ฉีดโฟม',
    imageUrl: Pic16.src,
  },
  {
    title: 'โบรชัวร์ ขายตึกแถว',
    imageUrl: Pic17.src,
  },
  {
    title: 'Ads ผ้าคลุมรถยนต์',
    imageUrl: Pic18.src,
  },
  {
    title: 'ออกแบบลายเสื้อ',
    imageUrl: Pic19.src,
  },
  {
    title: 'Ads ปลั๊กไฟ ซีเบิร์ก',
    imageUrl: Pic20.src,
  },
  {
    title: 'ริช เมนูไลน์ OA',
    imageUrl: Pic21.src,
  },
  {
    title: 'ปก Facebook',
    imageUrl: Pic22.src,
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
