const HeroSectionHomePage = () => {
  return (
    <div>
      <div className="flex min-h-screen bg-stone-400 relative shadow-xl/20">
        <img
          className="absolute inset-0 w-full h-full object-cover z-10"
          src="https://cdn.sanity.io/images/4f3ey4m9/production/1063a41f6a6450d7b205bc646a8241afd6f28e50-3600x2400.jpg?auto=format&fit=max&q=75&w=1280"
        />
        <div className="absolute inset-0 m-auto bg-black/60 z-20"></div>
        <div className="relative z-30 flex flex-col min-h-screen">
          <div className="h-16">{/*Buffer for navbar*/}</div>
          <div className="flex flex-1 justify-center items-center text-center">
            <div>
              <h1 className="text-8xl m-5 md:mx-30 bebas-neue-regular text-stone-100">
                Discover the Perfect Workspace, Anywhere
              </h1>
              <p className="text-lg m-5 md:mx-30 font-normal text- text-stone-100 montserrat ">
                Connect with a wide network of premium co-working spaces from
                trusted providers. Compare, choose, and reserve the ideal
                environment for your productivity — all in one platform.
              </p>
              <div>
                <a href="#card-section">
                  <button className="mx-5 btn btn-lg lato-bold font-semibold bg-linear-to-r from-sky-500 to-blue-800 border-0 text-stone-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Explore Workspaces
                  </button>
                </a>
                <a href="#footer">
                  <button className="m-5 btn btn-lg btn-wide inset-shadow-sm inset-shadow-gray-400 lato-bold font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Partner With Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHomePage;
