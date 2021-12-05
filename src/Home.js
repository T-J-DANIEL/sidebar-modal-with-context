import { useSideContext } from "./SidebarContext"
const Home = () => {
  const { toggleModal, toggleSideMenu } = useSideContext()
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
        </button>
      </main>
    </div>
  )
}

export default Home
