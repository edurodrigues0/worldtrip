import {
  Box,
  Grid,
  GridItem,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { TravelItems } from "./TravelItems";

export function TravelSection() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true
  });

  const responsiveStackSpacing = useBreakpointValue({
    md: 12,
    lg: 36
  })

  return (
    <Box w="100%" m="0 auto">
      {isWideVersion ? (
        <Stack
          spacing={responsiveStackSpacing}
          direction="row"
          margin="5rem 8rem"
          justify="center"
        >
          <TravelItems image="/TravelIcons/NightLife.png" title="vida noturna" />

          <TravelItems image="/TravelIcons/Beach.png" title="praia" />

          <TravelItems image="/TravelIcons/Modern.png" title="moderno" />

          <TravelItems image="/TravelIcons/Classic.png" title="clássico" />

          <TravelItems image="/TravelIcons/More.png" title="e mais..." />
        </Stack>
      ) : (
        <Grid
          margin="2.25rem 3.125rem"
          templateColumns="repeat(2)"
          templateRows="repeat(2, 1fr)"
          gap={6}
        >
          <GridItem display='flex' justifyContent='flex-start'>
            <TravelItems image="/TravelIcons/ElipseIcon.png" title="vida noturna" />
          </GridItem>
          
          <GridItem>
            <TravelItems image="/TravelIcons/ElipseIcon.png" title="praia" />
          </GridItem>

          <GridItem display='flex' justifyContent='flex-start'>
            <TravelItems image="/TravelIcons/ElipseIcon.png" title="moderno" />
          </GridItem>

          <GridItem display='flex' justifyContent='flex-start'>
            <TravelItems image="/TravelIcons/ElipseIcon.png" title="clássico" />
          </GridItem>
          
          <GridItem colSpan={2}>
            <TravelItems image="/TravelIcons/ElipseIcon.png" title="e mais..." />
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}
