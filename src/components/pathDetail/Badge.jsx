import React from 'react';

export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 ${className}`}>
      {children}
    </span>
  );
}
