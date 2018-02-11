import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="header"
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <img className="profile" src="https://avatars2.githubusercontent.com/u/8496735?s=460&v=4" />
      <div className="title">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Daniel André da Silva
          </Link>
        </h1>
        <h4>Software Developer</h4>
      </div>
    </div>
  </div>
)

export default Header
