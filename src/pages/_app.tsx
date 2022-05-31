import "swiper/css/bundle";
import "../styles/slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Box, ChakraProvider, Flex } from '@chakra-ui/react';

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
        <Flex
          w="100vw"
          h="100vh"
        >
          <Box
            maxW={1440}
            m='0 auto'
          >
            <Header />
            <Component {...pageProps} />
          </Box>
        </Flex>
      </ContinentProvider>
    </ChakraProvider>
  )
}

export default MyApp
