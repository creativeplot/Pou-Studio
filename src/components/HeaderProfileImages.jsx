

import monkeyImage from "../assets/images/monkey-computer.jpg";
import chimpSuit from "../assets/images/chimp-smiling.jpg";
import { motion } from "framer-motion";


const HeaderProfileImages = ({location}) => {
  return (
    <motion.main className="lg:px-72 lg:grid lg:grid-cols-2  lg:gap-x-5 lg:gap-y-10 md:mt-5 px-6 flex flex-col justify-center items-center h-auto gap-y-11"
    key={location.pathname}
        initial={{
          opacity: 0,
          y: "30px"
        }}
        animate={{
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.70,
          }
        }}>

        <figure className="rounded-xl w-full flex justify-center items-center custom-h lg:2/4">
            <img src={monkeyImage} alt="monkey-computer" className="rounded-xl custom-image"/>
        </figure>
        <figure className="rounded-xl w-full hidden justify-center items-center custom-h lg:2/4 lg:block ">
            <img src={chimpSuit} alt="chimp-in-a-suit" className="rounded-xl w-full custom-image hidden lg:block"/>
        </figure>

    </motion.main>
  )
}

export default HeaderProfileImages