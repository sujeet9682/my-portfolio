import React, { useState } from 'react'
import { useLocation, createBrowserRouter, RouterProvider, Route, Link, Router, } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { navlinks } from "../constants/navlinks";
import { socials } from "../constants/socials";
import { twMerge } from "tailwind-merge";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Badge from "../components/ResumeBadge";


const isMobile = () => {
    if (typeof window === "undefined") return false;
    const width = window.innerWidth;
    return width <= 1024;
};

const Navigation = ({ setOpen }) => {
    const location = useLocation();

    const isActive = (href) => location?.pathname === href;

    return (
        <div className="flex flex-col space-y-1 bg-gray-950 my-10 relative z-[100]">
            {navlinks.map((link) => (
                <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => isMobile() && setOpen(false)}
                    className={twMerge(
                        "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                        isActive(link.href) && "bg-gray-800 shadow-lg text-primary"
                    )}
                >
                    {/* text content of navlink  */}
                    <link.icon
                        className={twMerge(
                            "h-4 w-4 flex-shrink-0",
                            isActive(link.href) && "text-sky-500"
                        )}
                    />
                    <span>{link.label}</span>
                </Link>
            ))}

            <p as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
                Socials
            </p>
            {socials.map((link) => (
                <Link
                    key={link.href}
                    to={link.href}
                    target="_blank"
                    className={twMerge(
                        "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
                    )}
                >
                    <link.icon
                        className={twMerge(
                            "h-4 w-4 flex-shrink-0",
                            isActive(link.href) && "text-sky-500"
                        )}
                    />
                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
};


const SidebarHeader = () => {
    return (
        <Link to="/" className="flex space-x-2 py-8">
            <img
                src="/sj.png"
                alt="Avatar"
                height="40"
                width="40"
                className="object-cover object-top rounded-full flex-shrink-0"
            />
            <div className="flex text-sm flex-col">
                <p className="font-bold text-primary">Sujeet Gupta</p>
                <p className="font-light text-secondary">Developer</p>
            </div>
        </Link>
    );
};

const Navbar = () => {

    const [open, setOpen] = useState(isMobile() ? false : true);

    return (
        <div className='text-white'>
            <button
                className="fixed top-4 left-0 h-8 w-8 bg-gray-800 text-white rounded-r-lg flex items-center justify-center z-50"
                onClick={() => setOpen(!open)}
            >
                <FaArrowRightArrowLeft className="h-4 w-4 text-secondary" />
            </button>
            <AnimatePresence>
                {open && (<motion.div
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    exit={{ x: -200 }}
                    className="px-6 z-10  py-10 bg-gray-950 max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between"
                >
                    <SidebarHeader />
                    <Navigation setOpen={setOpen} />
                    {/* </div> */}
                    <Badge href="#" text="Read Resume" />
                </motion.div>)}
            </AnimatePresence>

        </div>
    )
}

export default Navbar
