import { CardContainerProps } from "../interfaces/interface";
import { Card } from "./Card";

export const CardContainer = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: CardContainerProps) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = +e.dataTransfer.getData("text");
    handleUpdateList(id, status);
    handleDragging(false);
  };
  return (
    <div
      className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>Tier {status}</p>
      {items.map(
        (item) =>
          status === item.status && (
            <Card data={item} key={item.id} handleDragging={handleDragging} />
          )
      )}
    </div>
  );
};
