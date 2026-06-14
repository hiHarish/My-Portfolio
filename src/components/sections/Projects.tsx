import { motion, AnimatePresence } from "framer-motion";
import ddos from "../../assets/ddos.webp";
import dant from "../../assets/DanthAI.webp";
import hospital from "../../assets/HMS.webp";
import chatbot from "../../assets/chatbot.webp";
import whatsapp from "../../assets/whatsapp.webp";
import { useState } from "react";

const projects = [
  {
    title: "PingShield",
    description: "Production-grade DDoS Detection Platform",
    image: ddos,
    tech: ["Go", "Redis", "Docker"],
  },
  {
    title: "Whatsapp Automation",
    description: "Automated messaging platform for WhatsApp",
    image: whatsapp,
    tech: ["Python", "WhatsApp Web"],
  },
  {
    title: "DanthAI",
    description: "AI-powered Dental Assistant",
    image: dant,
    tech: ["React", "Node.js", "Gemini"],
  },
  {
    title: "Hospital Management System",
    description: "Healthcare Management Platform",
    image: hospital,
    tech: ["Next.js", "PostgreSQL"],
  },
  {
    title: "AI Chatbot",
    description: "Context-aware conversational assistant",
    image: chatbot,
    tech: ["React", "Flask"],
  },
];

const Projects = () => {
    const [current, setCurrent] = useState(0);

const nextProject = () => {
  setCurrent((prev) => (prev + 1) % projects.length);
};

const prevProject = () => {
  setCurrent(
    (prev) => (prev - 1 + projects.length) % projects.length
  );
};
  return (
    <section
      id="projects"
      className="bg-black overflow-hidden py-20 md:py-0"
    >
      <div className="mx-auto max-w-360 px-5 md:px-8">

        {/* Heading */}

        <div className="mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* MOBILE */}

        <div className="md:hidden">

  <div className="relative">

    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3 }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-linear-to-br
          from-blue-500/20
          to-transparent
          backdrop-blur-xl
          p-5
        "
      >
        <img
          src={projects[current].image}
          alt={projects[current].title}
          className="
            h-48
            w-full
            rounded-2xl
            object-cover
            border
            border-white/10
          "
        />

        <h3 className="mt-5 text-2xl font-semibold">
          {projects[current].title}
        </h3>

        <p className="mt-3 text-white/60">
          {projects[current].description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {projects[current].tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                px-3
                py-1
                text-xs
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Buttons */}

    <button
      onClick={prevProject}
      className="
        absolute
        left-3
        top-1/2
        -translate-y-1/2
        h-10
        w-10
        rounded-full
        bg-black/50
        backdrop-blur-md
        border
        border-white/10
      "
    >
      ←
    </button>

    <button
      onClick={nextProject}
      className="
        absolute
        right-3
        top-1/2
        -translate-y-1/2
        h-10
        w-10
        rounded-full
        bg-black/50
        backdrop-blur-md
        border
        border-white/10
      "
    >
      →
    </button>

    {/* Dots */}

    <div className="mt-5 flex justify-center gap-2">
      {projects.map((_, index) => (
        <div
          key={index}
          className={`
            h-2 w-2 rounded-full transition-all
            ${
              current === index
                ? "bg-blue-300 w-6"
                : "bg-white/20"
            }
          `}
        />
      ))}
    </div>

  </div>

</div>

        {/* DESKTOP */}

        <div className="hidden md:block overflow-hidden py-4">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="
                  w-95
                  shrink-0
                  rounded-3xl
                  border
                  border-white/10
                  bg-linear-to-br
                  from-blue-500/20
                  to-transparent
                  backdrop-blur-xl
                  p-8
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-56
                    w-full
                    rounded-2xl
                    object-cover
                    border
                    border-white/10
                  "
                />

                <h3 className="mt-6 text-3xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-white/60">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-3
                        py-1
                        text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Projects;