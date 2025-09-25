import { useModal } from "../contexts/ModalContext";
import { useUser } from "../contexts/UserContext";

const LoginModal = () => {
  const { isLogInActive, setIsLogInActive } = useModal();
  const { authLog } = useUser();

  // Logs the user in via the User Context and Disables Modal
  const logIn = () => {
    authLog();
    setIsLogInActive(false);
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
          <div className="w-100 items-center">
            <h3 className="font-bold text-3xl">Log-In</h3>
          </div>
          <div className="flex flex-col h-full justify-between m-10 p-8 rounded-4xl bg-linear-to-r from-sky-500 to-sky-700 shadow-xl/30">
            <div>
              <div className="avatar">
                <div className="w-30 rounded-full ring-8 ring-stone-100">
                  <img src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" />
                </div>
              </div>
              <h1 className="m-5 text-2xl text-stone-100">User #1</h1>
            </div>
            <div className="flex h-full justify-end">
              <button className="btn" onClick={logIn}>
                <span>Continue as User #1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;
