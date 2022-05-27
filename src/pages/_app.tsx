import "swiper/css/bundle";
import "../styles/swiperGlobal.css";

import { Box, ChakraProvider } from '@chakra-ui/react';

import { ContinentProvider } from "../context/ContinentContext";
import { Header } from "../components/Header";
import { global } from '../styles/global';
import { makeServer } from "../services/mirage";

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={global}>
      <ContinentProvider>
        
        <Box
          maxW={1440}
          m='0 auto'
        >
          <Header />
          <Component {...pageProps} />
        </Box>
        
      </ContinentProvider>
    </ChakraProvider>
  )
}

export default MyApp
