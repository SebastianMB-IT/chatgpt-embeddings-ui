import { FC } from "react";
import BarHeader from "./BarHeader";
import BarContainer from "./BarContainer";
import { ListDataTypes } from "../types/list";
import List from "./List";

// const conversations: ListDataTypes = [
//   {
//     id: "conversation id 0",
//     title: "",
//     message: "content message 0",
//     time: "",
//   },
//   {
//     id: "conversation id 1",
//     title: "",
//     message: "content message 1",
//     time: "",
//   },
// ];

const conversations: ListDataTypes = [];

const RightBar: FC = () => {
  return (
    <BarContainer>
      <BarHeader text="Pinned Messages" />
      <List data={conversations} emptyMessage="Pin some messages!" />
    </BarContainer>
  );
};

export default RightBar;
