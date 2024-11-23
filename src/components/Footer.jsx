

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Footer = ({heightFactor}) => {

    const location = useLocation()

    const factor = heightFactor();

    const barStyle = {
        width: "1px",
        height: "100%",
        backgroundColor: "black",
        position: "absolute",
    }

    const myAnimation = {

        width:["1px", "5px", "5px", "9px", "9px", "1px", "1px", "5px","5px", "9px","9px", "1px", "1px"],
        willChange: "transform",
    }

    const transitionConfig = {
        duration: 7,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.1,0.15, 0.2,0.25, 0.3,0.35, 0.4,0.45, 0.5,0.55, 0.6,0.65, 0.7,0.75],
        willChange: "transform",
    }

  return (
    <footer className={` ${factor === true ? 'h-4/5' : 'h-2/3'} flex flex-col items-center  ${factor === true ? 'justify-evenly lg:justify-between' : 'justify-around'} lg:px-72`}>

        <div className={`text-3xl text-center ${factor === true ? 'mt-10 lg:mt-60' : 'mt-20'} lg:text-4xl ${factor === true ? 'lg:text-6xl' : 'lg:text-4xl'}  ${factor === true ? 'font-semibold' : 'font-medium'} lg:font-semibold lg:mt-48`}>
            <motion.h1
            key={location.pathname}
            initial={{
              opacity: 0,
              y: "40px"
            }}
            whileInView={{
              opacity: 1,
              y: "0px",
              transition: {
                duration: 0.50
              }
            }}>Let's work together</motion.h1>
            <a href="contact.html" className="text-neutral-500 hover:text-neutral-400"><motion.p
            key={location.pathname}
            initial={{
              opacity: 0,
              y: "40px"
            }}
            whileInView={{
              opacity: 1,
              y: "0px",
              transition: {
                duration: 0.50,
                delay: 0.15
              }
            }}>Get in touch</motion.p></a>
        </div>

        <div className={`text-sm text-center mt-5 lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-32`}>
            <div className="flex flex-col items-center justify-center mb-2 lg:flex-row lg:mb-0 lg:gap-x-3" 
            style={{
                gap: "15px"
            }}>

            <motion.div
                style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    marginBottom: "5px"

                }}>
                    <motion.div
                    style={barStyle}
                    animate={{
                        ...myAnimation,
                        rotate: [30, 60, 62, 90, 92, 120, 122, 150, 152, 180, 182, 208, 210],
                    }}
                    transition={transitionConfig}></motion.div>
                    <motion.div
                    style={barStyle}
                    animate={{
                        ...myAnimation,
                        rotate: [60, 90, 92, 120, 122, 150, 152, 180, 182, 208, 210, 238, 240]
                    }}
                    transition={transitionConfig}></motion.div>
                    <motion.div
                    style={barStyle}
                    animate={{
                        ...myAnimation,
                        rotate: [90, 120, 122, 150, 152, 180, 182, 208, 210, 238, 240, 268, 270,]
                    }}
                    transition={transitionConfig}></motion.div>
                    <motion.div
                    style={barStyle}
                    animate={{
                        ...myAnimation,
                        rotate: [120, 150, 152, 180, 182, 208, 210, 238, 240, 268, 270, 298, 300]
                    }}
                    transition={transitionConfig}></motion.div>
                    <motion.div
                    style={barStyle}
                    animate={{
                        ...myAnimation,
                        rotate: [150, 180, 182, 208, 210, 238, 240, 268, 270, 298, 300, 328, 330]
                    }}
                    transition={transitionConfig}></motion.div>
                    <motion.div
                    style={barStyle}
                    animate={{
                        ...myAnimation,
                        rotate: [180, 208, 210, 238, 240, 268, 270, 298, 300, 328, 330, 358, 360]
                    }}
                    transition={transitionConfig}></motion.div>

                </motion.div>
                <p>&copy; Pou Harris 2023</p>

            </div>
            <div className="flex gap-x-3 lg:justify-center lg:items-center">
                <a href="pou-index.html" className="hover:text-neutral-500">Twitter</a>
                <a href="pou-index.html" className="hover:text-neutral-500">Linkedin</a>
                <a href="pou-index.html" className="hover:text-neutral-500">Mail</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer