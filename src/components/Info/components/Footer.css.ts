import { style } from '@vanilla-extract/css'
import { vars } from '@styles/vars.css'

export const footer = style({
    display: 'none',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '0 0 0.5rem 3rem',

    '@media': {
        'screen and (min-width: 1024px)': {
            display: 'block'
        }
    }
})

export const paragraph = style({
    lineHeight: 2,
    fontSize: '0.6rem',
    color: vars.no9solidBackground,
    textAlign: 'center',
    margin: 0
})
