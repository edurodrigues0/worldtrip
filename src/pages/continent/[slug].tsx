import { Box, Flex } from '@chakra-ui/react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

import { Bio } from '../../components/Continents/Bio';
import { Cities } from '../../components/Continents/Cities';
import { ContinentBanner } from '../../components/Continents/ContinentBanner';
import { Header } from "../../components/Header";
import { Info } from '../../components/Continents/Info';
import { api } from '../../services/api';
import { useContinent } from '../../context/ContinentContext';
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
        margin='5rem 8.75rem'
        alignItems='center'
        justifyContent='space-between'
        h='13.20rem'
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