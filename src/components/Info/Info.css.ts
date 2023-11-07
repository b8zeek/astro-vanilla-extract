import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'

export const info = style({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'calc(max(2rem, 50% - 38rem) + 40rem)',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `radial-gradient(
        50% 80% at center right,
        ${vars.no3elementBackground} 0%,
        ${vars.no1appBackground} 100%
    )`,
    borderRight: `1px solid ${vars.no6bordersNonInteractive}`,
    paddingLeft: 'max(4rem, calc(50% - 38rem))'
})

export const infoContent = style({
    width: '24rem',
    padding: '0 2rem'
})
