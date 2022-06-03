import { useEffect, useState } from "react";

import { HStack } from "@chakra-ui/react";
import { InfoItem } from "./InfoItem";

interface InfoProps {
  countrys: number,
  languages: number,
  rankCitiesVisited: number,
  continentId: number,
}

export function Info({rankCitiesVisited, countrys, languages, continentId }: InfoProps) {
  return (
    <HStack mt={["1rem", "1rem" ,"0", "0"]} spacing={["2.625rem", "2rem", "2rem", "2.6rem"]}>
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
