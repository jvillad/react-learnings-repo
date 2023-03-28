export type Status = " S" | " A" | " B";

export const resortTypes: Status[] = [" S", " A", " B"];

export interface IData {
  id: number;
  content: string;
  status: Status;
}

export interface IProps {
  status: Status;
}
