import { Flex, Text } from '@chakra-ui/react';

interface ContinentBannerProps {
  name: string;
  image: string;
}

export function ContinentBanner({name, image}: ContinentBannerProps) {
  return (
    <Flex
      bgImage={image}
      bgRepeat="round"
      w="100%"
      h={["9.375rem", "12.5rem", "31.25rem"]}
      padding="3.68rem 8.75rem"
      alignItems={["center","flex-end"]}
      justify={['center', 'flex-start']}
    >
      <Text color="Light.200" lineHeight="3rem" fontWeight={[600, 500]} fontSize={["1.75rem", "1.75rem", "3rem"]}>
        {name}
      </Text>
    </Flex>
  );
}
