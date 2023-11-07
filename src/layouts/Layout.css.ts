import { style } from '@vanilla-extract/css'

import { vars } from '../styles/vars.css'

export const header = style({
    width: '100%',
    height: '3rem',
    background: 'red'
})

export const headerContent = style({
    maxWidth: 640,
    width: '100%',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto'
})

export const main = style({
    maxWidth: 640,
    width: '100%',
    minHeight: '100vh',
    padding: '2rem',
    borderRadius: 8,
    margin: '0 auto'
})

export const background = style({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    backgroundImage: `radial-gradient(
        50% 80% at top left,
        ${vars.no3elementBackground} 0%,
        ${vars.no1appBackground} 100%
    )`
})
