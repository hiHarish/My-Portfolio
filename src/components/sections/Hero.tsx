import globeImg from "../../assets/Globe.webp";
import oceanImg from "../../assets/Ocean.webp";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={oceanImg}
            alt=""
            animate={{
              scale: [1, 1.03, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-0
              top-32
              md:top-20
              h-full
              w-full
              object-cover
              opacity-80
            "
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-360 px-5 md:px-8">
        <div className="grid min-h-screen items-center pt-24 md:pt-0 lg:grid-cols-[45%_55%]">
          
          {/* LEFT CONTENT */}

          <div className="order-2 max-w-2xl text-center lg:order-1 lg:text-left">
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-blue-300
                px-3
                py-2
                text-[10px]
                md:text-xs
                uppercase
                tracking-[0.2em]
                text-blue-200
              "
            >
              Software Engineer | AIML | Data
            </div>

            <h1
              className="
                mt-6
                text-4xl
                sm:text-5xl
                md:text-7xl
                xl:text-[6rem]
                font-semibold
                tracking-tighter
              "
            >
              Harish Kumar Peddi
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                md:text-xl
                leading-relaxed
                text-white/60
                mx-auto
                lg:mx-0
              "
            >
              I build scalable web applications, AI-powered
              solutions, and real-time systems that solve
              real-world problems.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-4
                justify-center
                lg:justify-start
              "
            >
              <a
                href="#work"
                className="
                  rounded-full
                  bg-white
                  px-7
                  py-3
                  text-black
                  font-medium
                "
              >
                View My Work →
              </a>

              <a href="/Harish_Peddi_SDE.pdf"
                className="
                  rounded-full
                  border
                  border-white/15
                  px-7
                  py-3
                  backdrop-blur-md
                "
              >
                Download Resume
              </a>
            </div>

            <p className="mt-8 text-white/60">
              CONNECT WITH ME
            </p>

            <div className="mt-4 flex items-center justify-center lg:justify-start gap-5">
              <a
                href="https://linkedin.com/in/harishpeddi"
                target="_blank"
                rel="noreferrer"
                className="text-white transition-all duration-300"
              >
                <FaLinkedinIn size={25} />
              </a>

              <a
                href="https://github.com/hiHarish"
                target="_blank"
                rel="noreferrer"
                className="text-white transition-all duration-300"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="mailto:harishpeddi33@gmail.com"
                className="text-white transition-all duration-300"
              >
                <MdEmail size={25} />
              </a>

              <a
                href="tel:+919550003011"
                className="text-white transition-all duration-300"
              >
                <MdPhone size={25} />
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="order-1 flex justify-center lg:order-2 lg:mb-0">
            <motion.img
              src={globeImg}
              alt="Globe"
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-70
                sm:w-95
                md:w-125
                lg:w-175
                max-w-full
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;