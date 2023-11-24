import { style } from '@vanilla-extract/css'

import { vars } from '@styles/vars.css'

export const background = style({
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundImage: `radial-gradient(
      30% 30% at center right,
      ${vars.no3elementBackground} 0%,
      ${vars.no1appBackground} 100%
    )`,

    '@media': {
        'screen and (min-width: 1024px)': {
            backgroundImage: `radial-gradient(
              30% 10% at top right,
              ${vars.no3elementBackground} 0%,
              ${vars.no1appBackground} 100%
            )`
        }
    }
})
