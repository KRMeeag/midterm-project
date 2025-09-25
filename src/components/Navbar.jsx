import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useUser } from "../contexts/UserContext";
import { useModal } from "../contexts/ModalContext";

const Navbar = () => {
  const { isLoggedIn, logout, newReserveCtr, setNewReserveCtr } = useUser();
  const { setIsLogInActive } = useModal();

  const location = useLocation();
  const isDashBoard = location.pathname.startsWith("/dashboard");

  // Checks if Dashboard First, then sets Boolean if Window is on Top of Screen
  const [scrolled, setScrolled] = useState(() => {
    if (isDashBoard) return true;
    return window.scrollY > 50;
  });

  // Removes Transparency if Dashboard, else checks for scroll to make navbar transparent
  useEffect(() => {
    if (isDashBoard) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <div
      className={`navbar fixed z-40 ${
        scrolled ? "bg-primary/60 backdrop-blur-xs" : "bg-transparent"
      } transition-colors duration-500 ease-in-out`}
    >
      <div className="navbar-start ml-5 md:ml-20">
        <Link to="/">
          <a className="btn btn-ghost hover:bg-white/5 hover:border-0">
            <img src="/logos/sph_white.png" className="h-full w-full" />
            <span className="text-4xl text-stone-100 mx-1.5 mt-1 league-spartan-logo">
              StudySpotPH
            </span>
          </a>
        </Link>
      </div>
      <div
        className={`-z-10 ${
          isDashBoard ? "absolute" : "hidden"
        } inset-0 bg-[#4185ad]`}
      ></div>

      <div className="navbar-end mr-5 md:mr-20">
        <div className="flex">
          <Link to={"/"}>
            <div
              tabIndex={0}
              role="button"
              className="hidden md:flex btn btn-ghost text-stone-100 hover:bg-white/5 hover:border-0"
            >
              <div className="indicator">
                <div className="mx-1">
                  <span className="text-base font-medium montserrat">Home</span>
                </div>
              </div>
            </div>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to={"/dashboard/my-reservations"}>
                <div
                  tabIndex={0}
                  role="button"
                  className="hidden md:flex btn btn-ghost mx-1 text-stone-100 hover:bg-white/5 hover:border-0"
                  onClick={() => setNewReserveCtr(0)}
                >
                  <div className="indicator">
                    <div className="mx-1.5">
                      <span className="text-base font-medium montserrat">
                        Dashboard
                      </span>
                    </div>
                    {newReserveCtr !== 0 ? (
                      <div className="my-auto">
                        <span className="badge badge-md indicator-item badge-error">
                          {newReserveCtr}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Link>
              <div className="dropdown dropdown-end mx-1.5">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn p-0 border-1 border-accent-content inset-shadow-sm inset-shadow-gray-500"
                >
                  <span className="text-base mx-3 font-normal montserrat">
                    User #1
                  </span>
                  <div className="avatar">
                    <div className="w-9 mask mask-squircle">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                      />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <Link to={"/"}>
                    <li className="md:hidden">
                      <a>Home</a>
                    </li>
                  </Link>
                  <Link to={"/dashboard/my-reservations"}>
                    <li className="md:hidden">
                      <a
                        className="justify-between"
                        onClick={() => setNewReserveCtr(0)}
                      >
                        Dashboard{" "}
                        {newReserveCtr !== 0 ? (
                          <span className="badge badge-error">New</span>
                        ) : null}
                      </a>
                    </li>
                  </Link>
                  <li onClick={logout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div
              tabIndex={0}
              role="button"
              className="btn p-0 border-1 border-accent-content inset-shadow-sm inset-shadow-gray-500"
              onClick={() => setIsLogInActive(true)}
            >
              <div>
                <span className="text-base ml-3 font-normal montserrat">
                  Log-In
                </span>
              </div>
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
