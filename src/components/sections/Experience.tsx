import { motion } from "framer-motion";
import AmbientLight from "../AmbientLight";

const experiences = [
  {
    year: "Apr 2026 - Present",
    company: "National Dental Care Corporate",
    role: "Software Developer",
    description:
      "Developing and maintaining healthcare management systems serving 20+ dental clinics across India. Building scalable web applications, REST APIs, and optimizing database performance.",
    highlights: [
      "20+ clinics supported",
      "Next.js & React applications",
      "REST API development",
      "SQL optimization",
    ],
  },
  {
    year: "Mar 2025 - Present",
    company: "AVM Creative Shark",
    role: "Software Developer",
    description:
      "Delivered 15+ client projects across healthcare, education, real estate, and e-commerce industries using modern web technologies.",
    highlights: [
      "15+ projects delivered",
      "MERN Stack",
      "WordPress & Shopify",
      "Client collaboration",
    ],
  },
  {
    year: "May 2024 - Jun 2024",
    company: "Defence Electronics Research Laboratory (DLRL)",
    role: "Python Intern",
    description:
      "Worked on signal processing systems using Fourier Transform and FFT techniques, improving computational performance significantly.",
    highlights: [
      "70% faster computation",
      "Python & NumPy",
      "Signal Processing",
      "Data Visualization",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-black py-20 md:py-0 overflow-hidden"
    ><br/><br/>
      <AmbientLight />

      <div className="mx-auto max-w-6xl px-5 md:px-8">

        {/* Heading */}

        <div className="mb-10 md:mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">
            Experience
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-4
              md:left-6
              top-0
              bottom-0
              w-px
              bg-white/10
            "
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                relative
                mb-6
                pl-12
                md:pl-20
              "
            >
              {/* Dot */}

              <div
                className="
                  absolute
                  left-3
                  md:left-5
                  top-8
                  h-3
                  w-3
                  md:h-4
                  md:w-4
                  rounded-full
                  bg-blue-300
                  shadow-[0_0_15px_rgba(138,180,255,0.8)]
                "
              />

              {/* Card */}

              <div
                className="
                  rounded
                  md:rounded-[28px]
                  border
                  border-white/10
                  bg-white/3
                  backdrop-blur-xl
                  px-5
                  py-5
                  md:px-8
                  md:py-6
                  transition-all
                  duration-300
                  hover:border-blue-400/20
                "
              >
                <div className="grid gap-4 md:grid-cols-[170px_1fr] md:gap-6">

                  {/* Date */}

                  <div>
                    <p className="text-xs md:text-sm text-blue-300">
                      {exp.year}
                    </p>
                  </div>

                  {/* Content */}

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {exp.company}
                    </h3>

                    <p className="mt-1 text-sm md:text-base text-white/60">
                      {exp.role}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="
                            rounded-full
                            border
                            border-white/10
                            px-3
                            py-1
                            text-[10px]
                            md:text-xs
                            text-white/70
                          "
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;