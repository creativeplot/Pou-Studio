
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const AboutSection = () => {

  const location = useLocation();

  return (
    <section className="flex flex-col items-center justify-center w-full px-5">
        <motion.p className="font-normal text-sm w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200 mt-20 mb-5 lg:mt-40"
        initial={{
          opacity: 0,
          y: "40px",
        }}
        whileInView={{
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.50,
            delay: 0.05,
          }
        }}
        viewport={{ once: true }}>About</motion.p>
        <motion.h2 className="font-normal text-3xl text-center max-w-3xl lg:text-4xl lg:font-medium"
        initial={{
          opacity: 0,
          y: "40px"
        }}
        whileInView={{
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.70,
            delay: 0.05,
          }
        }}
        viewport={{ once: true }}>A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.</motion.h2>
    </section>
  )
}

export default AboutSection