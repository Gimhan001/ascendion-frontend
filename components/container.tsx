import { ContainerProps } from "@/lib/types";
import React from "react";


const Container = ({
  children,
}: ContainerProps) => {
  return <div className="container mx-auto px-4 max-w-7xl">{children}</div>;
};

export default Container;