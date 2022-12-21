import { useQuery } from "@tanstack/react-query";
import fetchCatFact from "./fetchCatFact";

const App = () => {
  const results = useQuery(["cat"], fetchCatFact);
  if (results.isLoading) {
    return <div>Loading..</div>;
  }

  const refetchCatFact = () => {
    results.refetch();
  };

  return (
    <div className="App">
      <button onClick={refetchCatFact}>Update Cat Fact</button>
      <p>{results.data.fact}</p>
    </div>
  );
};

export default App;
