import { Link } from "react-router";
import { useModal } from "../contexts/ModalContext";
import { useSpaceDetails } from "../contexts/SpaceDetailsContext";
import { useUser } from "../contexts/UserContext";

const ReservationEntry = ({ selectedID, date, slot, index }) => {
  const { data, loading } = useSpaceDetails();
  const { removeReservation } = useUser();
  const { showRemMod } = useModal();

  // Checks if JSON File is still being loaded in
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  // Checks if data is an array and not empty, if so, find matching data
  const details =
    Array.isArray(data) && data.length
      ? data.find((d) => d.id == selectedID)
      : undefined;

  // If data not loaded / no matching details, show a small fallback instead of crashing
  if (!details) {
    console.warn("ReservationEntry: no details for selectedID", selectedID, {
      data,
    });
    return (
      <div className="flex bg-base-200 w-full rounded-2xl h-40 m-5 shadow-lg items-center justify-between px-6">
        <div>
          <h3 className="text-lg">Details not available</h3>
          <p className="text-sm">
            This space's data isn't loaded or the ID couldn't be found.
          </p>
        </div>

        <div className="flex items-center">
          <button className="btn btn-error" onClick={() => showRemMod(index)}>
            Delete Reservation
          </button>
        </div>
      </div>
    );
  }

  // Safe to destructure now
  const { main_image, name, price, city } = details;
  const parsedDate = date ? new Date(date) : null;

  return (
    <div className="flex flex-col lg:flex-row bg-base-200 w-full rounded-2xl h:100 lg:h-40 m-5 shadow-lg justify-between">
      <div className="flex-2 h-full w-full">
        <Link to={`/space/${selectedID}`}>
          <button className="cursor-pointer h-full w-full">
            <img
              className="object-cover h-full w-full rounded-2xl"
              src={main_image}
            />
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row flex-6 w-full">
        <div className="flex lg:flex-row flex-4 [&>div]:my-2 [&>div]:mx-10">
          <div className="flex-2 flex flex-col justify-center">
            <h1 className="text-3xl my-1">{name}</h1>
            <div className="flex my-1.5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="mx-2">{city}</span>
            </div>
          </div>
          <div className="flex-2 flex flex-col justify-center">
            <h3 className="text-lg">Reservation Details:</h3>
            <div className="flex my-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mx-2">
                {parsedDate ? parsedDate.toLocaleDateString() : "No Date"}
              </span>
            </div>
            <div className="flex my-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                  clipRule="evenodd"
                />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
              </svg>
              <span className="mx-2">{slot}</span>
            </div>
            <div className="flex my-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
              </svg>
              <span className="mx-2">{`₱${price}`}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end items-center my-6 mx-10">
          <button className="btn btn-error" onClick={() => showRemMod(index)}>
            Delete Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationEntry;
