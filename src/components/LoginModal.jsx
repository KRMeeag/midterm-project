import { useEffect, useState } from "react";
import { useModal } from "../contexts/ModalContext";
import { useUser } from "../contexts/UserContext";

const LoginModal = () => {
  const { isLogInActive, setIsLogInActive } = useModal();
  const { authLog } = useUser();
  const [fieldDetails, setFieldDetails] = useState({
    email: "",
    password: "",
  });
  const [validSubmit, setValidSubmit] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [errorVal, setErrorVal] = useState("");

  useEffect(() => {
    if (
      fieldDetails.email !== "" &&
      fieldDetails.password !== "" 
    ) {
      setValidSubmit(true);
    } else {
      setValidSubmit(false);
    }
  }, [fieldDetails]);

  // Logs the user in via the User Context and Disables Modal
  const logIn = () => {
    if (!validSubmit) {
      setShowErrors(true);
      return;
    }

    const authReturnVal = authLog(fieldDetails);

    if (authReturnVal === 1) {
      setErrorVal("Account not Found");
      setShowErrors(true);
      return;
    }

    if (authReturnVal === 2) {
      setErrorVal("Incorrect Password");
      setShowErrors(true);
      return;
    }

    setShowErrors(false);
    setErrorVal("");
    setValidSubmit(false);
    setIsLogInActive(false);
  };

  function receiveInput(key) {
    return function (event) {
      setShowErrors(false);
      setErrorVal("");
      setFieldDetails((prev) => ({ ...prev, [key]: event.target.value }));
    };
  }

  return (
    <dialog className="modal" open={isLogInActive}>
      <div className="modal-box relative rounded-4xl">
        <img
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-5"
          src="https://t4.ftcdn.net/jpg/05/91/57/95/360_F_591579529_xfh685w0mC350OTkKp9U1tc47lxbGlqr.jpg"
        />
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setIsLogInActive(false)}
          >
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center text-center">
          <div className="w-100 items-center"></div>
          <div className="flex flex-col h-full justify-between m-10 p-8 rounded-4xl bg-linear-to-r from-sky-500 to-sky-700 shadow-xl/30">
            <fieldset className="fieldset rounded-box w-xs p-4">
              <h3 className="font-bold text-3xl text-stone-200">Log-In</h3>

              <label className="label font-bold text-stone-200">Email</label>
              <input
                type="email"
                className="input validator"
                pattern="^[^@]+@[^@]+\.[^@]{2,}$"
                placeholder="Email"
                value={fieldDetails.email}
                onChange={receiveInput("email")}
                required
              />

              <label className="label font-bold text-stone-200 mt-3">
                Password
              </label>
              <input
                type="password"
                className="input validator"
                placeholder="Password"
                value={fieldDetails.password}
                onChange={receiveInput("password")}
                required
              />

              <button className="btn bg-stone-200 hover:bg-stone-300 mt-4" onClick={logIn}>
                Log-in Account
              </button>
            </fieldset>
          </div>
        </div>
        {showErrors && !validSubmit ? (
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
            <span>Warning: Make sure to type both your email and password!</span>
          </div>
        ) : null}
        {showErrors && errorVal !== "" ? (
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
            <span>{`Error! ${errorVal}`}</span>
          </div>
        ) : null}
      </div>
    </dialog>
  );
};

export default LoginModal;
