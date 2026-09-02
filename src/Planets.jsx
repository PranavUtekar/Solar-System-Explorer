import "./Planets.css";
import { useState } from "react";

function Planets(props) {

  const [planetAnimation, setPlanetAnimation] = useState(true)
  // function isPaused = ()=>{
  //   if (planetAnimation) {
  //     setPlanetAnimation(false);
  //   }
  // }
  
  // function isRunning =()=> {
  //   if(!planetAnimation){
  //     setPlanetAnimation(true)
  //   }
  // }

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
          onMouseEnter={() => setPlanetAnimation(false)}
          onMouseLeave={() => setPlanetAnimation(true)}
          style={{
            animationDuration: `${planet.orbitSpeed}s`,
            animationPlayState: planetAnimation? "running" : "paused"
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
