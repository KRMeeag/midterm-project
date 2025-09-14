import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

const VenueDetails = () => {
  const [selected, setSelected] = useState(null);
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="flex relative p-10">
      <img
        className="absolute inset-0 w-full h-full object-cover z-10"
        src="/photos/city-white-background.jpg"
      />
      <div className="relative flex-3 flex flex-col my-5 z-20">
        <div className="flex mx-5 my-5">
          <div className="flex-3 ">
            <h3 className="text-4xl mx-3 my-5">Working Space Details</h3>
            <p className="font-light mx-3 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              felis sem, lobortis ac pharetra ac, ultrices eu est. Cras
              tristique lectus quis vestibulum tincidunt.
            </p>
          </div>
          <div className="flex-2 bg-base-200 shadow-lg rounded-4xl">
            <h3 className="m-5 text-2xl">Amenities</h3>
            <p className="m-5">
              <ul className="font-light [&>li]:flex">
                <li>
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
                  <span>High-speed Wi-Fi</span>
                </li>
                <li>
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
                  <span>Free Coffee & Tea</span>
                </li>
                <li>
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
                  <span>Power Outlets at every seat</span>
                </li>
                <li>
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
                  <span>Air-conditioned</span>
                </li>
                <li>
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
                  <span>Printing Services</span>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-5">
          <h3 className=" text-4xl my-3">Image Gallery</h3>
          <div className="h-[50vh] my-3 aspect-16/9 rounded-4xl shadow-2xl">
            <img
              className="object-cover w-full h-full rounded-4xl"
              src="https://ctfassets.imgix.net/vh7r69kgcki3/3Fn7y0SnnHoMHG51sbqaAY/f12c68f62d7752647ab60a0931f6a52c/5P_WINDOW.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex z-20 my-10 mx-5 items-center align- h-fit shadow-2xl rounded-3xl bg-base-300">
        <div className="m-3 w-full flex flex-col">
          <h3 className="text-2xl mx-3 my-3">Book Now!</h3>
          <fieldset className="[&>div]:m-3">
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
                  selected={selected}
                  onSelect={setSelected}
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
                defaultValue="Choose Option"
                className="select w-full"
              >
                <option disabled={true}>Choose Option</option>
                <option>9 PM</option>
                <option>10 PM</option>
              </select>
            </div>
            <button className="btn bg-primary w-full my-3 text-white">
              Send Reservation
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
