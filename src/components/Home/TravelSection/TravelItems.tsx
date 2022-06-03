import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelSectionProps {
  image: string;
  title: string;
};

export function TravelItems({ image, title }: TravelSectionProps) {
  const responsiveImageSize = useBreakpointValue({
    sm: '0.5rem',
    md: '2.5rem',
    lg: '5rem'
  })

  const responsiveFontSize = useBreakpointValue({
    sm: '1.25rem',
    md: '1.2rem',
    lg: '1.5rem'
  })
  
  return(
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection={['row', 'row' ,'column']}
    >
      <Image 
        src={image}
        alt={title}
        h={responsiveImageSize}
        w={responsiveImageSize}
      />

      <Text
        fontSize={responsiveFontSize}
        fontWeight={[500, 500, 500, 600]}
        mt={['0rem', '0rem', '1.5rem']}
        ml={['0.5rem', '0.5rem' ,'0rem']}
      >
        {title}
      </Text>
    </Box>
  );
}