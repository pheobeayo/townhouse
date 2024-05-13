import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface PanelProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

function Panel({ children, className }: PanelProps) {
  const classes = twMerge("border py-7 px-8 rounded-3xl", className);

  return <div className={classes}>{children}</div>;
}

export default Panel;
