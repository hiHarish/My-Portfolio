import { motion, AnimatePresence } from "framer-motion";
import Noveg from "../../assets/Noveg.webp";
import Narayana from "../../assets/Narayana.webp";
import JjCult from "../../assets/jjcult.webp";
import Oakwood from "../../assets/oakwood.webp";
import Urvashi from "../../assets/Urvashibyprada.webp";
import { useState, useEffect } from "react";



const works = [
    {
    title: "No Veg Rapix Food Delivery",
    subtitle: "Food Delivery Web App",
    image: Noveg,
    description:
      "Developed a food delivery web app for a local shops, integrating online ordering and real-time meat delivery tracking.",
    impact: ["React", "Node.js", "MongoDB", "Express.js", "WebSocket"],
    website: "https://novegrapix.com/",
  },
    {
    title: "Narayana Sports Academy",
    subtitle: "Institute Website",
    image: Narayana,
    description:
      "Created a responsive website for a sports academy, showcasing programs, schedules, and online registration.",
    impact: ["React", "Node.js","MailJS", "Tailwind CSS"],
    website: "https://www.narayanaathletics.in/ ",
  },
  {
    title: "JJ CULT Ecommerce",
    subtitle: "Ecomerce Website",
    image: JjCult,
    description:
      "Built a custom ecommerce platform for a fashion brand, enabling online sales and inventory management.",
    impact: ["Shopify", "Custom Theme Development", "Payment Gateway Integration"],
    website: "https://jjcult.com/",
  },
  
    {
    title: "OakWood International School",
    subtitle: "School Website",
    image: Oakwood,
    description:
      "Developed a comprehensive school website with online enrollment and student portal features.",
    impact: ["Wordpress", "Custom Theme Development", "Online Enrollment System"],
    website: "https://oakwoodinternational.com/",
  },
    {
    title: "Urvashi By Pradi Gupta",
    subtitle: "Ecommerce Website",
    image: Urvashi,
    description:
      "Built a custom ecommerce platform for a fashion brand, enabling online sales and inventory management.",
    impact: ["Shopify", "Custom Theme Development", "Payment Gateway Integration"],
    website: "https://urvashibyparidhigupta.com/ ",
  }

];


const Work = () => {
    const [current, setCurrent] = useState(0);
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

const nextSlide = () => {
  setCurrent((prev) =>
    (prev + (isMobile ? 1 : 2)) % works.length
  );
};

const prevSlide = () => {
  setCurrent(
    (prev) =>
      (prev - (isMobile ? 1 : 2) + works.length) %
      works.length
  );
};

useEffect(() => {
  const interval = setInterval(nextSlide, 4000);
  return () => clearInterval(interval);
}, [isMobile]);

const visibleWorks = isMobile
  ? [works[current]]
  : [
      works[current],
      works[(current + 1) % works.length],
    ];
  return (
    <section
  id="work"
  className="bg-black py-16 md:py-32 overflow-hidden"
>
  <div className="mx-auto max-w-360 px-3 md:px-8">

    {/* Heading */}

    <div className="mb-10 md:mb-16">
      <p className="text-xs uppercase tracking-[0.25em] text-blue-300">
        Professional Work
      </p>

      <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
        Building Products
        <br />
        For Real Businesses
      </h2>
    </div>

    <div className="relative">

      <AnimatePresence mode="wait">
        <motion.div
           key={current}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
  className="
    grid
    gap-4
    md:gap-6
    lg:grid-cols-2
    justify-center
  "
        >
          {visibleWorks.map((work) => (
            <div
  key={work.title}
  className="
    max-w-[320px]
    md:max-w-none
    mx-auto
    rounded-[20px]
    md:rounded-[28px]
    border
    border-white/10
    bg-white/3
    backdrop-blur-xl
    overflow-hidden
  "
>
  <a
    href={work.website}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={work.image}
      alt={work.title}
      className="
        h-40
        md:h-72
        w-full
        object-cover
      "
    />
  

  <div className="p-4 md:p-8">

    <h3
      className="
        text-xl
        md:text-3xl
        font-semibold
      "
    >
      {work.title}
    </h3>

    <p
      className="
        mt-2
        text-sm
        md:text-base
        text-blue-300
      "
    >
      {work.subtitle}
    </p>

    <p
      className="
        mt-3
        md:mt-4
        text-sm
        md:text-base
        text-white/60
        leading-relaxed
      "
    >
      {work.description}
    </p>

    <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
      {work.impact.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border
            border-white/10
            px-2
            md:px-3
            py-1
            text-[10px]
            md:text-xs
          "
        >
          {item}
        </span>
      ))}
    </div>

  </div></a>  
</div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}

      <div className="mt-8 md:mt-10 flex justify-center gap-4">

        <button
          onClick={prevSlide}
          className="
            h-10
            w-10
            md:h-12
            md:w-12
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            hover:bg-white/10
            transition
          "
        >
          ←
        </button>

        <div className="mt-5 flex justify-center gap-2">
      {works.map((_, index) => (
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

        <button
          onClick={nextSlide}
          className="
            h-10
            w-10
            md:h-12
            md:w-12
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            hover:bg-white/10
            transition
          "
        >
          →
        </button>
        {/* Dots */}

    

      </div>

    </div>
  </div>
</section>
  );
};

export default Work;
