import "./App.css";
import BioSection from "../components/bioSection.component";
import NavBar from "../components/navBar-component";
import SocialSection from "../components/SocialSection.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SocialSection />
      <BioSection />
    </div>
  );
}

export default App;
