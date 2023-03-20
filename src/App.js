import "./App.css";

import NavBar from "./components/NavBar/NavBar";

import Cards from "./components/Cards/Cards";

import GTA from "./components/Cards/assets/gta5.webp";

import SD from "./components/Cards/assets/SD.jpg";

import WDL from "./components/Cards/assets/WDL.jpg";

import O2 from "./components/Cards/assets/O2.png";

import RE4 from "./components/Cards/assets/RD4.webp";

import DL from "./components/Cards/assets/DL.jpg";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="games-section">
        <Cards
          image={GTA}
          name="Grand Theft Auto V"
          year="2013"
          pegi="18"
          platform="PS3|PS4|PS5 - XBOX 360|XBOX ONE|XBOX SERIES - PC"
        />

        <Cards
          image={WDL}
          name="Watch Dogs Legion"
          year="2020"
          pegi="18"
          platform="PS4|PS5 - XBOX ONE|XBOX SERIES - PC"
        />

        <Cards
          image={SD}
          name="Sleeping Dogs"
          year="2012"
          pegi="18"
          platform="PS3 - XBOX 360 - PC"
        />

        <Cards
          image={RE4}
          name="Resident Evil 4 Remake"
          year="2023"
          pegi="18"
          platform="PS4|PS5 - XBOX SERIES - PC"
        />

        <Cards
          image={O2}
          name="Outlast 2"
          year="2017"
          pegi="18"
          platform="PS4 - XBOX ONE - PC - NINTENDO SWITCH"
        />

        <Cards
          image={DL}
          name="Dying Light"
          year="2015"
          pegi="12"
          platform="PS4 - XBOX ONE - PC"
        />
      </div>
    </div>
  );
}

export default App;
