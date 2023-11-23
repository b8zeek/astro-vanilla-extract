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
    no12textContrastHigh: null,

    logoBackground: null
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
    no12textContrastHigh: sand.sand12,

    logoBackground:
        'linear-gradient(to right top, rgb(244, 63, 94), rgb(67, 56, 202))'
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
    no12textContrastHigh: sandDark.sand12,

    logoBackground:
        'linear-gradient(71.18deg, rgb(0, 34, 255) -27.32%, rgb(0, 34, 255) -16.39%, rgb(81, 121, 254) -7.38%, rgb(165, 237, 182) 30.59%, rgb(250, 232, 90) 46.06%, rgb(253, 172, 62) 62.61%, rgb(255, 92, 0) 75.82%)'
})
