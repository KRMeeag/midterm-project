import ReservationEntry from "./ReservationEntry"

const ReservationList = () => {
  return (
    <div className="min-h-[75vh] relative">
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/photos/city-white-background.jpg"
      />
      <div className="relative flex w-full z-10">
        <div className="flex flex-col [&>*]:mx-10 mx-25 my-15 bg-base-100 h-full w-full min-h-[75vh] rounded-4xl shadow-2xl">
          <div className="flex justify-between mt-10 mb-3 items-center">
            <h1 className="text-6xl">Reservations</h1>
            <p className="font-medium">Welcome to your dashboard, User #1</p>
          </div>
          <hr />
          {/* If there are no Co-Working Spaces */}
          <div className="hidden flex-col mt-10 mb-3 items-center justify-center min-h-[45vh]">
            <h3 className="text-6xl m-2.5">No Reservations!</h3>
            <p className="font-medium m-2.5">
              Check our many co-working spaces in the home page!
            </p>
          </div>
          {/* If there are Co-Working Spaces */}
          <div className="flex flex-col items-center my-3">
            <ReservationEntry />
            <ReservationEntry />
            <ReservationEntry />
            <ReservationEntry />
            <ReservationEntry />
            <ReservationEntry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationList;
