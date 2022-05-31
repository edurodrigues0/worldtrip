import { Box, Image, Text } from '@chakra-ui/react';

interface TravelSectionProps {
  image: string;
  title: string;
};

export function TravelItems({ image, title }: TravelSectionProps) {
  return(
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection={['row', 'column']}
    >
      <Image 
        src={image}
        alt={title}
        h={[6, 20]}
        w={[6, 20]}
      />

      <Text
        fontSize={['3rem','1.5rem']}
        fontWeight={600}
        mt={['0rem','1.5rem']}
        ml={['1.5rem', '0rem']}
      >
        {title}
      </Text>
    </Box>
  );
}