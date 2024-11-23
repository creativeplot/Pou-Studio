

import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom"; // get current page location

import Header from "../components/Header";
import Footer from "../components/Footer";

import HeaderList from "../components/HeaderList";
import HeaderProfileImages from "../components/HeaderProfileImages";
import { motion } from "framer-motion";


const Layout = () => {

  const location = useLocation(); // put current location into a variable

  // change h2 text depending on the page
  const changeHeaderText = () => {
    if(location.pathname === '/') {
      return (
        <motion.p
        key={location.pathname}
        initial={{
          opacity: 0,
          y: "30px"
        }}
        animate={{
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.50
          }
        }}>A brand and product designer working with clients globally</motion.p>
      );
    }

    if(location.pathname === '/profile') {
      return (
        <motion.p
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
        }}>Hey 👋🏻 I'm Oli</motion.p>
      );;
    };
  };

  const changeHeaderContent = () => {

    if(location.pathname === '/') {

      return (
        <HeaderList location={location} />
      )
    };

    if(location.pathname === '/profile') {

      return (
        <></>
      )
    };

  };

  const changeProfileImages = () => {

    if(location.pathname === '/') {
      return (
        <></>
      )
    };
    if(location.pathname === '/profile') {
      return (
        <HeaderProfileImages location={location} />
      )
    };
  };

  const shrinkHeader = () => {

    if(location.pathname === '/contact') {
      return 'h-32';
    };
  };

  const heightFactor = () => {

    if(location.pathname === '/contact') {
      return true;

    } else {
      return false;
    };

  };

  const linkBgChange = () => {

    if(location.pathname === '/') return '/';

    if(location.pathname === '/profile') return '/profile';

    if(location.pathname === '/contact') return '/contact';
  }

  return (
    <>
    <Header changeHeaderText={changeHeaderText} changeContent={changeHeaderContent} changeImage={changeProfileImages} shrink={shrinkHeader} heightFactor={heightFactor} linkBgChange={linkBgChange}/>
    <Outlet />
    <Footer heightFactor={heightFactor} location={location} />
    </>
  );
};

export default Layout;