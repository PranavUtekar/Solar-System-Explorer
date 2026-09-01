import Planet from './Planets.jsx' ;
import './App.css';
function App(){

const planetsArray = [
  {
    name: "Mercury",
    emoji: "🌑",
    size: "4,879 km diameter",
    distance: "57.9 million km from Sun",
    about: "",
    orbitSize: 70,
    orbitSpeed: 8,
    planetSize: 20,
    rotationSpeed: 5
  },
  {
    name: "Venus",
    emoji: "🟠",
    size: "12,104 km diameter",
    distance: "108.2 million km from Sun",
    about: "",
    orbitSize: 120,
    orbitSpeed: 12,
    planetSize: 25,
    rotationSpeed: 7
  },
  {
    name: "Earth",
    emoji: "🌍",
    size: "12,742 km diameter",
    distance: "149.6 million km from Sun",
    about: "",
    orbitSize: 170,
    orbitSpeed: 16,
    planetSize: 27,
    rotationSpeed: 3
  },
  {
    name: "Mars",
    emoji: "🔴",
    size: "6,779 km diameter",
    distance: "227.9 million km from Sun",
    about: "",
    orbitSize: 220,
    orbitSpeed: 20,
    planetSize: 23,
    rotationSpeed: 4
  },
  {
    name: "Jupiter",
    emoji: "🟠",
    size: "139,820 km diameter",
    distance: "778.5 million km from Sun",
    about: "",
    orbitSize: 270,
    orbitSpeed: 28,
    planetSize: 55,
    rotationSpeed: 2
  },
  {
    name: "Saturn",
    emoji: "🪐",
    size: "116,460 km diameter",
    distance: "1.43 billion km from Sun",
    about: "",
    orbitSize: 320,
    orbitSpeed: 36,
    planetSize: 48,
    rotationSpeed: 2
  },
  {
    name: "Uranus",
    emoji: "🔵",
    size: "50,724 km diameter",
    distance: "2.87 billion km from Sun",
    about: "",
    orbitSize: 370,
    orbitSpeed: 44,
    planetSize: 38,
    rotationSpeed: 3
  },
  {
    name: "Neptune",
    emoji: "🔵",
    size: "49,244 km diameter",
    distance: "4.50 billion km from Sun",
    about: "",
    orbitSize: 420,
    orbitSpeed: 52,
    planetSize: 37,
    rotationSpeed: 3
  },
  {
    name: "Pluto",
    emoji: "🪐",
    size: "2,377 km diameter",
    distance: "5.91 billion km from Sun",
    about: "",
    orbitSize: 470,
    orbitSpeed: 60,
    planetSize: 18,
    rotationSpeed: 5
  }
];


  return(
    <div className='App'>

      <div key={'navbar'} id='home_navbar'>
        <nav className='home_bar'>
        <h1 className='home_heading'>Cosmos</h1>
        <button className='favourite_button'>Favourites</button>
        </nav>
      </div>

      <div key={'main_body'} id='main_body'>
        <Planet ArrayOfPlanets = {planetsArray} />
      </div>

      <div key={'buttons'} id='feature_buttons'>     
        <button>Planet Images</button>
      </div>
      

    </div>
  );
}


export default App;