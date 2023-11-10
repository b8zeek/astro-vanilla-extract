import { createTheme, createThemeContract } from '@vanilla-extract/css'

import { sand, sandDark } from '@radix-ui/colors'

export const vars = createThemeContract({
    no1appBackground: null,
    no2subtleBackground: null,

    no3elementBackground: null,
    no4elementBackgroundHovered: null,
    no5elementBackgroundActive: null,

    no6bordersNonInteractive: null,
    no7bordersInteractive: null,
    no8bordersInteractiveFocused: null,

    no9solidBackground: null,
    no10solidBackgroundHovered: null,

    no11textContrastLow: null,
    no12textContrastHigh: null
})

export const light = createTheme(vars, {
    no1appBackground: sand.sand1,
    no2subtleBackground: sand.sand2,

    no3elementBackground: sand.sand3,
    no4elementBackgroundHovered: sand.sand4,
    no5elementBackgroundActive: sand.sand5,

    no6bordersNonInteractive: sand.sand6,
    no7bordersInteractive: sand.sand7,
    no8bordersInteractiveFocused: sand.sand8,

    no9solidBackground: sand.sand9,
    no10solidBackgroundHovered: sand.sand10,

    no11textContrastLow: sand.sand11,
    no12textContrastHigh: sand.sand12
})

export const dark = createTheme(vars, {
    no1appBackground: sandDark.sand1,
    no2subtleBackground: sandDark.sand2,

    no3elementBackground: sandDark.sand3,
    no4elementBackgroundHovered: sandDark.sand4,
    no5elementBackgroundActive: sandDark.sand5,

    no6bordersNonInteractive: sandDark.sand6,
    no7bordersInteractive: sandDark.sand7,
    no8bordersInteractiveFocused: sandDark.sand8,

    no9solidBackground: sandDark.sand9,
    no10solidBackgroundHovered: sandDark.sand10,

    no11textContrastLow: sandDark.sand11,
    no12textContrastHigh: sandDark.sand12
})
