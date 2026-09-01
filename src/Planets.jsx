// import "./Planets.css";

// function Planets(props) {
//   // const SinglePlanetName = props.ArrayOfPlanets.map((onePlanetName) => {
//   //   const PlanetName = onePlanetName["name"];
//   //   return PlanetName;
//   // });

//   const IndividualOrbit = props.ArrayOfPlanets.map((planet) => {
//     return (
//       <div key={planet.name}
//         className={planet.name + "Orbit"}
//         style={{width: planet.orbitSize,
//           height: planet.orbitSize,
//         }}
//         >
//         <p className={planet.name}>{planet.emoji}</p>
//         <div
//         className="PlanetMovement"
//         style={{
//           animationDuration: `${planet.orbitSpeed}s`,
//         }}
//       >
//         <p
//           className={planet.name}
//           style={{
//             fontSize: planet.planetSize,
//           }}
//         >
//           {planet.emoji}
//         </p>
//       </div>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <div className="Solar_System">
//         <div className="StillSun">
//           <p className="Sun"> ☀️ </p>
//         </div>

//         <div id="Orbit" className="PlanetoryOrbit">
//           {IndividualOrbit}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Planets;


import "./Planets.css";

function Planets(props) {
  const IndividualOrbit = props.ArrayOfPlanets.map((planet) => {
    return (
      <div
        key={planet.name}
        className={planet.name + "Orbit"}
        style={{
          width: planet.orbitSize,
          height: planet.orbitSize,
        }}
      >
        <div
          className="PlanetMovement"
          style={{
            animationDuration: `${planet.orbitSpeed}s`,
          }}
        >
          <p
            className={planet.name}
            style={{
              fontSize: `${planet.planetSize}px`,
            }}
          >
            {planet.emoji}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="Solar_System">
      <div className="StillSun">
        <p className="Sun">☀️</p>
      </div>

      <div className="OrbitContainer">
        {IndividualOrbit}
      </div>
    </div>
  );
}

export default Planets;
