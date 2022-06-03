import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
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
    <Flex margin={["0rem 3rem 1rem", "0rem 3rem 1rem", "0rem 3rem 1rem", "8.75rem"]} flexDirection="column">
      <Text fontWeight={500} fontSize={["1.5rem","2.4rem"]} mb={["1.25rem","2.5rem"]}>
        Cidades +100
      </Text>

      <SimpleGrid spacing={['1.25rem', '1.25rem', '1.25rem', '3rem']} columns={[1, 1, 2, 4]} margin={['0 auto', 0]}>
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
