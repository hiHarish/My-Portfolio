import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AmbientLight from "../AmbientLight";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black overflow-hidden py-20 md:py-0"
    ><br/><br/>
      <AmbientLight />

      <div className="mx-auto max-w-6xl px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-[28px]
            md:rounded-[40px]
            border
            border-white/10
            bg-white/3
            backdrop-blur-xl
            p-6
            md:p-12
            text-center
          "
        >
          {/* Heading */}

          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">
            Contact
          </p>

          <h2
            className="
              mt-6
              text-4xl
              md:text-7xl
              font-semibold
              tracking-tight
            "
          >
            Let's Build
            <br />
            Something Great.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              md:mt-8
              max-w-2xl
              text-base
              md:text-lg
              leading-relaxed
              text-white/60
            "
          >
            Whether it's a full-time opportunity,
            freelance project, startup idea,
            or collaboration, I'm always interested
            in building impactful products.
          </p>

          {/* CTA Buttons */}

          <div
            className="
              mt-10
              md:mt-12
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
            "
          >
            <a
              href="mailto:harishpeddi33@gmail.com"
              className="
                rounded-full
                bg-white
                px-8
                py-4
                text-black
                font-medium
              "
            >
              Email Me →
            </a>

            <a
              href="whatsapp://send?phone=+919550003011"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                border
                border-white/10
                px-8
                py-4
              "
            >
              <FaWhatsapp
                size={18}
                className="inline mr-2"
              />
              Chat on WhatsApp
            </a>
          </div>

          {/* Socials */}

          <div
            className="
              mt-12
              md:mt-14
              flex
              justify-center
              gap-6
              md:gap-8
            "
          >
            <a
              href="mailto:harishpeddi33@gmail.com"
              className="text-white/60 hover:text-white transition"
            >
              <MdEmail size={22} />
            </a>

            <a
              href="https://github.com/hiHarish"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/harishpeddi"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>

          {/* Footer */}

          <div
            className="
              mt-12
              md:mt-16
              border-t
              border-white/10
              pt-6
              md:pt-8
              text-xs
              md:text-sm
              text-white/40
            "
          >
            © 2026 Harish Kumar Peddi.
          </div>

        </motion.div>

      </div><br/><br/>
    </section>
  );
};

export default Contact;