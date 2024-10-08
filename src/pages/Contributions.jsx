import React, { useState } from "react";
import { Link, Router, } from 'react-router-dom';
import { Heading } from "../components/Heading";
import { AnimatePresence, motion } from "framer-motion";
import {contributions} from "../constants/contributions"
import { FaArrowRight } from "react-icons/fa6";

const Contributions = () => {
    const [hovered, setHovered] = useState(null);

    const images = [
      "https://images.unsplash.com/photo-1675855547764-2b29a996824f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516801967339-cb50a3ce7781?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1445966838217-f418f2601b54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

  return (
    <div className="max-w-5xl mx-auto my-10">
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
            href={contribution.link}
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
