import { style } from '@vanilla-extract/css'

import { vars } from '@styles/vars.css'

export const container = style({
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '3px 3px 1rem rgba(0, 0, 0, 0.2)',
    backgroundImage: `linear-gradient(${vars.no1appBackground}, ${vars.no2subtleBackground})`,

    '@media': {
        'screen and (min-width: 1024px)': {
            padding: '2rem 3rem'
        }
    }
})

export const card = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingBottom: '1rem',
    borderBottom: `1px solid ${vars.no6bordersNonInteractive}`,
    marginBottom: '1rem'
})

export const cardHeading = style({
    lineHeight: 1,
    border: 'none',
    margin: 0
})

export const cardSubheading = style({
    lineHeight: 1,
    fontSize: '1rem',
    fontStyle: 'italic',
    color: vars.no11textContrastLow,
    margin: 0
})

export const avatar = style({
    width: '4rem',
    borderRadius: '50%',
    border: `4px solid ${vars.no7bordersInteractive}`
})
