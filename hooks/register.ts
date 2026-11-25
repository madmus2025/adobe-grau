import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Neutral mid-dark gray in the manner of the Adobe desktop apps: not black, not light gray.
const { theme, problems } = makeColors({
  label: 'Adobe-Grau',
  only: 'dark',
  roles: { accent: '#2680eb', danger: '#e34850', success: '#2d9d78', warning: '#e68619', pro: '#9256d9' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#323232',
        'surface-1': '#363636',
        'surface-2': '#3a3a3a',
        'surface-3': '#3a3a3a',
        'text-primary': '#f0f0f0',
        'text-secondary': '#d0d0d0',
        'text-muted': '#b9b9b9',
      },
    },
  },
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
