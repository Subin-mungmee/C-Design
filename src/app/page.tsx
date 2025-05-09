// app/page.tsx
import HomePageindex from './Pagehome';
import { Metadata } from 'next';
import Logo from "@/components/Img/C-Logo-New.png"

export const metadata: Metadata = {
  title: 'C-Design - รับทำเว็บไซต์ React | ออกแบบภาพโฆษณา | ดูแลเพจ Shopee Lazada',
  description:
    'C-Design บริการรับทำเว็บไซต์ด้วย React และ Next.js ออกแบบกราฟิกโฆษณา ดูแลเพจ Facebook พร้อมออกแบบหน้าร้าน Shopee และ Lazada แบบครบวงจร',
  openGraph: {
    title: 'C-Design | รับทำเว็บไซต์ | ออกแบบภาพโฆษณา | ดูแลเพจครบวงจร',
    description:
      'รับทำเว็บไซต์ทันสมัยด้วย Next.js ออกแบบกราฟิกโฆษณาสวยโดดเด่น พร้อมดูแลเพจและหน้าร้าน E-Commerce เช่น Shopee และ Lazada โดยทีมงานมืออาชีพ',
    url: 'https://imn.co.th', // แก้เป็น URL จริงของคุณถ้ายังไม่ได้เปลี่ยน
    images: [
      {
        url: Logo.src, // เปลี่ยนเป็นโลโก้ของ C-Design หากมี
        width: 800,
        height: 600,
        alt: 'C-Design logo',
      },
    ],
  },
  keywords: [
    'รับทำเว็บไซต์',
    'Next.js',
    'React',
    'ออกแบบกราฟิก',
    'ภาพโฆษณา',
    'ดูแลเพจ Facebook',
    'ออกแบบร้าน Shopee',
    'ออกแบบร้าน Lazada',
    'เว็บไซต์ธุรกิจ',
    'บริการการตลาดออนไลน์',
    'C-Design',
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function HomePage() {
  return <HomePageindex />;
}
