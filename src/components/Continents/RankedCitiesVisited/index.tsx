import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface RankedCitiesVisitedProps {
  cityName: string;
  countryName: string;
  image: string;
  flag: string;
}

export function RankedCitiesVisited({
  cityName,
  countryName,
  image,
  flag,
}: RankedCitiesVisitedProps) {
  return (
    <Box w="16rem" h="17.4rem" bg="Light.100" borderRadius="4px">
      <Image src={image} alt={cityName} borderTopRadius="4px" h="10.8rem" w='100%' />
      <Flex
        w="100%"
        h="6.6rem"
        p="1.125rem 1.5rem 1.56rem"
        justify="space-between"
        borderX="1px solid"
        borderBottom="1px solid"
        borderBottomRadius="4px"
        borderColor="rgba(255, 186, 8, 0.5)"
      >
        <Box>
          <Text
            fontWeight={600}
            fontSize="1.25rem"
            lineHeight="1.56rem"
            color="Dark.700"
          >
            {cityName}
          </Text>

          <Text
            fontWeight={500}
            fontSize="1rem"
            lineHeight="1.625rem"
            color="Dark.500"
            mt="0.75rem"
          >
            {countryName}
          </Text>
        </Box>

        <Image
          src={flag}
          alt={countryName}
          h="1.875rem"
          w="1.875rem"
          borderRadius="100%"
        />
      </Flex>
    </Box>
  );
}
