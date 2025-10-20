"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Soon = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const target = textRef.current;
    const cursor = cursorRef.current;

    const text = "The lab is open. Experiments in progress.";
    let i = 0;
    let isDeleting = false;

    function typeLoop() {
      if (!isDeleting) {
        // ngetik huruf
        target.innerHTML = text.substring(0, i + 1);
        i++;
        if (i === text.length) {
          isDeleting = true;
          setTimeout(typeLoop, 1500); // jeda sebelum hapus
          return;
        }
      } else {
        // hapus huruf
        target.innerHTML = text.substring(0, i - 1);
        i--;
        if (i === 0) {
          isDeleting = false;
        }
      }
      setTimeout(typeLoop, isDeleting ? 40 : 80);
    }

    typeLoop();

    // Cursor blinking effect
    gsap.to(cursor, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
    });
  }, []);

  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1
          ref={textRef}
          className="text-white text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide inline-block"
        ></h1>
        <span
          ref={cursorRef}
          className="inline-block w-2 h-8 bg-white ml-1 align-middle"
        ></span>
      </div>
    </section>
  );
};

export default Soon;
