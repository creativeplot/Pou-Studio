
import { motion } from "framer-motion";

const HeaderList = ({location}) => {

  
  return (
    <motion.ul className="gap-x-3 p-2 hidden md:flex mt-6 text-sm"
    key={location.pathname}
        initial={{
          opacity: 0,
          y: "30px"
        }}
        animate={{
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.50,
          }
        }}>
            <li className="grid place-content-center">Expertise</li>
            <li className="bg-neutral-200 p-2 px-3 rounded-3xl ">Branding</li>
            <li className="bg-neutral-200 p-2 px-3 rounded-3xl ">Product</li>
            <li className="bg-neutral-200 p-2 px-3 rounded-3xl ">Design Systems</li>
        </motion.ul>
  )
}

export default HeaderList;