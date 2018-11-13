import React from 'react'
//import wolf from './images/wolf-image.jpeg'

const Header = props => {
  return (
    <div className="container-1">
      <div className="header-container">
        <div className="header-text">
          <h1 style={{ color: 'whitesmoke' }}>{props.title}</h1>
          <h4>{props.subTitle}</h4>
        </div>
        <div className="header-img" />
      </div>

      <div className="header-links">
        <a href="https://google.com" className="myButton">
          About Us
        </a>
        <a href="https://google.com" className="call-to-action">
          {' '}
          See the latest from our blog!
        </a>
      </div>
    </div>
  )
}

export default Header
