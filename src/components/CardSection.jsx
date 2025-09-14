import Card from "./Card";
import Search from "./Search";

const CardSection = () => {
  return (
    <>
      <div className="relative">
        <img
          className="absolute inset-0 w-full h-full object-cover z-10"
          src="/photos/city-white-background.jpg"
        />
        <div className="relative z-20">
          <Search />
          <div className="flex justify-center mx-10 py-10 lg:mx-20">
            <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
