import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AboutMeContent from "./components/ContentPages/AboutMeContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutMeContent />} />
      </Routes>
    </Router>
  );
}

export default App;
