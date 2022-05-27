import { Box, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { RankedCitiesVisited } from "../RankedCitiesVisited";
import { api } from "../../../services/api";

interface CitiesProps {
  continentId: number;
}

interface Cities {
  id: number;
  city: string;
  country: string;
  continentId: number;
  image: string;
  flag: string;
}

export function Cities({continentId}: CitiesProps) {
  const [cities, setCities] = useState<Cities[]>([]);

  useEffect(() => {
    async function loadData() {
      const res = await api.get(`/cities/${continentId}`);

      setCities(res.data);
    }
    loadData();
  }, [continentId])

  return (
    <Flex w="73rem" h="43.75rem" margin="0 8.75rem" flexDirection="column">
      <Text fontWeight={500} fontSize="2.4rem" lineHeight="3.375rem" mb="2.5rem">
        Cidades +100
      </Text>

      <SimpleGrid spacing='3rem' columns={4}>
        {
          cities.map(city => {
            return(
              <RankedCitiesVisited 
                key={city.id}
                cityName={city.city}
                countryName={city.country}
                image={city.image}
                flag={city.flag}
              />
            )
          })
        }
      </SimpleGrid>
    </Flex>
  );
}
