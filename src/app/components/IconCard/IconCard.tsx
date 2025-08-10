// components/IconCard.tsx
"use client";
import React from "react";

type IconCardProps = {
  label: string;
  children: React.ReactNode;
};

export const IconCard: React.FC<IconCardProps> = ({ label, children }) => {
  return (
    <li
      role="listitem"
      aria-label={label}
      className="px-6 py-3 rounded-xl shadow-2xl transition-transform transform hover:scale-105 flex items-center justify-center"
    >
      {children}
    </li>
  );
};
