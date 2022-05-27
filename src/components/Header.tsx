import { Flex, IconButton, Image, Link } from '@chakra-ui/react';

import { FiChevronLeft } from 'react-icons/fi';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();

  function handleReturnHome(e: FormEvent) {
    e.preventDefault();
    router.push('/')
  }
  
  return(
    <Flex
      as='header'
      w='100%'
      align='center'
      justify='center'
      h='6.25rem'
    >
      {router.asPath === '/' ?
        null
        : 
        <IconButton
          variant='unstyled'
          aria-label='Redirect'
          colorScheme='pink'
          icon={<FiChevronLeft />}
          fontSize='2rem'
          position='absolute'
          left='20%'
          onClick={handleReturnHome}
        />
      }

      <Link
        href='/'
      >
        <Image 
          src='/logo.png' alt='logo'
          h='2.87rem'
          w='11.5rem'
        />
      </Link>
    </Flex>
  );
}