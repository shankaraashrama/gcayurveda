import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-fire"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Garhapathya Chikitsalayaha</h1>
        <p>
        Where good health is a way of life
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Introduction
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('testimonial')
            }}
          >
            Testimonials
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('address')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
