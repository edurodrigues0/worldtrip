import { Button, Image } from '@chakra-ui/react';

interface myButtonProps {
  image: string;
  alt: string;
}

export function MyButton({image, alt}: myButtonProps) {
  return(
    <Button
      variant='unstyled'
      h='3.75rem'
      w='3.75rem'
      m='0 5px'
      _focus={{
        boxShadow:
          '0 0 1px 2px #FFBA08, 0 1px 1px rgba(0, 0, 0, .15)',
      }}
    >
    <Image 
      src={image}
      alt={alt}
    />
  </Button>
  );
}