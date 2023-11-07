import { style } from '@vanilla-extract/css'

export const main = style({
    width: '100%',
    maxWidth: '80rem',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0 2rem',
    overflow: 'hidden',
    margin: '0 auto'
})

export const content = style({
    maxWidth: '36rem'
})
