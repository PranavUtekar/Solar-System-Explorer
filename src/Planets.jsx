import "./Planets.css";

function Planets(props) {
  // const SinglePlanetName = props.ArrayOfPlanets.map((onePlanetName) => {
  //   const PlanetName = onePlanetName["name"];
  //   return PlanetName;
  // });

  const IndividualOrbit = props.ArrayOfPlanets.map((planet) => {
    return (
      <div key={planet.name} className={planet.name + "Orbit"}>
        <p className={planet.name}>{planet.emoji}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="Solar_System">
        <div className="StillSun">
          <p className="Sun"> ☀️ </p>
        </div>

        <div id="Orbit" className="PlanetoryOrbit">
          {IndividualOrbit}
        </div>
      </div>
    </div>
  );
}

export default Planets;
