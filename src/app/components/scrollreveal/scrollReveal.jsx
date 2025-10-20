"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollReveal = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -100, // geser full ke kiri
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen  flex items-center overflow-hidden"
    >
      <div
        ref={textRef}
        className="flex items-center text-[5rem] font-bold whitespace-nowrap"
      >
        {/* Logo sebelum teks */}
        <img
          src="/Logo.png" // ganti dengan path logo kamu
          alt="Logo"
          className="w-24 h-24 mr-12 object-contain"
        />

        <span className="mr-20 text-white">ALI</span>
        <span className="mr-20 text-white">MAHBAN</span>
        <span className="mr-20 text-white">TAUHID</span>

        {/* A.K.A container */}
        <span className="mr-20 bg-[#374280] px-6 py-2 rounded-full rotate-[17deg] inline-block text-white">
          A.K.A
        </span>

        <span className="mr-20 text-white">HIKINEETO</span>
        <span className="mr-20 text-white">"Make it simple, but significant."</span>
      </div>
    </section>
  );
};

export default ScrollReveal;