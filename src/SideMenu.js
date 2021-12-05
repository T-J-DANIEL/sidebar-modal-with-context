import { useRef, useEffect } from "react"
import { useSideContext } from "./SidebarContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const SideMenu = () => {
  const { toggleSideMenu, showSideMenu } = useSideContext()
  const sidebarRef = useRef(null)
  useEffect(() => {
    if (showSideMenu) {
      sidebarRef.current.style.left = "0"
    } else {
      sidebarRef.current.style.left = "-110%"
    }
  }, [showSideMenu])
  return (
    <div className="side-menu" ref={sidebarRef}>
      <div className="sidemenu-header">
        <h2>Tims Website</h2>
        <button className="close-button" onClick={toggleSideMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
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
      <div className="sidemenu-footer">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>
  )
}

export default SideMenu
