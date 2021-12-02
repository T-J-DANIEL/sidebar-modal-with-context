import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
const Modal = ({ setShowModal }) => {
  return (
    <>
      <div className="modal">
        <div className="inner-modal">
          <button
            className="close-button"
            onClick={() => {
              setShowModal(false)
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
