import { useEffect, useState } from "react";

const Footer = () => {
  const [validSubmit, setValidSubmit] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const emailRegex = /^[^@]+@[^@]+\.[^@]{2,}$/;

  // Handles checking if all entries are gone and email follow format
  useEffect(() => {
    if (
      details.email !== "" &&
      details.subject !== "" &&
      details.message !== "" &&
      emailRegex.test(details.email)
    ) {
      setValidSubmit(true);
    } else {
      setValidSubmit(false);
    }
  }, [details]);

  // Reflects user input to details state and re-enables validation
  function updateDetails(key) {
    return function (event) {
      setDetails((prev) => ({ ...prev, [key]: event.target.value }));
      setShowValidation(true);
    };
  }

  // Submits message
  const submitEmail = (e) => {
    e.preventDefault();
    alert("Submitted Message!");
    setDetails({
      email: "",
      subject: "",
      message: "",
    });
    setValidSubmit(false);
    setShowValidation(false);
  };

  return (
    <footer
      className="flex flex-col md:flex-row bg-[#004B77] text-base-content p-10"
      id="footer"
    >
      <aside className="flex-1 flex flex-col justify-center">
        <img src="/logos/sph_white.png" className="w-15 h-15" />
        <p className="font-light text-stone-100">
          StudySpotPH Co-Working Spaces Booking
          <br />
          Providing a platform for Co-Working Spaces
          <br />
          <br />
          Made by: KRMeeag
        </p>
      </aside>
      <form className="flex-2">
        <h6 className="lato-bold text-stone-100 text-2xl">Contact Us</h6>
        <div className="w-full">
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex flex-col flex-1 m-2.5">
              <label className="my-1 text-stone-100">Email address</label>
              <input
                type="text"
                placeholder="username@site.com"
                pattern="^[^@]+@[^@]+\.[^@]{2,}$"
                className="input validator input-bordered w-full"
                value={details.email}
                onChange={updateDetails("email")}
                required
              />
              {showValidation ? (
                <div className="w-fit bg-error-content validator-hint my-1 rounded-2xl self-end">
                  <span className="text-red-700 text-xs mx-2">
                    Invalid email address!
                  </span>
                </div>
              ) : null}
            </div>
            <div className="w-full flex flex-col flex-1 m-2.5">
              <label className="my-1 text-stone-100">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full validator"
                value={details.subject}
                onChange={updateDetails("subject")}
                required
              />
              {showValidation ? (
                <div className="w-fit bg-error-content validator-hint my-1 rounded-2xl self-end">
                  <span className="text-red-700 text-xs mx-2">
                    You need a subject line!
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col mx-2.5">
            <label className="my-1 text-stone-100">Message</label>
            <div>
              <textarea
                type="text"
                placeholder="Message Here"
                className="textarea w-full textarea-bordered validator"
                value={details.message}
                onChange={updateDetails("message")}
                required
              />
              {showValidation ? (
                <div className="w-fit bg-error-content validator-hint my-1 rounded-2xl justify-self-end">
                  <span className="text-red-700 text-xs mx-2">
                    You need a message!
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-end my-5 mx-2">
            <button
              disabled={!validSubmit}
              type="submit"
              className="btn btn-wide"
              onClick={submitEmail}
            >
              Submit Message
            </button>
          </div>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
