
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";



const ExperienceSection = () => {

    const location = useLocation();

  return (
    <section className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
            <motion.p className="font-normal text-sm w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200 mt-28 lg:mt-52 mb-3"
        initial={{
          opacity: 0,
          y: "40px"
        }}
        whileInView={{
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.50,
            delay: 0.05,
          }
        }}
        viewport={{ once: true }}>Experience</motion.p>
            <motion.h2 className="font-semibold text-3xl mb-28 lg:text-4xl"
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
        viewport={{ once: true }}>Where I've Worked</motion.h2>
        </div>

        <motion.div className="grid grid-cols-2 gap-y-36 lg:grid-cols-3 lg:w-2/4 lg:gap-x-72 w-full"
        key={location.pathname}
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
        viewport={{ once: true }}>
        <div className="flex justify-center items-center">
            <ul className="list-none flex flex-col gap-y-4 justify-center items-center">
                <li className="text-sm text-center">2023 - Present</li>
                <li className="text-xl font-medium text-center">NativeState</li>
                <li className="text-sm text-center">Design Director</li>
                <li className="mt-2 w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200">Co-Founder</li>
            </ul>
        </div>
        <div className="flex justify-center items-center">
            <ul className="list-none flex flex-col gap-y-4 justify-center items-center">
                <li className="text-sm text-center">2021 - Present</li>
                <li className="text-xl font-medium text-center">Friendly Studio</li>
                <li className="text-sm text-center">DLead Product Designer</li>
                <li className="mt-2 w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200">Freelance</li>
            </ul>
        </div>
        <div className="flex justify-center items-center">
            <ul className="list-none flex flex-col gap-y-4 justify-center items-center">
                <li className="text-sm text-center">2017 - Present</li>
                <li className="text-xl font-medium text-center">OH.STUDIO</li>
                <li className="text-sm text-center">Freelance Designer</li>
                <li className="mt-2 w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200">Director</li>
            </ul>
        </div>
        <div className="flex justify-center items-center">
            <ul className="list-none flex flex-col gap-y-4 justify-center items-center">
                <li className="text-sm text-center">2019</li>
                <li className="text-xl font-medium text-center">UI Centric</li>
                <li className="text-sm text-center">Senior Product Designer</li>
                <li className="mt-2 w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200">Freelance</li>
            </ul>
        </div>
        <div className="flex justify-center items-center">
            <ul className="list-none flex flex-col gap-y-4 justify-center items-center">
                <li className="text-sm text-center">2021</li>
                <li className="text-xl font-medium text-center">AKQA</li>
                <li className="text-sm text-center">Senior Designer</li>
                <li className="mt-2 w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200">Freelance</li>
            </ul>
        </div>
        <div className="flex justify-center items-center">
            <ul className="list-none flex flex-col gap-y-4 justify-center items-center">
                <li className="text-sm text-center">2009</li>
                <li className="text-xl font-medium text-center">Next Level</li>
                <li className="text-sm text-center">Digital Designer</li>
                <li className="mt-2 w-auto max-w-fit py-1 px-2 rounded-2xl bg-neutral-200">Permanent</li>
            </ul>
        </div>
    </motion.div>
    </section>
  )
}

export default ExperienceSection