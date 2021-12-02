import { useState, useRef, useEffect } from "react"
import Modal from "./Modal"
import SideMenu from "./SideMenu"
function App() {
  const [showModal, setShowModal] = useState(false)
  const [showSideMenu, setShowSideMenu] = useState(false)
  const sidebarRef = useRef(null)
  useEffect(() => {
    if (showSideMenu) {
      sidebarRef.current.style.left = "0"
    } else {
      sidebarRef.current.style.left = "-110%"
    }
  }, [showSideMenu])
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="menu-button"
          onClick={() => {
            setShowSideMenu(true)
          }}
        >
          {/* menu button bars */}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <main className="App-main-area">
        <button
          className="modal-button"
          onClick={() => {
            setShowModal(true)
          }}
        >
          show modal
        </button>
        {showModal && <Modal setShowModal={setShowModal} />}
        <SideMenu reference={sidebarRef} setShowSideMenu={setShowSideMenu} />
      </main>
    </div>
  )
}

export default App
