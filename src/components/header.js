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
          Get Involved!
        </a>
        <a href="https://google.com" className="call-to-action">
          {' '}
          See about times and classes
        </a>
      </div>
    </div>
  )
}

export default Header
