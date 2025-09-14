import { Routes, Route, Link } from "react-router";
import HomePage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import VenueInfoPage from "./pages/VenueInfoPage";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <>
      <div className="">
        <nav>
          <Link to="/">Home</Link> | {"  "}
          <Link to="/dashboard/my-reservations">Dashboard</Link> | {"  "}
          <Link to="/venue-info">Venue Info</Link> | {"  "}
        </nav>
      </div>

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/my-reservations" element={<Dashboard />} />
        <Route path="/venue-info" element={<VenueInfoPage />} />
      </Routes>
    </>
  );
}
