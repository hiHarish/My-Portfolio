import profileImg from "../../assets/profile.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black overflow-hidden py-20 md:py-0"
    ><br/><br/>
      {/* Ambient Ball */}
      <motion.div
        animate={{
          x: [-300, 400, -300],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-20
          h-64
          w-64
          md:h-96
          md:w-96
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-360 px-5 md:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-[50%_50%]">

          {/* LEFT CONTENT */}

          <div className="text-center lg:text-left">

            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-blue-300
              "
            >
              About Me
            </span>

            <h2
              className="
                mt-6
                text-4xl
                md:text-6xl
                font-semibold
                leading-tight
                tracking-tight
              "
            >
              Building software
              <br />
              that solves
              <br />
              real-world problems.
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                md:text-lg
                leading-relaxed
                text-white/60
                mx-auto
                lg:mx-0
              "
            >
              I'm a Software Engineer focused on building
              scalable web applications, AI-powered products,
              and distributed systems.
            </p>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                md:text-lg
                leading-relaxed
                text-white/60
                mx-auto
                lg:mx-0
              "
            >
              My experience spans healthcare, education,
              real estate, and e-commerce domains, delivering
              solutions that improve user experience,
              business growth, and operational efficiency.
            </p>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                md:text-lg
                leading-relaxed
                text-white/60
                mx-auto
                lg:mx-0
              "
            >
              Currently working as a Software Developer
              contributing to healthcare management systems
              serving 20+ dental clinics while exploring
              cloud infrastructure, backend engineering,
              security systems, and AI technologies.
            </p>

          </div>

          {/* RIGHT SIDE */}

          {/* MOBILE */}
<div className="md:hidden">

  {/* Profile */}

  <div className="flex justify-center mb-6">
    <img
      src={profileImg}
      alt="Harish Peddi"
      className="
        h-44
        w-44
        rounded-full
        object-cover
        border
        border-white/10
      "
    />
  </div>

  {/* Cards */}

  <div className="grid grid-cols-2 gap-4">

    <div className="rounded-3xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl">
      <h3 className="text-2xl font-semibold">AI/ML</h3>
      <p className="mt-2 text-xs text-white/60">
        Enthusiast & Experimenter
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl">
      <h3 className="text-2xl font-semibold">Full-Stack</h3>
      <p className="mt-2 text-xs text-white/60">
        Building end-to-end solutions
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl">
      <h3 className="text-2xl font-semibold">100+</h3>
      <p className="mt-2 text-xs text-white/60">
        LeetCode Problems Solved
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl">
      <h3 className="text-2xl font-semibold">1+</h3>
      <p className="mt-2 text-xs text-white/60">
        Years Experience
      </p>
    </div>

  </div>

</div>

          <div className="hidden md:block" >
              <div
            className="
              relative
              mx-auto
              h-138
              w-full
              max-w-138
              md:h-150
              md:max-w-150
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-48
                w-48
                md:h-80
                md:w-80
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/15
                blur-[120px]
              "
            />

            {/* TOP LEFT */}

            <div
              className="
                absolute
                left-0
                top-0
                w-36
                md:w-52
                rounded-3xl
                border
                border-white/10
                bg-white/3
                p-4
                md:p-6
                backdrop-blur-xl
              "
            >
              <h3 className="text-2xl md:text-4xl font-semibold">
                AI/ML
              </h3>

              <p className="mt-2 text-xs md:text-sm text-white/60">
                Enthusiast & Experimenter
              </p>
            </div>

            {/* TOP RIGHT */}

            <div
              className="
                absolute
                right-0
                top-0
                w-36
                md:w-52
                rounded-3xl
                border
                border-white/10
                bg-white/3
                p-4
                md:p-6
                backdrop-blur-xl
              "
            >
              <h3 className="text-xl md:text-3xl font-semibold">
                Full-Stack
              </h3>

              <p className="mt-2 text-xs md:text-sm text-white/60">
                Building end-to-end solutions
              </p>
            </div>

            {/* PROFILE IMAGE */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <img
                src={profileImg}
                alt="Harish Peddi"
                className="
                  h-48
                  w-48
                  md:h-72
                  md:w-72
                  rounded-full
                  object-cover
                  border
                  border-white/10
                  shadow-[0_0_80px_rgba(138,180,255,0.15)]
                "
              />
            </div>

            {/* BOTTOM LEFT */}

            <div
              className="
                absolute
                bottom-0
                left-0
                w-36
                md:w-52
                rounded-3xl
                border
                border-white/10
                bg-white/3
                p-4
                md:p-6
                backdrop-blur-xl
              "
            >
              <h3 className="text-2xl md:text-4xl font-semibold">
                100+
              </h3>

              <p className="mt-2 text-xs md:text-sm text-white/60">
                LeetCode Problems Solved
              </p>
            </div>

            {/* BOTTOM RIGHT */}

            <div
              className="
                absolute
                bottom-0
                right-0
                w-36
                md:w-52
                rounded-3xl
                border
                border-white/10
                bg-white/3
                p-4
                md:p-6
                backdrop-blur-xl
              "
            >
              <h3 className="text-2xl md:text-4xl font-semibold">
                1+
              </h3>

              <p className="mt-2 text-xs md:text-sm text-white/60">
                Years Professional Experience
              </p>
            </div>

          </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default About;