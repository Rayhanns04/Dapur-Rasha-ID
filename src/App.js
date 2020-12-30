import Images from "./constants/Images";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <LandingPage slides={Images} />
    </div>
  );
}

export default App;
