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
      h="31.25rem"
      padding="3.68rem 8.75rem"
      alignItems="flex-end"
    >
      <Text color="Light.200" fontWeight="SemiBold" fontSize="3rem">
        {name}
      </Text>
    </Flex>
  );
}
