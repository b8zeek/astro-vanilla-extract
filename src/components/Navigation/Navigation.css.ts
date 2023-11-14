import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const nav = style({
    display: 'inline-flex',
    gap: '2px',
    borderRadius: '100px',
    overflow: 'hidden'
})

export const anchor = style({
    lineHeight: 1,
    fontSize: '1rem',
    padding: '0.25rem 1rem',
    backgroundColor: vars.no7bordersInteractive
})
