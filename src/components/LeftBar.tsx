import { FC } from "react";
import BarHeader from "./BarHeader";
import BarContainer from "./BarContainer";
import List from "./List";
import { ListDataTypes } from "../types/list";

const conversations: ListDataTypes = [
  {
    id: "conversation id 0",
    title: "",
    message: "content message",
    time: "",
  },
  {
    id: "conversation id 1",
    title: "",
    message: "content message",
    time: "",
  },
];

const LeftBar: FC = () => {
  return (
    <BarContainer>
      <BarHeader text="Conversations" />
      {/* New conversation action */}
      <div className="w-full h-fit p-[.625rem] flex justify-center items-center gap-[.625rem] border border-lightBorder cursor-pointer hover:bg-gray-100 transition-colors text-lightText text-12">
        <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_802_599)">
            <path
              d="M5.875 1.5C5.875 1.29375 5.70625 1.125 5.5 1.125C5.29375 1.125 5.125 1.29375 5.125 1.5V5.625H1C0.79375 5.625 0.625 5.79375 0.625 6C0.625 6.20625 0.79375 6.375 1 6.375H5.125V10.5C5.125 10.7063 5.29375 10.875 5.5 10.875C5.70625 10.875 5.875 10.7063 5.875 10.5V6.375H10C10.2063 6.375 10.375 6.20625 10.375 6C10.375 5.79375 10.2063 5.625 10 5.625H5.875V1.5Z"
              fill="#444444"
            />
          </g>
          <defs>
            <clipPath id="clip0_802_599">
              <rect
                width="10.5"
                height="12"
                fill="white"
                transform="translate(0.25)"
              />
            </clipPath>
          </defs>
        </svg>
        <span>New Conversation</span>
      </div>
      <List data={conversations} />
    </BarContainer>
  );
};

export default LeftBar;
