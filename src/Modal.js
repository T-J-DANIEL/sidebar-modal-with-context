import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
const Modal = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="inner-modal">
          <button
            className="close-button"
            onClick={toggleModal}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
