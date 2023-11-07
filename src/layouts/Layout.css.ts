import { style } from '@vanilla-extract/css'

import { vars } from '../styles/vars.css'

export const header = style({
    width: '100%',
    height: '3rem'
})

export const headerContent = style({
    maxWidth: 640,
    width: '100%',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    margin: '0 auto'
})

export const navigation = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
})

export const navItem = style({
    lineHeight: '1rem',
    fontSize: '1rem',
    fontWeight: 500,
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: 8,
    color: vars.no11textContrastLow,
    backgroundColor: vars.no4elementBackgroundHovered,
    transition: 'all 0.2s ease-in-out',

    ':hover': {
        background: vars.no5elementBackgroundActive
    }
})

export const main = style({
    maxWidth: 640,
    width: '100%',
    minHeight: '100vh',
    padding: '1rem',
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
