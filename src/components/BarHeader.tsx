import { FC } from "react";

const BarHeader: FC<BarHeaderProps> = ({ text }) => {
  return <div className="w-full h-fit p-[.625rem] text-center text-lightText">{text}</div>;
};

export default BarHeader;

interface BarHeaderProps {
  text: string;
}
