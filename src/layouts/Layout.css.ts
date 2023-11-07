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

export const info = style({
    minHeight: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 'calc(max(2rem, 50% - 38rem) + 40rem)',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    backgroundImage: `radial-gradient(
        50% 80% at center right,
        ${vars.no3elementBackground} 0%,
        ${vars.no1appBackground} 100%
    )`,
    borderRight: `1px solid ${vars.no6bordersNonInteractive}`,
    paddingLeft: 'max(4rem, calc(50% - 38rem))'
})

export const infoContent = style({
    width: '24rem',
    padding: '0 2rem'
})

export const main = style({
    width: '100%',
    maxWidth: '80rem',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '0 2rem',
    margin: '0 auto'
})

export const content = style({
    maxWidth: '36rem'
})

export const background = style({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    backgroundImage: `radial-gradient(
        30% 10% at top right,
        ${vars.no3elementBackground} 0%,
        ${vars.no1appBackground} 100%
    )`
})
