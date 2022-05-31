import { Text } from '@chakra-ui/react';

interface BioProps {
  phrase: string;
}

export function Bio({phrase}: BioProps) {
  return (
    <Text
      fontSize={["3rem","1.5rem"]}
      textAlign="justify"
      w={["100%","37.5rem"]}
    >
      {phrase}
    </Text>
  );
}
