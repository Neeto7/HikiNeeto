"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Lorem Garden",
      description: "Website jasa undangan dan prewed",
      image: "/LoremGarden.png",
      link: "https://loremgarden.vercel.app/",
    },
    {
      title: "Hiki Store",
      description:
        "Toko digital dengan fitur realtime cart dan dashboard admin modern.",
      image: "/HikiStore.png",
      link: "https://neeto-shoe-github-io.vercel.app/",
    },

    {
      title: "Desa Tondegesan",
      description: "Website informasi desa Tondegesan yang modern dan responsif.",
      image: "/DesaTondegesan.png", 
      link: "https://desa-tondegesan.vercel.app/",
    },
    {
      title: "Neeto Cafe Backoffice",
      description: "Dashboard backoffice untuk pengelolaan Neeto Cafe.",
      image: "/NeetoCafeBackoffice.png", 
      link: "https://neetocafebackoffice.vercel.app/",
    },
    {
      title: "Neeto Cafe User",
      description: "Aplikasi user untuk pemesanan menu di Neeto Cafe.",
      image: "/NeetoCafeUser.png", 
      link: "https://neeto-cafe-user.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 ">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-100"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
