import { useRef, useEffect, useContext } from "react"
import Modal from "./Modal"
import SideMenu from "./SideMenu"
import {useSideContext} from "./SidebarContext"
function App() {
  const { showModal, toggleModal, showSideMenu, toggleSideMenu } =
    useSideContext()
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
        <div className="menu-button" onClick={toggleSideMenu}>
          {/* menu button bars */}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <main className="App-main-area">
        <button className="modal-button" onClick={toggleModal}>
          show modal
          {/* {sideContext} */}
        </button>
        {showModal && <Modal toggleModal={toggleModal} />}
          <SideMenu reference={sidebarRef} toggleSideMenu={toggleSideMenu} />
      </main>
    </div>
  )
}

export default App
