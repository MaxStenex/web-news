import React from "react";
import { loaderGif } from "../../assets";
import cn from "classnames";

type Props = {
  className?: string;
};

export const Loader: React.FC<Props> = ({ className }) => {
  return <img src={loaderGif} alt="Loading..." className={cn("loader", className)} />;
};
