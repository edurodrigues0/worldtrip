import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '568px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

export const global = extendTheme({
  colors: {
    Highlight: '#FFBA08',
    Dark: {
      900: '#000000',
      700: '#47585B',
      500: '#999999'
    },
    Light: {
      100: '#FFFFFF',
      200: '#F5F8FA',
    }
  },
  fonts: {
    headings: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        background: "Light.200",
        color: 'Dark.700',
      },
    }
  },
  breakpoints
})