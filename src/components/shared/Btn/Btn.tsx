'use client';

import React from 'react';

import clsx from 'clsx';

const Btn = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        'px-8 py-3 border-none cursor-pointer bg-brown outline-none font-sans text-base text-bg hover:bg-primary duration-150 ease-linear',
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Btn;
