

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const BrandsSection = () => {

  const location = useLocation()
  
  return (
    <section className="flex flex-col items-center pb-16 mt-52">

        <motion.p className="font-normal text-sm w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200 mb-4"
        initial={{
          opacity: 0,
          y: "40px"
        }}
        whileInView={{
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.50,
            delay: 0.1,
          }
        }}
        viewport={{ once: true}}>Clients</motion.p>
        <motion.h2 className="font-semibold text-3xl mb-24"
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
        viewport={{ once: true}}>Who I've worked with</motion.h2>

        <motion.div className="grid grid-cols-2 justify-items-center place-items-center gap-x-28 lg:grid-cols-3 pr-10 pl-5 lg:gap-x-36"
        initial={{
          opacity: 0,
          y: "40px"
        }}
        whileInView={{
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.80,
            delay: 0.05,
          }
        }}
        viewport={{ once: true}}>
            <p className="font-bold max-w-fit text-xl py-20">NIKE</p>
            <p className="font-bold max-w-fit text-xl py-20">EUROSPORT</p>
            <p className="font-bold max-w-fit text-xl py-20 px-16">SCHUH</p>
            <p className="font-bold max-w-fit text-xl py-20 px-16">IBM</p>
            <p className="font-bold max-w-fit text-xl py-20 px-16">GOOGLE</p>
            <p className="font-bold max-w-fit text-xl py-20 px-16">APPLE</p>
            <p className="font-bold max-w-fit text-xl py-20 px-16">VERCEL</p>
            <p className="font-bold max-w-fit text-xl py-20 px-16">AKQA</p>
            <p className="font-bold max-w-fit text-xl py-20 px-16">ZEROLIGHT</p>
            <p className="font-bold max-w-fit text-xl py-20 px-16 ">CORRELATED</p>
        </motion.div>
    </section>
  )
}

export default BrandsSection