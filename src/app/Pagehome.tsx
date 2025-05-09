"use client";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BounceLoader from "react-spinners/ClockLoader";
import HeaderNavbar from "@/components/Menu/index";
import Boxinner from "@/components/Boxinner/index";
import Packet from "@/components/Packet/index";
import Logo from "@/components/Img/C-Logo-New.png";
import Bannergraphic from "@/components/Boxinergraphic/index";
import Footer from "@/components/Footer/index";
import Pickweb from "@/components/Pickweb/index";
import BannerHeader from "@/components/BannerHeader/index";
import BannerFooter from "@/components/Banner";
import Performence from "@/components/Performance";


function Pagehome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = Logo.src;
    img.onload = () => setTimeout(() => setLoading(false), 300);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <BounceLoader color="white" loading={loading} size={45} />
          <img src={Logo.src} width="90" alt="Loading Logo" />
          <h3 style={{ color: "white" }}>C-Design</h3>
        </div>
      )}

      {!loading && (
        <>
          <HeaderNavbar />
          <main>
            {" "}
            {/* ใช้ main แทน body */}
            <Boxinner />
            <Pickweb />
            <BannerHeader />
            <Packet />
            <Bannergraphic />
            <BannerFooter />
            <Performence />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
export default Pagehome;
