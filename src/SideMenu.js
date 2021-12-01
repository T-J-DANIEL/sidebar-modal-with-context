const SideMenu = ({ reference, setShowSideMenu }) => {
  return (
    <div className="side-menu" ref={reference}>
      <div className="sidemenu-header">
        <h2>Tims Website</h2>
        <button onClick={() => {setShowSideMenu(false)}}>X</button>
      </div>
      <div>
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </div>
      <div className="sidemenu-footer"></div>
    </div>
  )
}

export default SideMenu
