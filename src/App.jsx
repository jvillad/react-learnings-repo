import "./App.css";
import Users from "./User";

function App() {
  const planets = [
    {
      name: "Mars",
      isGasPlanet: false,
    },
    {
      name: "Earth",
      isGasPlanet: false,
    },
    {
      name: "Jupiter",
      isGasPlanet: true,
    },
    {
      name: "Venus",
      isGasPlanet: false,
    },
    {
      name: "Neptune",
      isGasPlanet: true,
    },
    {
      name: "Uranus",
      isGasPlanet: true,
    },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        return (
          <Users
            key={key}
            planetName={planet.name}
            planetType={planet.isGasPlanet}
          />
        );
      })}
    </div>
  );
}

export default App;
