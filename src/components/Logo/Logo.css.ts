import { style } from '@vanilla-extract/css'

export const logo = style({
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: 700,
    letterSpacing: '-0.2rem',
    whiteSpace: 'nowrap',
    backgroundImage:
        'linear-gradient(71.18deg, rgb(0, 34, 255) -27.32%, rgb(0, 34, 255) -16.39%, rgb(81, 121, 254) -7.38%, rgb(165, 237, 182) 30.59%, rgb(250, 232, 90) 46.06%, rgb(253, 172, 62) 62.61%, rgb(255, 92, 0) 75.82%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0
})

export const infoComponentLogoStyles = style({
    fontSize: '3rem',

    '@media': {
        'screen and (min-width: 1024px)': {
            display: 'none'
        }
    }
})

export const headerComponentLogoStyles = style({
    display: 'none',

    '@media': {
        'screen and (min-width: 1024px)': {
            display: 'block',
            fontSize: '2rem'
        }
    }
})
