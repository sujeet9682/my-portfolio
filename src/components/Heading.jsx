import React from 'react'
import { twMerge } from "tailwind-merge";

export const Heading = ({className,children}) => {
    return (
        <h3
          className={twMerge(
            "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary text-white",
            className
          )}
        >
          {children}
        </h3>
      );
}
