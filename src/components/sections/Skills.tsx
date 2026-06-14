import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    technologies: [
        "Python",
      "Node.js",
      "Express",
      "Go",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    category: "Database",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      "Docker",
      "Linux",
      "Git",
      "GitHub Actions",
      "Prometheus",
    ],
  },
  {
    category: "AI & Data",
    technologies: [
      "Python",
      "TensorFlow",
      "Pandas",
      "Gemini API",
      "Machine Learning",
    ],
  },
  {
    category: "Security",
    technologies: [
      "DDoS Protection",
      "Monitoring",
      "Redis Streams",
      "Network Analysis",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black py-20 md:py-0"
    >
      <div className="mx-auto max-w-360 px-5 md:px-8">

        {/* Heading */}

        <div className="mb-10 md:mb-16 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">
            Technical Expertise
          </p>

          <h2
            className="
              mt-4
              text-4xl
              md:text-6xl
              font-semibold
              tracking-tight
            "
          >
            Technologies I Build With
          </h2>
        </div>

        {/* Skills Grid */}

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              whileHover={{
                y: -5,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/3
                backdrop-blur-xl
                p-5
                md:p-8
              "
            >
              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-semibold
                "
              >
                {skill.category}
              </h3>

              <div className="mt-5 md:mt-6 flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1.5
                      md:px-4
                      md:py-2
                      text-xs
                      md:text-sm
                      text-white/70
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;