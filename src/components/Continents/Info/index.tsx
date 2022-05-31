import { HStack } from "@chakra-ui/react";
import { InfoItem } from "./InfoItem";

interface InfoProps {
  countrys: number,
  languages: number,
  rankCitiesVisited: number,
}

export function Info({rankCitiesVisited, countrys, languages }: InfoProps) {
  return (
    <HStack mt={["5.5rem", "0"]} spacing={["8rem","2.6rem"]}>
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
