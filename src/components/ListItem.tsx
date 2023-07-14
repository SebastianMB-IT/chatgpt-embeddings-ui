import { FC } from "react";

const ListItem: FC<ListItemProps> = ({ content }) => {
  return <div className="p-[.625rem] bg-lightGrayBackground text-lightText">{content}</div>;
};

export default ListItem;

interface ListItemProps {
  content: string;
}
