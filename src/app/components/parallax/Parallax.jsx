"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance])
}

const Image = ({ id }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 200)

  return (
    <section className="img-container">
      <div ref={ref}>
        <img
          src={`/photo${id}.jpeg`}
          alt={`Photography ${id}`}
        />
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ y }}
      >
        {`#00${id}`}
      </motion.h2>
    </section>
  )
}

const Parallax = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div id="parallax-section">
      {/* Title */}
      <div className="title-container">
        <h1 className="title">Through the Lens 🌸</h1>
      </div>

      {/* Images */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Image key={i} id={i} />
      ))}

      {/* Progress bar */}
      <motion.div className="progress" style={{ scaleX }} />

      <StyleSheet />
    </div>
  )
}

export default Parallax

const StyleSheet = () => (
  <style>{`
    /* Hilangkan scroll snap biar bisa scroll normal */
    body {
      overflow-x: hidden;
      margin: 0;
    }

    .title-container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
    }

    .title {
      color: #8df0cc;
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      font-family: "Azeret Mono", monospace;
    }

    .img-container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .img-container > div {
      width: 300px;
      height: 400px;
      margin: 20px;
      overflow: hidden;
      border-radius: 16px;
    }

    .img-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }

    @media (max-width: 500px) {
      .img-container > div {
        width: 180px;
        height: 240px;
      }
    }

    .img-container h2 {
      color: #8df0cc;
      font-family: "Azeret Mono", monospace;
      font-size: 36px;
      font-weight: 700;
      position: absolute;
      top: calc(50% - 20px);
      left: calc(50% + 120px);
    }

    .progress {
      position: fixed;
      left: 0;
      right: 0;
      height: 5px;
      background: #8df0cc;
      bottom: 10px;
      transform: scaleX(0);
    }
  `}</style>
)
