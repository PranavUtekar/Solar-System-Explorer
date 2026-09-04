import "./Planets.css";
import { useState } from "react";

function Planets(props) {
  const [planetAnimation, setPlanetAnimation] = useState(true);
  const [planetCard, setPlanetCard] = useState(null);

  return (
    <div className="Solar_System">

      <div
        className="OuterOrbitArea"
        onMouseEnter={() => setPlanetAnimation(false)}
        onMouseLeave={() => setPlanetAnimation(true)}
      >

        <div className="OrbitContainer">

          {props.ArrayOfPlanets.map((planet) => (
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
                  animationPlayState: planetAnimation
                    ? "running"
                    : "paused",
                }}
              >

                <p
                  className={planet.name}
                  style={{
                    fontSize: `${planet.planetSize}px`,
                  }}
                  onClick={() => setPlanetCard(planet)}
                >
                  {planet.emoji}
                </p>

              </div>

            </div>
          ))}

        </div>

        <div className="StillSun">
          <p className="Sun">☀️</p>
        </div>

      </div>

      {planetCard && (
        <div className="Modal">

          <div className="Card">

            <button
              className="CloseButton"
              onClick={() => setPlanetCard(null)}
            >
              X
            </button>

            <h2>{planetCard.name}</h2>

            <p>
              Size: {planetCard.size}
            </p>

            <p>
              Distance: {planetCard.distance}
            </p>

            <p>
              {planetCard.about || "No information available yet."}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default Planets;