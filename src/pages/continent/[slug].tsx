import { useEffect, useState } from 'react';

import { Bio } from '../../components/Continents/Bio';
import { Cities } from '../../components/Continents/Cities';
import { ContinentBanner } from '../../components/Continents/ContinentBanner';
import { Flex } from '@chakra-ui/react';
import { Info } from '../../components/Continents/Info';
import { api } from '../../services/api';
import { useRouter } from 'next/router';

interface ContinentProps {
  id: number;
  name: string;
  bannerImage: string;
  languages: number,
  countrys: number,
  rankCitiesVisited: number,
  continentBio: string;
}

export default function Continent() {
  const [continent, setContinent] = useState<ContinentProps>({} as ContinentProps);
  const { asPath } = useRouter();

  const slug = asPath.split('/continent/')[1].toString();
  
  useEffect(() => {
    async function loadData() {
      const response = await api.get(`continents/${slug}`)

      const continentInfo = {...response.data}

      if(continentInfo !== null) {
        setContinent(continentInfo)
      } 
    }
    loadData();
  }, [asPath, slug])

  return(
    <>

      <ContinentBanner 
        name={continent.name}
        image={continent.bannerImage}
      />
      
      <Flex
        margin={['5rem 3rem', '5rem 8.75rem']}
        alignItems={['flex-start','center']}
        justifyContent='space-between'
        flexDirection={['column','row']}
      >
        <Bio 
          phrase={continent.continentBio}
        />

        <Info 
          countrys={continent.countrys}
          languages={continent.languages}
          rankCitiesVisited={continent.rankCitiesVisited}
        />
        
      </Flex>

      <Cities 
        continentId={continent.id}
      />
    </>
  );
}