import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../constants/products";

 const SingleProduct = ({ }) => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  const [activeImage, setActiveImage] = useState(product.thumbnail);

  return (
    <div className="py-10 text-white max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex justify-center"
      >
        <img
          src={activeImage}
          alt="thumbnail"
          height="1000"
          width="1000"
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap">
        {product.images.map((image, idx) => (
          <button onClick={() => setActiveImage(image)} key={`image-thumbnail-${idx}`}>
            <img
              src={image}
              alt="product thumbnail"
              height="1000"
              width="1000"
              className="h-14 w-24 md:h-40 md:w-60 object-cover object-top mr-4 mb-4 border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <h2 className="font-black "> {product.title}</h2>
        <div className="flex space-x-2 ">
          {product.stack?.map((stack) => (
            <span key={stack} className="text-xs md:text-xs lg:text-xs bg-gray-600 px-2 p-1 rounded-sm text-secondary">
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="max-w-xl mt-4">{product.description}</p>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none mt-4 text-white">
        {product?.content}
      </div>

      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex mt-6 items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
      >
        Live Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12h14"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
    </div>
  );
};

export default SingleProduct;