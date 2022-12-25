import { useToggle } from "../reusableHook/useToggle";
import useCounter from "../reusableHook/useCounter";

export const LearningSection = () => {
  // custom hook to toggle
  const [show, toggle] = useToggle();
  const { count, increase, decrease, reset } = useCounter(0);

  return (
    <div>
      <h1>Toggling</h1>
      <button onClick={toggle}>{!show ? "Show Project" : "Hide"}</button>
      {show && <h1>The Project</h1>}
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
