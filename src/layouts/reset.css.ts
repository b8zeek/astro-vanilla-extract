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
    minWidth: '320px',
    minHeight: '100vh',
    position: 'relative',
    background: vars.no1appBackground
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
    lineHeight: '1.5rem',
    fontSize: '1.75rem',
    color: vars.no12textContrastHigh,
    marginBottom: '1.25rem'
})

globalStyle('h3', {
    lineHeight: '1.25rem',
    fontSize: '1.5rem',
    color: vars.no11textContrastLow,
    marginBottom: '1.25rem'
})

globalStyle('p', {
    lineHeight: 1.8,
    fontSize: '1rem',
    letterSpacing: '-0.01em',
    textAlign: 'justify',
    color: vars.no11textContrastLow,
    marginBottom: '1rem'
})
