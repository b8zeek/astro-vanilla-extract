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

globalStyle('h1', {
    lineHeight: '3.25rem',
    fontSize: '3rem',
    color: vars.no12textContrastHigh,
    marginBottom: '1rem'
})

globalStyle('h2', {
    lineHeight: '2rem',
    fontSize: '2rem',
    color: vars.no12textContrastHigh,
    marginBottom: '1.25rem'
})

globalStyle('h3', {
    lineHeight: '1.75rem',
    fontSize: '1.75rem',
    color: vars.no11textContrastLow,
    marginBottom: '1.25rem'
})

globalStyle('h4', {
    lineHeight: '1.5rem',
    fontSize: '1.5rem',
    color: vars.no11textContrastLow,
    marginBottom: '1rem'
})

globalStyle('h5', {
    lineHeight: '1.25rem',
    fontSize: '1.25rem',
    color: vars.no11textContrastLow,
    marginBottom: '1rem'
})

globalStyle('h6', {
    lineHeight: '1rem',
    fontSize: '1rem',
    color: vars.no11textContrastLow,
    marginBottom: '1rem'
})

globalStyle('p', {
    lineHeight: 1.5,
    fontSize: '1rem',
    fontFamily: 'Raleyway, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    letterSpacing: '-0.01em',
    textAlign: 'justify',
    color: vars.no11textContrastLow,
    opacity: 0.75,
    marginBottom: '2rem'
})

globalStyle('a', {
    textDecoration: 'none'
})

globalStyle('hr', {
    height: '0.25rem',
    backgroundColor: vars.no10solidBackgroundHovered,
    border: 'none',
    margin: '2rem 0'
})
