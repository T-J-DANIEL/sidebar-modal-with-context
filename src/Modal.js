const Modal = ({ setShowModal }) => {
  return (
    <>
      <div className="modal">
        <div className="inner-modal">
          <button
            className="close-modal-button"
            onClick={() => {
              setShowModal(false)
            }}
          >
            X
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
