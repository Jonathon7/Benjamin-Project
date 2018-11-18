import React from 'react'
//import Link from 'gatsby-link'

const Sidebar = props => {
  return (
    <div className="sidebar">
      <div className="sidebar-text">
        <h1>{props.title}</h1>
        <h4>{props.text}</h4>
        <div className="contact-side-text">
          <h3>{props.name}</h3>
          <h5>{props.header}</h5>
          <h6>
            <a href="tel:4322968587">{props.subText}</a>
          </h6>
          <h5>{props.header2}</h5>
          <h6>{props.subText2}</h6>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
