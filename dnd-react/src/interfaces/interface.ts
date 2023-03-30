/* eslint-disable no-unused-vars */
export type Status = "S" | "A" | "B";

export const resortTypes: Status[] = ["S", "A", "B"];

export interface IData {
  id: number;
  content: string;
  status: Status;
}

export interface IProps {
  status: Status;
}

export interface ItemProps {
  data: IData;
  handleDragging: (dragging: boolean) => void;
}

export interface CardContainerProps {
  items: IData[];
  status: Status;
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: Status) => void;
}
