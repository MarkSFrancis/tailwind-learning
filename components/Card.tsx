import { ComponentProps, FC } from "react";
import { Box } from "./TailwindComponent";

export const Card: FC<ComponentProps<typeof Box>> = (props) => (
  <Box
    className="m-4 p-6 text-left text-inherit transition-colors no-underline border border-gray-100 max-w-xs hover:text-sky-500 focus:text-sky-500 active:text-sky-500 hover:border-sky-500 focus:border-sky-500 active:border-sky-500"
    {...props}
  />
);
