import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const nav = style({
    display: 'inline-flex',
    gap: '2px',
    position: 'fixed',
    bottom: '0.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5,
    borderRadius: '100px',
    overflow: 'hidden',

    '@media': {
        'screen and (min-width: 1024px)': {
            display: 'none'
        }
    }
})

export const anchor = style({
    lineHeight: 1,
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    color: vars.no11textContrastLow,
    backgroundColor: vars.no6bordersNonInteractive
})
