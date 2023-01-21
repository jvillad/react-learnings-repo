import { useEffect, useState } from 'react';

function App() {
  const [theData, setTheData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.guildwars2.com/v2/items`);
      const data = await response.json();
      if (data) {
        setTheData(data);
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button type="button" onClick={fetchItems}>
        Click me
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {theData && <p>{theData}</p>}
    </div>
  );
}

export default App;
