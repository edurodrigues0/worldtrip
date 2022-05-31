import { Divider, Text, } from '@chakra-ui/react';

import { HomeBanner } from '../components/Home/HomeBanner';
import { Slides } from '../components/Home/Slides';
import { TravelSection } from '../components/Home/TravelSection';

export default function Home() {
  return (
    <>
      <HomeBanner />
        
      <TravelSection />
      
      <Divider 
        w='5.6rem'
        h={0.5}
        bg='Dark.700'
        m='0 auto'
      />

      <Text
        as='h1'
        fontSize={['3.8rem','2.25rem']}
        fontWeight={500}
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