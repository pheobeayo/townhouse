import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface PanelGroupProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

function PanelGroup({ children, className }: PanelGroupProps) {
  const classes = twMerge("grid lg:grid-cols-2 gap-x-14 gap-y-10", className);

  return <div className={classes}>{children}</div>;
}

export default PanelGroup;
