import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import VenueInfoPage from "./pages/VenueInfoPage";
import Navbar from "./components/Navbar";
import { useUser } from "./contexts/UserContext";
import ConfirmationModal from "./components/ConfirmationModal";
import { useModal } from "./contexts/ModalContext";
import CatchLogin from "./components/CatchLogIn";
import LoginModal from "./components/LoginModal";

export default function App() {
  const { isLoggedIn } = useUser();
  const { isLogInActive } = useModal();

  return (
    <>
      {isLogInActive && <LoginModal />}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard/my-reservations"
          element={isLoggedIn ? <Dashboard /> : <CatchLogin to="/" />}
        />
        <Route path="/space/:id" element={<VenueInfoPage />} />
        <Route path="/space" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
