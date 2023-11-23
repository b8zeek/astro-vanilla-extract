import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/vars.css'

export const logo = style({
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: 700,
    letterSpacing: '-0.2rem',
    whiteSpace: 'nowrap',
    backgroundImage: vars.logoBackground,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0
})

export const infoComponentLogoStyles = style({
    fontSize: '3rem',

    '@media': {
        'screen and (min-width: 1024px)': {
            display: 'none'
        }
    }
})

export const headerComponentLogoStyles = style({
    display: 'none',

    '@media': {
        'screen and (min-width: 1024px)': {
            display: 'block',
            fontSize: '2rem'
        }
    }
})
