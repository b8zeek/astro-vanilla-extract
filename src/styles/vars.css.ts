import { createTheme, createThemeContract } from '@vanilla-extract/css'

import { iris, irisDark } from '@radix-ui/colors'

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
    no1appBackground: iris.iris1,
    no2subtleBackground: iris.iris2,

    no3elementBackground: iris.iris3,
    no4elementBackgroundHovered: iris.iris4,
    no5elementBackgroundActive: iris.iris5,

    no6bordersNonInteractive: iris.iris6,
    no7bordersInteractive: iris.iris7,
    no8bordersInteractiveFocused: iris.iris8,

    no9solidBackground: iris.iris9,
    no10solidBackgroundHovered: iris.iris10,

    no11textContrastLow: iris.iris11,
    no12textContrastHigh: iris.iris12
})

export const dark = createTheme(vars, {
    no1appBackground: irisDark.iris1,
    no2subtleBackground: irisDark.iris2,

    no3elementBackground: irisDark.iris3,
    no4elementBackgroundHovered: irisDark.iris4,
    no5elementBackgroundActive: irisDark.iris5,

    no6bordersNonInteractive: irisDark.iris6,
    no7bordersInteractive: irisDark.iris7,
    no8bordersInteractiveFocused: irisDark.iris8,

    no9solidBackground: irisDark.iris9,
    no10solidBackgroundHovered: irisDark.iris10,

    no11textContrastLow: irisDark.iris11,
    no12textContrastHigh: irisDark.iris12
})
