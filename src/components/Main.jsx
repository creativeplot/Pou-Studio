
import pinguins from "../assets/images/pinguins-at-the-beach.jpg";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const Main = () => {

    const location = useLocation();

  return (
    <>
    <motion.main className="lg:px-72 lg:grid lg:grid-cols-2  lg:gap-x-5 lg:gap-y-10 md:mt-5 px-6 flex flex-col justify-center items-center h-auto gap-y-11 max-w-full"
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

        <figure className="rounded-xl w-full flex justify-center items-center custom-h">
            <img src="../src/assets/images/dog-with-glasses.jpg" alt="dog-with-glasses" className="rounded-xl custom-image"/>
        </figure>
        <figure className="rounded-xl w-full flex justify-center items-center custom-h custom-image">
            <img src={pinguins} alt="pinguins-at-the-beach" className="rounded-xl custom-image custom-h"/>
        </figure>
        <figure className="rounded-xl w-full flex justify-center items-center custom-h">
            <img src="../src/assets/images/cat-with-glasses.avif" alt="cat-with-glasses" className="rounded-xl custom-image custom-h"/>
        </figure>
        <figure className="rounded-xl w-full flex justify-center items-center custom-h">
            <img src="../src/assets/images/panda-eating.jpg" alt="panda-eating " className="rounded-xl w-full h-full custom-image"/>
        </figure>
        <figure className="rounded-xl w-full flex justify-center items-center custom-h">
            <img src="../src/assets/images/gorila-thinking.jpg" alt="gorila-thinking" className="rounded-xl custom-image"/>
        </figure>
        <figure className="rounded-xl w-full flex justify-center items-center custom-h">
            <img src="../src/assets/images/owl-looking-at-you.webp" alt="owl-looking-at-you" className="rounded-xl custom-image"/>
        </figure>

    </motion.main>
    </>
  )
}

export default Main