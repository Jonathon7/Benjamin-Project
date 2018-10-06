import React from 'react'
import { Link } from 'gatsby'

const Navigation = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      position: 'sticky',
      top: 0,
    }}
  >
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
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
        <h1 style={{ fontSize: '30px', paddingTop: '10px' }}>{siteTitle}</h1>
      </Link>
      <div
        style={{
          fontSize: '20px',
          margin: '22px',
        }}
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
          to="/Give"
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
