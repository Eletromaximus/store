import breakpoints from './breakpoints'
import typographyVariants from './typographyVariants'

export const dark = {
  title: 'dark',

  colors: {
    text: '#fafdf6',
    primary: '#eeefa8',
    secundary: '#ddd92a',

    background: '#2d2a32'
  },

  breakpoints,
  typographyVariants,
  fontFamily: '\'Lato\', sans-serif'
}

export const light = {
  title: 'light',

  colors: {
    text: '#fffded',
    primary: '#ffb17a',
    secundary: '#fce762',

    background: '#4f4789'
  },

  breakpoints,
  typographyVariants,
  fontFamily: '\'Lato\', sans-serif'
}
