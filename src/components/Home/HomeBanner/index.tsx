import { Box, Image } from "@chakra-ui/react";

import { BannerTexts } from "./BannerTexts";

export function HomeBanner() {
  return (
    <Box
      bgImage="Background.png"
      bgRepeat="round"
      h="20rem"
      w="100%"
      position="relative"
      padding="5rem 8.75rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <BannerTexts />

      <Image 
        src="Airplane.png" 
        alt="airplane"
        mt="4.75rem"
        transform="rotate(3deg)"
      />
    </Box>
  );
}
