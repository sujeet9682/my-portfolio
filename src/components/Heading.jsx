import React from 'react'
import { twMerge } from "tailwind-merge";

export const Heading = ({className,children,as}) => {
    return (
        <h3
          className={twMerge(
            "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary",
            className
          )}
        >
          {children}
        </h3>
      );
}
