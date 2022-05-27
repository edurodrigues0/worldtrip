import { Box, HStack } from '@chakra-ui/react';

import { TravelItems } from './TravelItems';

export function TravelSection() {
  return(
    <Box
      w='100%'
      m='0 auto'
    >
    <HStack spacing={36} margin='5rem 8rem' justify='center'> 
      <TravelItems 
        image='NightLife.png' 
        title='vida noturna'
      />
        
      <TravelItems 
        image='Beach.png'
        title='praia'
      />

      <TravelItems 
        image='Modern.png'
        title='moderno'
      />

      <TravelItems 
        image='Classic.png'
        title='clássico'
      />

      <TravelItems 
        image='More.png'
        title='e mais...'
      />
    </HStack>
    </Box>
  );
}