import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

interface ContinentsProps {
  id: number;
  name: string;
  slug: string;
  continentPhrase: string;
  slideImage: string;
}

interface ContinentProviderProps {
  children: ReactNode;
}

interface ContinentContextData {
  selectedContinent: (id: number) => void;
  continents: ContinentsProps[];
  continentID: number;
}

const ContinentContext = createContext<ContinentContextData>({} as ContinentContextData)

export function ContinentProvider({children}: ContinentProviderProps) {
  const [continents, setContinents] = useState<ContinentsProps[]>([]);
  const [continentID, setContinentID] = useState(-1)

  useEffect(() => {
    api.get('/continents').then(response => {
      setContinents(response.data.continents);
    })
  }, [])

  function selectedContinent(id: number) {
    setContinentID(id);
  }

  return(
    <ContinentContext.Provider
      value={{
        continentID,
        continents,
        selectedContinent
      }}
    >
      {children}
    </ContinentContext.Provider>
  )
}

export function useContinent() {
  const context = useContext(ContinentContext);


  return context;
}