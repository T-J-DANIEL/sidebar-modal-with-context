import { useSideContext } from "./SidebarContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
const Modal = () => {
  const { toggleModal } = useSideContext()
  return (
    <>
      <div className="modal">
        <div className="inner-modal">
          <button className="close-button" onClick={toggleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
