import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

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
  const WideBorderVersion = useBreakpointValue({
    base: "0.5rem solid",
    lg: '1px solid'
  })
  return (
    <Box w={["55rem","16rem"]} h={["65rem","17.4rem"]} bg="Light.100" borderRadius={["1rem", "0.25rem"]}>
      <Image
        src={image}
        alt={cityName}
        borderTopRadius={["1rem", "0.25rem"]}
        h={["40rem","10.8rem"]}
        w='100%'
      />
      <Flex
        w="100%"
        p="1.125rem 1.5rem 1.56rem"
        justify="space-between"
        borderX={WideBorderVersion}
        borderBottom={WideBorderVersion}
        borderBottomRadius={["1rem", "0.25rem"]}
        borderColor="rgba(255, 186, 8, 0.5)"
      >
        <Box m={['4rem 2rem', "0rem"]}>
          <Text
            fontWeight={600}
            fontSize={["4rem","1.25rem"]}
            lineHeight="1.56rem"
            color="Dark.700"
          >
            {cityName}
          </Text>

          <Text
            fontWeight={500}
            fontSize={["3rem","1rem"]}
            lineHeight="1.625rem"
            color="Dark.500"
            mt={["5rem","0.75rem"]}
          >
            {countryName}
          </Text>
        </Box>

        <Image
          src={flag}
          alt={countryName}
          h={["7rem", "1.875rem"]}
          w={["7rem", "1.875rem"]}
          borderRadius="100%"
          m={['6rem 3rem', "0rem"]}
        />
      </Flex>
    </Box>
  );
}
