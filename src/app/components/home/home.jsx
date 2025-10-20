"use client";
import Image from "next/image";
import { motion, useAnimation, useMotionValue, useTransform, animate, useMotionTemplate } from "framer-motion";
import { useState, useEffect } from "react";
import LightRays from "../LightRays/LightRays";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [showLightRays, setShowLightRays] = useState(false);
  const controls = useAnimation();

  // Motion values untuk gerakan logo & shadow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowIntensity = useMotionValue(20);

  // Transformasi shadow & glow
  const shadowX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const shadowY = useTransform(mouseY, [0, window.innerHeight], [-5, 5]);
  const shadowBlur = useTransform(glowIntensity, [10, 30], [20, 50]);
  const shadowFilter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px #00ffff)`;

  const text = "HIKINEETO";

  // Animasi logo + LightRays + shadow + text
  useEffect(() => {
    const sequence = async () => {
      // Logo muncul scale + rotate
      await controls.start({
        scale: [0, 1.5, 1],
        rotate: [0, 360, 0],
        x: [0, 5, -5, 3, -3, 0],
        y: [0, 5, -5, 3, -3, 0],
        transition: { duration: 2, ease: "easeInOut", times: [0,0.3,0.5,0.7,0.9,1] },
      });

      // Tampilkan LightRays
      setShowLightRays(true);

      // Glow shadow neon berdenyut
      const glowAnim = animate(glowIntensity, [20, 35, 20], {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      });

      // Text muncul
      const timer = setTimeout(() => setShowText(true), 500);

      return () => {
        glowAnim.stop();
        clearTimeout(timer);
      };
    };

    sequence();
  }, [controls, glowIntensity]);

  // Update mouse
  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <main className="flex items-center justify-center h-screen bg-black perspective-1000 relative overflow-hidden">
      {/* Shadow glow mengikuti bentuk logo */}
      {showLightRays && (
        <motion.div
          style={{
            position: "absolute",
            top: "calc(50% + 120px)", // di bawah logo + text
            left: "50%",
            x: "-50%",
            scaleY: 0.2, // tipiskan di sumbu Y
            rotateX: 75,
            width: "160px",
            height: "160px",
            backgroundImage: "url('/Logo.png')", // shadow bentuk logo
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: shadowFilter,
            opacity: 0.5,
            zIndex: 0,
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      )}

      <div className="flex flex-col items-center relative w-full h-full z-10">
        {/* LightRays di depan logo */}
        {showLightRays && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 flex justify-center items-start min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] z-20 pointer-events-none"
          >
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays w-full h-full"
            />
          </motion.div>
        )}

        {/* Logo + Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
          {/* Logo */}
          <motion.div animate={controls} style={{ x: shadowX, y: shadowY }}>
            <Image
              src="/Logo.png"
              alt="Hikineeto Logo"
              width={160}
              height={160}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
              priority
            />
          </motion.div>

          {/* Text */}
          <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 flex">
            {showText &&
              text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                >
                  {char}
                </motion.span>
              ))}
          </h1>
        </div>
      </div>
    </main>
  );
}
