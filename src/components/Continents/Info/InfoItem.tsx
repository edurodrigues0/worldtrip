import { Box, Image, Text, Tooltip } from "@chakra-ui/react";

interface InfoItemProps {
  infoToolTip?: boolean;
  infoAmount: number;
  infoAmountDescription: string;
}

export function InfoItem({
  infoAmount,
  infoAmountDescription,
  infoToolTip = false,
}: InfoItemProps) {
  return (
   <Box
      position="relative"
      h="6.25rem"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Text
        fontWeight={600}
        fontSize="3rem"
        color="Highlight"
        lineHeight="4.5rem"
      >
        {infoAmount}
      </Text>
      <Text
        as="span"
        fontSize="1.5rem"
        color="Dark.500"
        lineHeight="2.25rem"
      >
        {infoAmountDescription}
      </Text>
      {infoToolTip && (
        <Tooltip label='Mais Informações'>
          <Image
            src="/info.png" 
            alt="info" 
            position="absolute"
            right='-5'
            bottom='0.5'
          />
        </Tooltip>
      )}
    </Box>
  );
}
