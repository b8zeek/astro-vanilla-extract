import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const footer = style({
    padding: '5rem 0',
    backgroundImage: `linear-gradient(${vars.no2subtleBackground}, ${vars.no1appBackground})`
})

export const paragraph = style({
    fontSize: '0.75rem',
    textAlign: 'center',
    margin: 0
})
