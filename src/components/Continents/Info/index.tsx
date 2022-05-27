import { Box, Button, HStack, Text, Tooltip } from "@chakra-ui/react";

import { InfoItem } from "./InfoItem";

interface InfoProps {
  countrys: number,
  languages: number,
  rankCitiesVisited: number,
}

export function Info({rankCitiesVisited, countrys, languages }: InfoProps) {
  return (
    <HStack spacing="2.6rem">
      <InfoItem 
        infoAmount={countrys}
        infoAmountDescription='países'
      />

      <InfoItem 
        infoAmount={languages}
        infoAmountDescription='línguas'
      />

      <InfoItem
        infoAmount={rankCitiesVisited}
        infoAmountDescription='cidades +100'
        infoToolTip={true}
      />
    </HStack>
  );
}
