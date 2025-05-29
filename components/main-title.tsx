import React from "react";
import { HeadingProps } from "@/lib/types";

export const Heading = ({
  color,
  size = "sm",
  title,
  letter,
  fontSize,
}: HeadingProps) => {
  const sizeClass =
    size === "sm"
      ? "text-xs lg:text-sm"
      : size === "lg"
      ? "text-sm lg:text-lg"
      : size === "xl"
      ? "text-xl"
      : size === "2xl"
      ? "text-2xl lg:text-2xl"
      : size === "3xl"
      ? "text-3xl lg:text-3xl"
      : size === "4xl"
      ? "text-3xl lg:text-4xl"
      : size === "5xl"
      ? "text-3xl lg:text-5xl"
      : size === "6xl"
      ? "text-3xl lg:text-6xl"
      : "text-base";

  return (
    <h1
      className={`tracking-normal ${letter} ${fontSize} ${sizeClass} ${color}`}
    >
      {title}
    </h1>
  );
}
