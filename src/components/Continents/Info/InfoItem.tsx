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
      alignItems={["flex-start","center"]}
      flexDirection="column"
    >
      <Text
        fontWeight={600}
        fontSize={["5.5rem","3rem"]}
        color="Highlight"
        lineHeight="4.5rem"
        mb={['3rem', 0]}
      >
        {infoAmount}
      </Text>
      <Text
        as="span"
        fontSize={["4rem","1.5rem"]}
        color={["Dark.800","Dark.500"]}
        lineHeight="2.25rem"
      >
        {infoAmountDescription}
      </Text>
      {infoToolTip && (
        <Tooltip label='Mais Informações'>
          <Image
            src="/info.png" 
            alt="info"
            height={['2.2rem','1rem']}
            position="absolute"
            right={['-60px','-5']}
            bottom={['-60px','0.5']}
          />
        </Tooltip>
      )}
    </Box>
  );
}
