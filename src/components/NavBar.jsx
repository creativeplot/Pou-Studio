

import { NavLink } from "react-router-dom";

const NavBar = ( { linkChange } ) => {

  const active = "p-2 flex justify-center items-center w-28 bg-white rounded-3xl";
  const notActive = "p-2 flex justify-center items-center w-28 rounded-3xl";

  return (
    <nav className={`flex justify-between w-80 p-1 bg-neutral-200 rounded-3xl mt-6 text-sm fixed top-0 z-10 lg:mt-7 bg-opacity-72 ${linkChange === "/contact" ? 'mr-4' : ''}`}>
            <div className={ linkChange === '/' ? active : notActive }>
                <NavLink to="/">Home</NavLink>
            </div>

            <div className={ linkChange === '/profile' ? active : notActive }>
                <NavLink to="/profile">Profile</NavLink>
            </div>

            <div className={ linkChange === '/contact' ? active : notActive }>
                <NavLink to="/contact">Contact</NavLink>
            </div>
    </nav>
  )
}

export default NavBar;