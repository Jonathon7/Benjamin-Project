import React from 'react'

const Sidebar = props => {
  return (
    <div className="sidebar">
      <div className="sidebar-text">
        <h1>{props.title}</h1>
        <h4>{props.text}</h4>
      </div>
    </div>
  )
}

export default Sidebar
