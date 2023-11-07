import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'

export const background = style({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    backgroundImage: `radial-gradient(
      30% 10% at top right,
      ${vars.no3elementBackground} 0%,
      ${vars.no1appBackground} 100%
  )`
})
