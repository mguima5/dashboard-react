import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  id,
  className = '',
  ...rest
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-xs font-medium text-slate-300">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full bg-slate-950 border rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500
          transition-colors duration-150 focus:outline-none focus:ring-2
          ${error 
            ? 'border-rose-500 focus:ring-rose-500/30' 
            : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20'
          }
          ${className}
        `}
        {...rest}
      />
      {error && (
        <span className="text-xs text-rose-400">{error}</span>
      )}
    </div>
  );
}