import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const container = style({
    width: '100%',
    height: '100%',
    padding: '2rem',
    borderRadius: '1rem',
    border: `1px solid ${vars.no6bordersNonInteractive}`,
    backgroundImage: `linear-gradient(${vars.no3elementBackground}, ${vars.no1appBackground})`,
    marginBottom: '2rem'
})
