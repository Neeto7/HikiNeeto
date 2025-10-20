"use client";
import Image from "next/image";

const skills = [
  { src: "/css.png", alt: "CSS" },
  { src: "/html.png", alt: "HTML" },
  { src: "/javascript.png", alt: "JavaScript" },
  { src: "/tailwind.jpg", alt: "TailwindCSS" },
  { src: "/figma.jpg", alt: "Figma" },
  { src: "/nextjs.png", alt: "Next.js" },
  { src: "/sass.png", alt: "sass" },
  { src: "/ui.png", alt: "UI/UX" },
  { src: "/react.png", alt: "React" },
];

const SkillsGrid=()=> {
  return (
   <section className="relative w-full h-screen bg-black overflow-hidden">
      <div className="grid grid-cols-3 h-full">
        
        {/* Kiri - scroll up */}
        <div className="relative overflow-hidden">
          <div className="animate-scrollUp flex flex-col items-center space-y-12">
            {[...skills, ...skills].map((skill, i) => (
              <Image
                key={`left-${i}`}
                src={skill.src}
                alt={skill.alt}
                width={120}
                height={120}
               className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
               />
            ))}
          </div>
        </div>

        {/* Tengah - scroll down */}
        <div className="relative overflow-hidden">
          <div className="animate-scrollDown flex flex-col items-center space-y-12">
            {[...skills, ...skills].map((skill, i) => (
             <Image
              key={`left-${i}`}
              src={skill.src}
              alt={skill.alt}
              width={120}
              height={120}
             className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
            />
            ))}
          </div>
        </div>

        {/* Kanan - scroll up */}
        <div className="relative overflow-hidden">
          <div className="animate-scrollUp flex flex-col items-center space-y-12">
            {[...skills, ...skills].map((skill, i) => (
              <Image
                key={`left-${i}`}
                src={skill.src}
                alt={skill.alt}
                width={120}
                height={120}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default SkillsGrid;
