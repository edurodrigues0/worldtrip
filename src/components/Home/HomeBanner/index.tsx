import { Box, Image, useBreakpointValue } from "@chakra-ui/react";

import { BannerTexts } from "./BannerTexts";

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box
      bgImage="./Background.png"
      bgRepeat="round"
      h={["10.1875rem", "12.5rem", "20rem"]}
      w="100%"
      position="relative"
      padding={["1.75rem 1.625rem 1.75rem 1rem", "1.75rem 1.625rem 1.75rem 1rem" , "5rem 8.75rem"]}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <BannerTexts />

      {
        isWideVersion 
          && 
          <Image 
            src="Airplane.png" 
            alt="airplane"
            mt="4.75rem"
            transform="rotate(3deg)"
          />
      }
    </Box>
  );
}
