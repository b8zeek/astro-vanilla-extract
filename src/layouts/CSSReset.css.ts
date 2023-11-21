import { globalStyle } from '@vanilla-extract/css'

import { vars } from '../styles/vars.css'
import { AllianceNo2 } from '../assets/fonts/AllianceNo2.css'

globalStyle('*', {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: AllianceNo2
})

globalStyle('body', {
    minWidth: '100vw',
    minHeight: '100vh',
    position: 'relative',
    background: vars.no1appBackground,
    overflowX: 'hidden'
})

globalStyle(':root', {
    lineHeight: 1.5,
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
    margin: '0 auto'
})

// HEADINGS

globalStyle('h1, h2, h3, h4, h5', {
    lineHeight: 1.25,
    color: vars.no12textContrastHigh,
    margin: '1.5rem 0 1rem'
})

globalStyle('h1, h2', {
    paddingBottom: '0.3rem',
    borderBottom: `1px solid ${vars.no6bordersNonInteractive}`
})

globalStyle('h1', {
    fontSize: '2rem'
})

globalStyle('h2', {
    fontSize: '1.5rem'
})

globalStyle('h3', {
    fontSize: '1.25rem'
})

globalStyle('h4', {
    fontSize: '1rem'
})

globalStyle('h5', {
    fontSize: '0.875rem'
})

globalStyle('h6', {
    fontSize: '0.85rem',
    color: vars.no11textContrastLow
})

// PARAGRAPH

globalStyle('p', {
    lineHeight: 1.5,
    fontSize: '1rem',
    fontFamily: 'Raleyway, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    letterSpacing: '-0.01em',
    textAlign: 'justify',
    color: vars.no11textContrastLow,
    marginBottom: '1rem'
})

// ANCHOR

globalStyle('a', {
    textDecoration: 'none'
})

// HORIZONTAL LINE

globalStyle('hr', {
    height: '0.25rem',
    backgroundColor: vars.no10solidBackgroundHovered,
    border: 'none',
    margin: '2rem 0'
})

// BLOCKQUOTE

globalStyle('blockquote', {
    padding: '0 1rem',
    borderLeft: `0.25rem solid ${vars.no6bordersNonInteractive}`,
    marginBottom: '1rem'
})

// CODE

globalStyle('pre', {
    lineHeight: 1.45,
    padding: '1rem',
    backgroundColor: vars.no3elementBackground,
    marginBottom: '1rem'
})

// LISTS

globalStyle('ul', {
    lineHeight: 1.5,
    paddingLeft: '2rem',
    marginBottom: '1rem'
})

globalStyle('ol', {
    lineHeight: 1.5,
    paddingLeft: '2rem',
    marginBottom: '1rem'
})

globalStyle('li', {
    color: vars.no11textContrastLow
})

// TABLE

globalStyle('table', {
    borderCollapse: 'collapse',
    marginBottom: '1rem'
})

globalStyle('th', {
    color: vars.no11textContrastLow
})

globalStyle('td', {
    color: vars.no11textContrastLow
})

globalStyle('th, td', {
    padding: '0.5rem 0.75rem',
    border: `1px solid ${vars.no6bordersNonInteractive}`
})

// IMAGE

globalStyle('img', {
    width: '100%'
})
