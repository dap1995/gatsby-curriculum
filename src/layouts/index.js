import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Typography from "typography";
import Header from '../components/Header'
import './index.css'
import '../styles/header.css'
import '../styles/skill.css'
import '../styles/info.css'
import '../vendor/fontawesome/css/fontawesome-all.min.css';


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
});

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daniel Curriculum"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

typography.injectStyles()

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
