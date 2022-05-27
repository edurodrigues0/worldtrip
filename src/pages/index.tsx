import { Box, Divider, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { GetStaticProps } from 'next';
import { Header } from "../components/Header";
import { HomeBanner } from '../components/Home/HomeBanner';
import { Slides } from '../components/Home/Slides';
import { TravelSection } from '../components/Home/TravelSection';
import { api } from '../services/api';

interface ContinentsProps {
  id: number;
  name: string;
  countryPhrase: string;
  slideImage: string;
}

export default function Home() {
  const [continents, setContinents] = useState<ContinentsProps[]>([]);
  
  useEffect(() => {
    api.get('/continents').then(response => {
      setContinents(response.data);
    })
  }, [])

  return (
    <>
      <HomeBanner />
        
      <TravelSection />
      
      <Divider 
        w={20}
        h={0.5}
        bg='Dark.700'
        m='0 auto'
      />

      <Text
        as='h1'
        fontSize='2.25rem'
        align='center'
        mt={14}
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>

      <Slides />
    </>
  )
}