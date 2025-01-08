"use client";

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React,{ReactNode} from 'react';

type Props = {
  className: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick: () => void;
  children: ReactNode;
};

const RoundedBtn: React.FC<Props> = ({
  className = '',
  prefix = null,
  suffix = null,
  onClick,
  children,
}) => {
  return (
    <button
      className={`px-5 py-2 rounded-full hover:opacity-90 shadow-md flex gap-2 items-center ${className}`}
      onClick={onClick}
    >
      {prefix && prefix} 
      {children}
      {suffix && suffix}
    </button>
  );
};

export default RoundedBtn;
