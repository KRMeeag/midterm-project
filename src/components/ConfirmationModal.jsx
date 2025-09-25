import { useModal } from "../contexts/ModalContext";
import { useUser } from "../contexts/UserContext";

const ConfirmationModal = () => {
  const { isRemModActive, indexToRemove, cancelRemMod } = useModal();
  const { removeReservation } = useUser();

  // Confirms removal of reservaiton
  function submitRem() {
    removeReservation(indexToRemove);
    cancelRemMod();
  }

  return (
    <dialog
      className="modal modal-bottom sm:modal-middle"
      open={isRemModActive}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Attention!</h3>
        <p className="py-4">Are you sure you wanted to delete this entry?</p>
        <div className="modal-action">
          <form className="flex w-full justify-center">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex w-full flex-1 mx-2">
              <button
                type="button"
                className="btn btn-error w-full"
                onClick={submitRem}
              >
                Yes
              </button>
            </div>
            <div className="flex w-full flex-1 mx-2">
              <button type="button" className="btn w-full" onClick={cancelRemMod}>
                No
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmationModal;
