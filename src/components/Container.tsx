import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProp {
  children: ReactElement | ReactElement[];
  className?: string;
}

function Container({ children, className }: ContainerProp) {
  const classes = twMerge("max-w-screen-2xl mx-auto", className);

  return <div className={classes}>{children}</div>;
}

export default Container;
