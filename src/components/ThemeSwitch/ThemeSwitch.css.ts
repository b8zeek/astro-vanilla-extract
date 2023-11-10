import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const button = style({
    width: '1rem',
    height: '1rem',
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    border: `0.25rem solid ${vars.no11textContrastLow}`,
    borderRadius: '1rem',
    background: vars.no11textContrastLow,
    boxSizing: 'content-box',
    cursor: 'pointer'
})

export const buttonIcon = style({
    width: '0.5rem',
    height: '1rem',
    borderRadius: '1rem 0 0 1rem',
    background: vars.no2subtleBackground
})
