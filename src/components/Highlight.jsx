import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({className='',children}) => {
  return (
    <span className={twMerge("bg-neutral-700 px-2 py-1 rounded-lg", className)}>
      {children}
    </span>
  );
};
