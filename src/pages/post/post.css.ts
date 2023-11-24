import { style } from '@vanilla-extract/css'
import { vars } from '@styles/vars.css'

export const anchor = style({
    display: 'inline-block',
    padding: '0.5rem 2rem',
    color: vars.no11textContrastLow,
    backgroundImage: `linear-gradient(${vars.no3elementBackground}, ${vars.no4elementBackgroundHovered})`,
    borderRadius: '0.5rem',
    border: `1px solid ${vars.no7bordersInteractive}`,
    marginBottom: '4rem'
})
