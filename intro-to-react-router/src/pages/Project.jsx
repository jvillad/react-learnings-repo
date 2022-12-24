import { useToggle } from "../useToggle";

export const Project = () => {
  const [show, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>{!show ? "Show Project" : "Hide"}</button>
      {show && <h1>The Project</h1>}
    </div>
  );
};
