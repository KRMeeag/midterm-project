const Search = () => {
  return (
    <div className=" mx-20 py-10 flex justify-center ">
      <fieldset className="fieldset flex flex-col md:flex-row w-full shadow-lg justify-evenly bg-base-200 border-base-300 rounded-4xl border p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="m-2">
            <label className="label">
              Search Place{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <input
              type="text"
              className="input w-full"
              placeholder="Search Place"
            />
          </div>
          <div className="m-2">
            <label className="label">
              Location{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <select defaultValue="Pick a location" className="select w-full">
              <option disabled={true}>Pick a location</option>
              <option>BGC</option>
              <option>Makati</option>
              <option>Rockwell</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="m-2">
            <label className="label">
              Type of Reservation{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <select
              defaultValue="Pick Reservation Type"
              className="select w-full"
            >
              <option disabled={true}>Pick Reservation Type</option>
              <option>By Time Slots</option>
              <option>By Passes</option>
            </select>
          </div>
          <div className="flex flex-col m-2">
            <label className="label">
              Min and Max Price{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm9 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11.5 6A.75.75 0 1 1 13 6a.75.75 0 0 1-1.5 0Z"
                  clipRule="evenodd"
                />
                <path d="M13 11.75a.75.75 0 0 0-1.5 0v.179c0 .15-.138.28-.306.255A65.277 65.277 0 0 0 1.75 11.5a.75.75 0 0 0 0 1.5c3.135 0 6.215.228 9.227.668A1.764 1.764 0 0 0 13 11.928v-.178Z" />
              </svg>
            </label>
            <div className="join w-full">
              <input
                type="number"
                className="input join-item w-full"
                placeholder="Minimum"
              />
              <input
                type="number"
                className="input join-item w-full"
                placeholder="Maximum"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center m-5 lg:my-0">
          <button className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              />
            </svg>
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default Search;
