import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className="w-screen h-screen grid grid-cols-mainLarge">{children}</div>;
};

export default Layout;
