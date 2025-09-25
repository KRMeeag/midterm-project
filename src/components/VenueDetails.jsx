import { useEffect, useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { useUser } from "../contexts/UserContext";
import { useModal } from "../contexts/ModalContext";

const VenueDetails = ({ id, images, description, amenities, time_slots }) => {
  const [selected, setSelected] = useState({
    selectedID: id,
    date: undefined,
    slot: "",
  });
  const [isCompleteDetails, setIsCompleteDetails] = useState(false);
  const [isSuccessfulRes, setIsSuccessfulRes] = useState(false);
  const { addReservation, isLoggedIn } = useUser();
  const { setIsLogInActive } = useModal();
  const defaultClassNames = getDefaultClassNames();

  // If user manages to encode all needed details for reservation, then the data is deemed as complete
  useEffect(() => {
    if (selected.date !== undefined && selected.slot !== "") {
      setIsCompleteDetails(true);
    }
  }, [selected]);

  // Handles time slot/passes inputs
  function handleSlotChange(event) {
    const val = event.target.value;
    setSelected((prev) => ({ ...prev, slot: val }));
    setIsSuccessfulRes(false);
  }

  // Handles date selection
  function handleDateChange(dateVal) {
    setSelected((prev) => ({ ...prev, date: dateVal }));
    setIsSuccessfulRes(false);
  }

  // Resets selection
  function clearDetails() {
    setSelected((prev) => ({ ...prev, date: undefined, slot: "" }));
    setIsCompleteDetails(false);
    console.log("Cleared selection");
  }

  // Makes sure that previous details will not transfer over to anoter part of the site
  useEffect(() => {
    clearDetails();
  }, []);

  // If details are complete and user logs in, reflect changes in UserContext, otherwise send Log-In Modal
  function recordDetails() {
    if (isCompleteDetails && isLoggedIn) {
      addReservation(selected);
      clearDetails();
      setIsSuccessfulRes(true);
    } else {
      setIsLogInActive(true);
      clearDetails();
    }
  }

  return (
    <div className="flex flex-col lg:flex-row relative p-10">
      <img
        className="absolute inset-0 w-full h-full object-cover z-10"
        src="/photos/city-white-background.jpg"
      />
      <div className="relative flex flex-6 flex-col my-5 z-20">
        <div className="flex mx-5 my-5">
          <div className="flex-3 ">
            <h3 className="text-4xl mx-3 my-5">Working Space Details</h3>
            <p className="font-light mx-3 my-5">{description}</p>
          </div>
          <div className="flex flex-col flex-2 bg-base-200 shadow-lg rounded-4xl justify-center">
            <h3 className="m-5 text-2xl">Amenities</h3>
            <p className="m-5">
              <ul className="font-light [&>li]:flex">
                {amenities.map((amenity, index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-5">
          <h3 className=" text-4xl my-3">Image Gallery</h3>
          {images.map((image, index) => (
            <div key={index} className="h-[50vh] my-3 rounded-4xl shadow-2xl">
              <img
                className="object-cover aspect-16/9 w-full h-full rounded-4xl"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex z-20 my-10 mx-5 items-center align- h-fit shadow-2xl rounded-3xl bg-base-300">
        <form className="m-3 w-full flex flex-col">
          <h3 className="text-2xl mx-3 my-2">Book Now!</h3>
          {(selected.date !== undefined) ^ (selected.slot !== "") ? (
            <div role="alert" className="alert alert-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Warning: Choose both a date and time slot/pass!</span>
            </div>
          ) : null}
          {isCompleteDetails && !isLoggedIn ? (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! You need to be logged in to reserve an entry!</span>
            </div>
          ) : null}
          {isSuccessfulRes ? (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your booking has been confirmed!</span>
            </div>
          ) : null}

          <fieldset className="[&>div]:mx-3 my-2">
            <div>
              <h5>Choose the date of your reservation:</h5>
              <div className="flex w-full justify-center">
                <DayPicker
                  animate
                  classNames={{
                    today: `bg-black/5 rounded-full`,
                    selected: `bg-primary border-primary rounded-full text-white shadow-lg`,
                  }}
                  navLayout="around"
                  mode="single"
                  disabled={{ before: new Date() }}
                  selected={selected.date}
                  onSelect={handleDateChange}
                  // footer={
                  //   selected
                  //     ? `Selected: ${selected.toLocaleDateString()}`
                  //     : "Pick a day."
                  // }
                />
              </div>
            </div>
            <div>
              <h5 className="my-1.5">Choose the time slot:</h5>
              <select
                className="select w-full"
                value={selected.slot}
                onChange={handleSlotChange}
              >
                <option disabled={true} value={""}>
                  Choose Option
                </option>
                {time_slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex [&>*]:flex-1 [&>*]:mx-1 ">
              <button
                disabled={!isCompleteDetails || !isLoggedIn}
                className="btn bg-primary w-full my-3 text-white text-xs shadow-lg/10 border-0"
                onClick={recordDetails}
              >
                Send Reservation
              </button>
              <button
                className="btn btn-error w-full my-3 text-white text-xs"
                onClick={clearDetails}
              >
                Reset Details
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default VenueDetails;
