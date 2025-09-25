import { useParams } from "react-router";
import Footer from "../components/Footer";
import HeroSectionVenue from "../components/HeroSectionVenue";
import VenueDetails from "../components/VenueDetails";
import { useSpaceDetails } from "../contexts/SpaceDetailsContext";
import { useScrollTop } from "../hooks/useScrollTop";
import ConfirmationModal from "../components/ConfirmationModal";

const VenueInfoPage = () => {
  useScrollTop();
  const { id } = useParams();
  const { data, loading } = useSpaceDetails();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  const spaceId = parseInt(id, 10);
  const details = data ? data.find((d) => d.id === spaceId) : null;

  if (!data) {
    return (
      <div className="h-screen flex justify-center items-center text-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  if (!details) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-7xl">Error 404</h2>
        <p className="text-2xl">Resource not found!</p>
      </div>
    );
  }

  return (
    <div>
      <ConfirmationModal />
      <HeroSectionVenue {...details} />
      <VenueDetails {...details} />
      <Footer />
    </div>
  );
};

export default VenueInfoPage;
