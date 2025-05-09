"use client";

import { useState } from "react";
import { BsLaptop, BsPalette } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import PacketWeb from "../Packetweb/index";
import Image from "next/image";
import Imgwebdesign from "@/components/Img/WebMockup.png";
import PacketGraphic from "@/components/PacketGraphic/index";
import Imggraphic from "@/components/Img/GraphicMockup.png"

export default function WebDesignTabs() {
  const [activeTab, setActiveTab] = useState<"starter" | "business">("starter");

  const tabStyles = (isActive: boolean) => ({
    backgroundColor: isActive ? "#003ba5" : "#f8f9fa",
    color: isActive ? "#ffffff" : "#000000",
    border: isActive ? "2px solid #003ba5" : "2px solid transparent",
    fontWeight: 500,
  });

  return (
    <div className="w-100 my-5 px-4">
      <h2 className="text-center fw-bold mb-5" style={{ fontSize: "2.5rem" }}>
        แพ็กเกจบริการ
      </h2>

      {/* Tabs */}
      <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
        <motion.button
          className="px-4 py-2 rounded-pill d-flex align-items-center gap-2"
          style={tabStyles(activeTab === "starter")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab("starter")}
        >
          <BsLaptop size={20} />
          <span>แพ็กเกจเว็บไซต์</span>
        </motion.button>
        <motion.button
          className="px-4 py-2 rounded-pill d-flex align-items-center gap-2"
          style={tabStyles(activeTab === "business")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab("business")}
        >
          <BsPalette size={20} />
          <span>แพ็กเกจกราฟิก</span>
        </motion.button>
      </div>

      {/* Tab Content */}
      <div className="position-relative" style={{ minHeight: 400 }}>
        <AnimatePresence mode="wait">
          {activeTab === "starter" && (
            <motion.div
              key="starter"
              className="p-4 rounded shadow-sm text-white"
              style={{ backgroundColor: "#dadada" }} // สีพื้นหลังใหม่ + เปลี่ยนสีตัวอักษร
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="d-flex flex-column align-items-center">
                <Image
                  src={Imgwebdesign.src}
                  alt="Web Design"
                  width={550}
                  height={350}
                  className="mb-3"
                />
                <h4 className="fw-bold mb-3" style={{ color: '#373737' }}>แพ็กเกจ สำหรับเว็บไซต์</h4>
              </div>
              <PacketWeb />
            </motion.div>
          )}

          {activeTab === "business" && (
            <motion.div
              key="business"
              className="p-4 rounded shadow-sm text-white"
              style={{ backgroundColor: "#dadada" }} // สีพื้นหลังใหม่ + เปลี่ยนสีตัวอักษร
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="d-flex flex-column align-items-center">
                <Image
                  src={Imggraphic.src}
                  alt="Web Design"
                  width={550}
                  height={350}
                  className="mb-3"
                />
                <h4 className="fw-bold mb-3" style={{ color: '#373737' }}>แพ็กเกจ สำหรับเว็บไซต์</h4>
              </div>
              <PacketGraphic />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
