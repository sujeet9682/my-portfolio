import React from "react";
import { Link } from 'react-router-dom';
import { Heading } from "./Heading";
import { products } from "../constants/products";
import { Paragraph } from "../components/Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 gap-10">
        {products.map((product, idx) => (
          <motion.div 
            key={product.href} 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
            className="bg-slate-900 rounded-md flex"
          >
            <Link
              to={`/products/${product.slug}`}  // <-- Updated to use `to` instead of `href`
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-900 rounded-2xl transition duration-200 p-4"
            >
              <img
                src={product.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <Heading as="h4" className="font-black text-lg md:text-lg lg:text-lg">
                  {product.title}
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                  {product.description}
                </Paragraph>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.slice(0, 3).map((stack) => (
                    <span
                      key={stack}
                      className="text-xs md:text-xs lg:text-xs bg-gray-800 px-2 py-1 rounded-md text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
