import { useSpaceDetails } from "../contexts/SpaceDetailsContext";
import Card from "./Card";
import Search from "./Search";

const CardSection = () => {
  const { filterData: details, loading } = useSpaceDetails();

  // Checks if JSON File is still being loaded in
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <>
      <div className="relative scroll-mt-15" id="card-section">
        <img
          className="absolute inset-0 w-full h-full object-cover z-10"
          src="/photos/city-white-background.jpg"
        />
        <div className="relative z-20">
          <Search />
          <div className="flex justify-center mx-10 py-10 lg:mx-20">
            <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {details.map((detail) => (
                <Card key={detail.id} {...detail} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
