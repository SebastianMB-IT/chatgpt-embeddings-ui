import { FC } from "react";
import ListItem from "./ListItem";
import type { ListItemTypes, ListDataTypes } from "../types/list";

const List: FC<ListProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item: ListItemTypes) => (
        <ListItem content={item.title || item.message} />
      ))}
    </div>
  );
};

export default List;

export interface ListProps {
  data: ListDataTypes;
}
