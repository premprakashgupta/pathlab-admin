"use client";


import Image from 'next/image';
import React,{ReactNode} from 'react';

type Props = {
  className: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick: () => void;
  children: ReactNode;
};

const FlatBtn: React.FC<Props> = ({
  className = '',
  prefix = null,
  suffix = null,
  onClick,
  children,
}) => {
  return (
    <button
      className={`px-2 py-2 rounded-md hover:opacity-90 flex gap-2 items-center ${className}`}
      onClick={onClick}
    >
      {prefix && prefix} 
      {children}
      {suffix && suffix}
    </button>
  );
};

export default FlatBtn;
