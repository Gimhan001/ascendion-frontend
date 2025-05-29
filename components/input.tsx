"use client";

import React from "react";

export const Input = () => {
  return (
    <input
      type="text"
      placeholder="Search documentation..."
      className="border rounded-lg py-1 px-6 w-48 md:w-xs text-start focus:outline-none focus:ring-2 focus:ring-amber-500"
    />
  );
};
