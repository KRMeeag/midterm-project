import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const isDashBoard = location.pathname.startsWith("/dashboard");

  const [scrolled, setScrolled] = useState(() => {
    if (isDashBoard) return true;

    return window.scrollY > 50;
  });

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
        <a className="btn btn-ghost hover:bg-white/5 hover:border-0">
          <img src="/logos/sk_white.png" className="w-10" />
          <span className="text-4xl text-stone-100 mx-1.5 mt-1 league-spartan-logo">
            SynKen
          </span>
        </a>
      </div>
      <div className={`-z-10 ${isDashBoard ? "absolute" : "hidden"} inset-0 bg-[#4185ad]`}></div>

      <div className="navbar-end mr-5 md:mr-20">
        <div className="flex">
          <div
            tabIndex={0}
            role="button"
            className="hidden md:flex btn btn-ghost mx-1 text-stone-100 hover:bg-white/5 hover:border-0"
          >
            <div className="indicator">
              <div className="mx-1.5">
                <span className="text-base font-medium montserrat">
                  {" "}
                  Dashboard{" "}
                </span>
              </div>
              <div className="my-auto">
                <span className="badge badge-md indicator-item bg-">3</span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end mx-1">
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
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
