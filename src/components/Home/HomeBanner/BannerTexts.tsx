import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

export function BannerTexts() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box color="Light.200">
      <Text
        fontWeight={500}
        fontSize={["1.25rem", "1.5rem", "2.25rem"]}
      >
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Text>
      
      <Text
        fontWeight={400}
        fontSize={["0.825rem","1rem", "1.25rem"]}
        marginTop="1.25rem"
      >
        Chegou a hora de tirar do papel a viagem que {!isWideVersion && <br />} você {isWideVersion && <br />}
        sempre sonhou.
      </Text>
    </Box>
  );
}
