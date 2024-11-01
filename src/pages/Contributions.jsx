import React, { useState } from "react";
import { Link, Router, } from 'react-router-dom';
import { Heading } from "../components/Heading";
import { AnimatePresence, motion } from "framer-motion";
import { contributions } from "../constants/contributions"
import { FaArrowRight } from "react-icons/fa6";

const Contributions = () => {
  const [hovered, setHovered] = useState(null);

  const images = [
    "https://imgs.search.brave.com/etUEGWVI_kR3k09ibXJ-8Z4RDPOYd4_gwIq4H5Xzdzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NzgzMDAyMzgwLzNl/MmUwZTY3LTlhNmIt/NDdjMC1hOTUzLWYx/ZmU1YjZlNzUzOQ",
    "https://imgs.search.brave.com/etUEGWVI_kR3k09ibXJ-8Z4RDPOYd4_gwIq4H5Xzdzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NzgzMDAyMzgwLzNl/MmUwZTY3LTlhNmIt/NDdjMC1hOTUzLWYx/ZmU1YjZlNzUzOQ",
    "https://imgs.search.brave.com/etUEGWVI_kR3k09ibXJ-8Z4RDPOYd4_gwIq4H5Xzdzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NzgzMDAyMzgwLzNl/MmUwZTY3LTlhNmIt/NDdjMC1hOTUzLWYx/ZmU1YjZlNzUzOQ",
    "https://imgs.search.brave.com/etUEGWVI_kR3k09ibXJ-8Z4RDPOYd4_gwIq4H5Xzdzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NzgzMDAyMzgwLzNl/MmUwZTY3LTlhNmIt/NDdjMC1hOTUzLWYx/ZmU1YjZlNzUzOQ",
    "https://imgs.search.brave.com/etUEGWVI_kR3k09ibXJ-8Z4RDPOYd4_gwIq4H5Xzdzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NzgzMDAyMzgwLzNl/MmUwZTY3LTlhNmIt/NDdjMC1hOTUzLWYx/ZmU1YjZlNzUzOQ",
    "https://imgs.search.brave.com/etUEGWVI_kR3k09ibXJ-8Z4RDPOYd4_gwIq4H5Xzdzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NzgzMDAyMzgwLzNl/MmUwZTY3LTlhNmIt/NDdjMC1hOTUzLWYx/ZmU1YjZlNzUzOQ",
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 text-white">
      {contributions.map((contribution, index) => (
        <motion.div
          key={contribution.index}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            key={contribution.index}
            to={contribution.link}
            target="_blank"
            className="relative my-10 block"
            onMouseEnter={() => setHovered(contribution.index)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence mode="wait">
              {hovered === contribution.index && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1.05,
                    scaleY: 1.2,
                  }}
                  exit={{
                    opacity: 0,

                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  className="absolute z-0 pointer-events-none bg-gray-900 inset-0 h-full w-full   rounded-md "
                />
              )}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
              <img
                src={images[contribution.index - 1]}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md object-fill h-20 w-40"
              />
              <div className="flex flex-col col-span-3">
                <div className="flex justify-between items-center">
                  <Heading className="text-lg md:text-lg lg:text-lg">
                    {contribution.title}
                  </Heading>
                </div>
                <div className="text-md text-primary flex md:text-md lg:text-md mt-2">
                  {contribution.org}
                  <div className="pl-4"><FaArrowRight color="white" /></div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default Contributions
