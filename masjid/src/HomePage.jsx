import React from 'react'
import siteLogo from "./images/website-new-logo.png"
import "./CSS/homepage.css"
export const HomePage = () => {
  return (
    <div>

        <img className="photoLogo" src={siteLogo} alt='LOGO' width="100" height="100"  />
        <h1 className='mainTitle'>Prarie Muslim Association</h1>


    </div>
  )
}
