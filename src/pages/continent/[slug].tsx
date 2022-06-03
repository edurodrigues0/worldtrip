import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Bio } from '../../components/Continents/Bio';
import { Cities } from '../../components/Continents/Cities';
import { ContinentBanner } from '../../components/Continents/ContinentBanner';
import Head from 'next/head';
import { Header } from '../../components/Header';
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
  const [isLoading, setIsLoading] = useState(true);
  const { asPath } = useRouter();

  const slug = asPath.split('/continent/')[1].toString();
  
  useEffect(() => {
    async function loadData() {
      const response = await api.get(`continents/${slug}`)

      const continentInfo = {...response.data}

      if(continentInfo !== null) {
        setContinent(continentInfo)
        setIsLoading(false);
      }
    }
    loadData();
  }, [asPath, slug])

  return isLoading ? (
    <Flex
      direction="column"
    >
      {isLoading ? 
        <Head>
          <title>
            Carregando...
          </title>
        </Head> 
        : 
        <Head>
          <title>Worldtrip | {continent.name}</title>
        </Head>}

      <Header />
      
      <Flex
        w="100%"
        h="80vh"
        maxW={1440}
        mx="auto"
        flexDirection="column"
        alignItems='center'
        justifyContent="center"
      >
        <Spinner 
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.600'
          color='Highlight'
          size='xl' 
        />
      </Flex>
    </Flex>
  ) : (
    <Flex
      direction="column"
    >
      {isLoading ? 
        <Head>
          <title>
            Carregando...
          </title>
        </Head> 
        : 
        <Head>
          <title>Worldtrip | {continent.name}</title>
        </Head>}

      <Header />
      
      <Flex
        w="100%"
        maxW={1440}
        mx="auto"
        flexDirection="column"
      >
        <ContinentBanner 
          name={continent.name}
          image={continent.bannerImage}
        />

        <Flex
          margin={['1.5rem 1rem 2rem', '1.5rem 1rem 2rem', '2.5rem 4.5rem', '5rem 8.75rem']}
          alignItems={['flex-start', 'center']}
          justifyContent='space-between'
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Bio 
            phrase={continent.continentBio}
          />

          <Info 
            countrys={continent.countrys}
            languages={continent.languages}
            rankCitiesVisited={continent.rankCitiesVisited}
            continentId={continent.id}
          />
        </Flex>

        <Cities 
          continentId={continent.id}
        />
      </Flex>
    </Flex>
  )
}