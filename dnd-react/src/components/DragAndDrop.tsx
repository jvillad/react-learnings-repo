import { resortTypes } from "../interfaces/interface";
import { CardContainer } from "./CardContainer";

export const DragAndDrop = () => {
  return (
    <div className="grid">
      {resortTypes.map((container) => (
        <CardContainer key={container} status={container} />
      ))}
    </div>
  );
};
