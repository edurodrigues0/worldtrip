import { Text } from '@chakra-ui/react';

interface BioProps {
  phrase: string;
}

export function Bio({phrase}: BioProps) {
  return (
    <Text
      fontSize={["0.8rem", "0.875rem" ,"1.5rem", "1.5rem"]}
      textAlign="justify"
      w={["100%", "100%", "25rem", "37.5rem"]}
    >
      {phrase}
    </Text>
  );
}
