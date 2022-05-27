import { Text } from '@chakra-ui/react';

interface BioProps {
  phrase: string;
}

export function Bio({phrase}: BioProps) {
  return (
    <Text
      fontSize="1.5rem"
      textAlign="justify"
      w="37.5rem"
    >
      {phrase}
    </Text>
  );
}
