import React from 'react'
import icons from './images/youtube.png'

function TopFooter() {
  return (
    <div className="top-footer-container">
      <div className="top-footer-list">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Give</li>
      </div>
      <div className="top-footer-icons">
        <img src={icons} alt="Logo" />
      </div>
    </div>
  )
}

export default TopFooter
