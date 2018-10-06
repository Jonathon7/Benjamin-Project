import React from 'react'

const Header = props => {
  return (
    <div className="container-1">
      <h1 style={{ color: 'whitesmoke' }}>{props.title}</h1>
      <h4>{props.subTitle}</h4>
      <div className="header-links">
        <a href="https://google.com" className="myButton">
          Get Involved!
        </a>
        <a href="https://google.com" className="call-to-action">
          {' '}
          See about times and classes
        </a>
      </div>
      <div>
        <img src="/images/gatsby.png" alt="" />
      </div>
    </div>
  )
}

export default Header
