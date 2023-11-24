import { style } from '@vanilla-extract/css'

import { vars } from '@styles/vars.css'

export const anchor = style({
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: vars.no11textContrastLow
})
