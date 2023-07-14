import { FC, ReactNode } from "react";

const BarContainer: FC<BarHeaderProps> = ({ children }) => {
  return <div className="h-full w-full p-[.625rem] text-12 flex flex-col gap-3">{children}</div>;
};

export default BarContainer;

interface BarHeaderProps {
  children: ReactNode;
}
