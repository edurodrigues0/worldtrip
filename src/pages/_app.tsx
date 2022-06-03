import "swiper/css/bundle";
import "../styles/slider.css";

import { ChakraProvider } from '@chakra-ui/react';
import { ContinentProvider } from "../context/ContinentContext";
import { global } from '../styles/global';
import { makeServer } from "../services/mirage";

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={global}>
      <ContinentProvider>
        <Component {...pageProps} />
      </ContinentProvider>
    </ChakraProvider>
  )
}

export default MyApp
