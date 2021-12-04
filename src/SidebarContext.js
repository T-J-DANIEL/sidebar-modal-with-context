import React, { useState, useContext } from "react"

const SidebarContext = React.createContext()

const SidebarContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue)
  }
  const [showSideMenu, setShowSideMenu] = useState(false)
  const toggleSideMenu = () =>{
       setShowSideMenu((prevValue) => !prevValue)
  }
  return (
    <SidebarContext.Provider value={{
        showModal,
        toggleModal,
        showSideMenu,
        toggleSideMenu
    }}>{children}</SidebarContext.Provider>
  )
}
//custom hook for useContext
export const useSideContext = () =>{
    return useContext(SidebarContext)
}

export {SidebarContext, SidebarContextProvider}
