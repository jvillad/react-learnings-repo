import Draggable from "./Draggable";

export const Box = ({ hasItem }) => {
  return (
    <div className="flex w-[100px] h-[100px] justify-center align-middle">
      {hasItem && <Draggable />}
    </div>
  );
};
