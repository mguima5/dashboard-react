import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <div
      className={`bg-slate-800 border border-slate-700/60 rounded-xl p-6 shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}