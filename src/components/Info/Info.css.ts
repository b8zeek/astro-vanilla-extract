import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'

export const info = style({
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `radial-gradient(
        50% 80% at center bottom,
        ${vars.no3elementBackground} 0%,
        ${vars.no1appBackground} 100%
    )`,
    borderBottom: `1px solid ${vars.no6bordersNonInteractive}`,
    padding: '0 1.5rem',

    '@media': {
        'screen and (min-width: 1024px)': {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 'calc(max(2rem, 50% - 38rem) + 40rem)',
            paddingLeft: 'max(4rem, calc(50% - 38rem))',
            alignItems: 'center',
            backgroundImage: `radial-gradient(
                50% 80% at center right,
                ${vars.no3elementBackground} 0%,
                ${vars.no1appBackground} 100%
            )`,
            borderRight: `1px solid ${vars.no6bordersNonInteractive}`,
            borderBottom: 'none'
        }
    }
})

export const infoContent = style({
    width: '32rem',
    margin: '0 auto',

    '@media': {
        'screen and (min-width: 1024px)': {
            width: '24rem',
            margin: 0
        }
    }
})

export const avatar = style({
    width: '30%',
    borderRadius: '50%'
})
