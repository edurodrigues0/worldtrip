import { extendTheme } from '@chakra-ui/react';

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
        overflowX: "hidden"
      }
    }
  }
})