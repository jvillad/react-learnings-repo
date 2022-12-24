import { useState } from "react";

export const Project = () => {
  const [project, setProject] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setProject((prev) => !prev);
        }}
      >
        {!project ? "Show Project" : "Hide"}
      </button>
      {project && <p>The Project</p>}
    </div>
  );
};
