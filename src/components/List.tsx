import { FC } from "react";
import ListItem from "./ListItem";
import type { ListItemTypes, ListDataTypes } from "../types/list";

const List: FC<ListProps> = ({ data, emptyMessage }) => {
  return (
    <div className="flex flex-col gap-3">
      {
        data.length > 0 ? (
          data.map((item: ListItemTypes, i) => (
            <ListItem key={i} content={item.title || item.message} />
          ))
        ) : (
          <div className="font-medium text-center">
            <ListItem content={emptyMessage} />
          </div>
        )
      }
    </div>
  );
};

export default List;

export interface ListProps {
  data: ListDataTypes;
  emptyMessage: string;
}
