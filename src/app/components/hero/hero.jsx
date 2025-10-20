"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const [textProgress, setTextProgress] = useState(0);

  const fullText = `Hikikomori adalah istilah yang berasal dari Jepang yang secara harfiah berarti "menarik diri" atau "mengurung diri."
NEET adalah akronim bahasa Inggris dari "Not in Education, Employment, or Training" (Tidak dalam Pendidikan, Pekerjaan, atau Pelatihan). Ini adalah kategori statistik yang digunakan untuk menggambarkan status pekerjaan dan pendidikan seseorang.`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Blur foto saat scroll
      gsap.to(bgRef.current, {
        filter: "blur(10px)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=200% top",
          scrub: true,
        },
      });

      // Efek typing text saat scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=200% top",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const length = Math.floor(fullText.length * progress);
          setTextProgress(length);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Foto background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/section4.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Teks */}
      <div className="relative max-w-4xl text-center px-6">
        <p className="text-white text-[1.5rem] md:text-[2rem] leading-relaxed whitespace-pre-line">
          {fullText.substring(0, textProgress)}
        </p>
      </div>
    </section>
  );
};

export default Hero;
