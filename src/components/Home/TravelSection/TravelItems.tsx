import { Box, Flex, Image, Text } from '@chakra-ui/react';

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
      flexDirection='column'
    >
      <Image 
        src={image}
        alt={title}
        h={20}
        w={20}
      />

      <Text
        fontSize='1.5rem'
        fontWeight={600}
        mt='1.5rem'
      >
        {title}
      </Text>
    </Box>
  );
}