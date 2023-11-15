import { style } from '@vanilla-extract/css'

export const main = style({
    width: '100%',
    maxWidth: '80rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 1.5rem',
    overflow: 'hidden',
    margin: '0 auto',

    '@media': {
        'screen and (min-width: 1024px)': {
            justifyContent: 'flex-end',
            padding: 0
        }
    }
})

export const content = style({
    width: '100%',
    maxWidth: '32rem',
    position: 'relative',
    margin: '0 auto',

    '@media': {
        'screen and (min-width: 1024px)': {
            maxWidth: '36rem',
            margin: 'unset'
        }
    }
})
