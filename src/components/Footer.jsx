const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-[#004B77] text-base-content p-10">
      <aside className="flex-1 flex flex-col justify-center">
        <img src="/logos/sk_white.png" className="w-15 h-15" />
        <p className="font-light text-stone-100">
          SynKen Co-Working Spaces Booking
          <br />
          Providing a platform for Co-Working Spaces
          <br />
          <br />
          Made by: KRMeeag
        </p>
      </aside>
      <form className="flex-2">
        <h6 className="lato-bold text-stone-100 text-2xl">Contact Us</h6>
        <div className="flex flex-col md:flex-row">
          <fieldset className="w-full flex flex-col flex-1 m-2.5">
            <label className="my-1 text-stone-100">Email address</label>
            <div>
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full"
              />
            </div>
          </fieldset>
          <fieldset className="w-full flex flex-col flex-1 m-2.5">
            <label className="my-1 text-stone-100">Subject</label>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />
            </div>
          </fieldset>
        </div>
        <fieldset className="flex flex-col m-2.5">
          <label className="my-1 text-stone-100">Message</label>
          <div>
            <textarea
              type="text"
              placeholder="Message Here"
              className="textarea w-full textarea-bordered"
            />
          </div>
        </fieldset>
        <div className="flex justify-end my-5 mx-2">
          <button className="btn btn-wide">Submit Email</button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
