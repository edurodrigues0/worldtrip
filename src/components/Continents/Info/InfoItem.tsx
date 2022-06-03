import { Flex, Image, Text, Tooltip } from "@chakra-ui/react";

interface MoreCities {
  name: string;
}

interface InfoItemProps {
  infoToolTip?: boolean;
  infoAmount: number;
  infoAmountDescription: string;
  moreCities?: MoreCities;
}

export function InfoItem({
  infoAmount,
  infoAmountDescription,
  infoToolTip = false,
}: InfoItemProps) {
  return (
   <Flex
      position="relative"
      alignItems={["flex-start","center"]}
      flexDirection="column"
    >
      <Text
        fontWeight={600}
        fontSize={["1.5rem", "1.5rem", "2rem", "3rem"]}
        color="Highlight"
      >
        {infoAmount}
      </Text>
      <Text
        as="span"
        fontSize={["1.125rem", "1.125rem", "1.25rem", "1.5rem"]}
        fontWeight={400}
        color={["Dark.800","Dark.500"]}
      >
        {infoAmountDescription}
      </Text>
      {infoToolTip && (
        <Tooltip
          label="Mais informações"
          fontSize={14}
          textAlign="justify"
          p='1 1'
        >
          <Image
            src="/info.png" 
            alt="info"
            height={['0.625rem', '0.625rem', '1.1rem', '1rem']}
            position="absolute"
            right={['-5px', '-15px', '-6',  '-6']}
            bottom={['10%', '10%', '1.5', '2']}
          />
        </Tooltip>
      )}
    </Flex>
  );
}
