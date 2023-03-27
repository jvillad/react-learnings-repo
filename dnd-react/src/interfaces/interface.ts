export type Status = "good" | "bad" | "normal";

export interface IData {
  id: number;
  content: string;
  status: Status;
}

export interface IProps {
  status: Status;
}
