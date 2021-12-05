import Home from "./Home"
import Modal from "./Modal"
import SideMenu from "./SideMenu"
import { useSideContext } from "./SidebarContext"
function App() {
  const { showModal } = useSideContext()
  return (
    <>
      <Home />
      {showModal && <Modal />}
      <SideMenu />
    </>
  )
}

export default App
