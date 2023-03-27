import { IProps } from "../interfaces/interface";

export const CardContainer = ({ status }: IProps) => {
  return (
    <div className="layout-cards">
      <p>{status} hero</p>
    </div>
  );
};
