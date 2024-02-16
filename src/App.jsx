import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./pages/LandingPage";
import RestaurantsGallery from "./pages/ReastaurantsGallery";

const App = () => {
  return (
    // router. creates context for navigation. <NavLink> (navbar) need to bee inside of the router
    <Router>
      <NavigationBar />
      <div className="d-flex min-vh-100 w-full justify-content-center align-items-center">
        {/* the routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/restaurants" element={<RestaurantsGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
