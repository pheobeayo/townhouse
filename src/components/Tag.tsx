import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface TagProp {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
}

function Tag({ children, className }: TagProp) {
  const classes = twMerge(
    "cursor-pointer py-2 px-3 bg-[#E6E6E6] rounded-[40px]",
    className
  );

  return <div className={classes}>{children}</div>;
}

export default Tag;
