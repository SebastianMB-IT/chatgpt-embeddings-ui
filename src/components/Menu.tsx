import { FC } from "react";

const Menu: FC = () => {
  return (
    <div className="flex">
      <div className="w-[3.125rem] h-vh px-[0.3125rem] py-2.5 flex-col justify-between items-center gap-2.5 inline-flex">
        <div className="relative">
          <img src="./logo.svg" className="w-10 h-10" />
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
            <img src="./sun-bright-light.svg" className="w-4 h-4" />
          </div>
          <div className="p-2.5 justify-start items-start gap-2.5 inline-flex">
            <img src="./arrows-maximize-light.svg" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div
        className="h-full"
        style={{ background: "#E7E7E7", width: "0.0625rem" }}
      ></div>
    </div>
  );
};

export default Menu;
