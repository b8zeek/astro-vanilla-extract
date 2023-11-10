import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const button = style({
    width: '1rem',
    height: '1rem',
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0.2rem',
    border: 'none',
    borderRadius: '1rem',
    background: vars.no11textContrastLow,
    cursor: 'pointer'
})

export const buttonIcon = style({
    width: '0.3rem',
    height: '0.6rem',
    borderRadius: '1rem 0 0 1rem',
    background: vars.no2subtleBackground
})
