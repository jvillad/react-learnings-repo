import { useState } from "react";
import { dataSeed } from "../assets/Seed";
import { IData, resortTypes, Status } from "../interfaces/interface";
import { CardContainer } from "./CardContainer";

export const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [itemsList, setItemsList] = useState<IData[]>(dataSeed);
  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, status: Status) => {
    const card = itemsList.find((item) => item.id === id);
    if (card && card.status !== status) {
      card.status = status;
      setItemsList((prevItem) => [
        card!,
        ...prevItem.filter((item) => item.id !== id),
      ]);
    }
  };
  return (
    <div className="grid">
      {resortTypes.map((container) => (
        <CardContainer
          key={container}
          status={container}
          items={itemsList}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
