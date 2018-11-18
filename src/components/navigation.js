import React from 'react'
import { Link } from 'gatsby'

const Navigation = ({ siteTitle }) => (
  <div className="nav-container">
    <nav className="nav-container-2">
      <Link
        to="./"
        style={{
          margin: 0,
          color: 'white',
          paddingTop: '5px',
          paddingLeft: '50px',
          textDecoration: 'none',
        }}
      >
        {' '}
        <h1 className="logo">{siteTitle}</h1>
      </Link>
      <div
        style={{
          fontSize: '20px',
          margin: '22px',
        }}
        className="nav-list"
      >
        <Link
          to="/page-2"
          style={{
            textDecoration: 'none',
            color: 'white',
            padding: '20px',
          }}
        >
          {' '}
          About{' '}
        </Link>
        <Link
          to="/blog"
          style={{
            textDecoration: 'none',
            color: 'white',
            padding: '20px',
          }}
        >
          {' '}
          Blog{' '}
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: 'none',
            color: 'white',
            padding: '20px',
          }}
        >
          {' '}
          Contact{' '}
        </Link>
        <Link
          to="/give"
          style={{
            textDecoration: 'none',
            color: 'white',
            padding: '20px',
          }}
        >
          {' '}
          Give{' '}
        </Link>
      </div>
    </nav>
  </div>
)

export default Navigation
