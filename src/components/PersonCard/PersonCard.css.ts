import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'

export const card = style({
    display: 'flex',
    alignItems: 'flex-end',
    gap: '0.5rem',
    paddingBottom: '1rem',
    borderBottom: `1px solid ${vars.no6bordersNonInteractive}`,
    marginBottom: '1rem'
})

export const cardHeading = style({
    lineHeight: 1,
    margin: 0
})

export const cardSubheading = style({
    lineHeight: 1,
    fontSize: '1rem',
    color: vars.no11textContrastLow,
    margin: 0
})

export const avatar = style({
    width: '4rem',
    borderRadius: '50%',
    border: `4px solid ${vars.no6bordersNonInteractive}`
})
