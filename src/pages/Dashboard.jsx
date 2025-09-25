import ConfirmationModal from "../components/ConfirmationModal";
import Footer from "../components/Footer";
import ReservationList from "../components/ReservationList";
import { useScrollTop } from "../hooks/useScrollTop";

const Dashboard = () => {
  useScrollTop();
  return (
    <div>
        <ConfirmationModal />
        <div className="h-16"></div>
        <ReservationList />
        <Footer />
    </div>
  );
};

export default Dashboard;
