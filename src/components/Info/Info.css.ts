import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'

export const info = style({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `radial-gradient(
        50% 80% at center bottom,
        ${vars.no3elementBackground} 0%,
        ${vars.no1appBackground} 100%
    )`,
    borderBottom: `1px solid ${vars.no6bordersNonInteractive}`,
    padding: '7rem 1.5rem',
    overflow: 'hidden',

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
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '3px 3px 1rem rgba(0, 0, 0, 0.2)',

    '@media': {
        'screen and (min-width: 1024px)': {
            width: '24rem',
            padding: '2rem 3rem',
            margin: 0
        }
    }
})
