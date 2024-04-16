import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import React from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`  z-[100] start-0  justify-center  shadow-s     md:inset-x-0  ${
        isSticky
          ? "sticky  bg-[#dfecef] border-b shadow-sm   top-0 md:-translate-y-4 md:w-3/4 lg:w-full mx-auto z-[100] transition-all duration-500"
          : "    transition-all duration-500 w-full z-[100] "
      }  shadow-4xl `}
    >
      <div className="  justify-between px-4 mx-auto lg:max-w-7xl items-center	 md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            {/* LOGO */}
            <div className="  w-14 -mb-3 ">
              {/* <Link to="/"  > */}
              <img src="/logo.jpg" className=" " alt="img" />
              {/* </Link> */}
            </div>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <i>
                    <IoMdClose />
                  </i>
                ) : (
                  <i>
                    <GiHamburgerMenu />{" "}
                  </i>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 transition-all justify-self-center    duration-300  md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen transition-all  md:h-auto items-center   duration-300    justify-center md:flex ">
              {/* <Link to="/" onClick={() => setNavbar(false)}> */}
              <li className=" text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#e09900]  border-[#e09900]  md:hover:text-[#e09900] md:hover:bg-transparent">
                Home
              </li>
              {/* </Link> */}

              {/* <Link to="/service" onClick={() => setNavbar(false)}> */}
              <li className=" text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#e09900]  border-[#e09900]  md:hover:text-[#e09900] md:hover:bg-transparent">
                service
              </li>
              {/* </Link> */}

              {/* <Link to="/about" onClick={() => setNavbar(false)}> */}
              <li className=" text-lg text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#e09900]  border-[#e09900]  md:hover:text-[#e09900] md:hover:bg-transparent">
                About
              </li>
              {/* </Link> */}

              {/* <Link   to="/contact" onClick={() => setNavbar(false)}> */}
              <li className=" text-lg text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#e09900]  border-[#e09900]  md:hover:text-[#e09900] md:hover:bg-transparent">
                contact
              </li>
              {/* </Link> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
