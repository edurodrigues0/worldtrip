import { Divider, Flex, Text } from "@chakra-ui/react";

import Head from 'next/head'
import { Header } from "../components/Header";
import { HomeBanner } from "../components/Home/HomeBanner";
import { Slides } from "../components/Home/Slides";
import { TravelSection } from "../components/Home/TravelSection";

export default function Home() {
  return (
    <Flex
      direction="column"
    >
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Header />
      <Flex
        w="100%"
        maxW={1440}
        mx="auto"
        flexDirection="column"
      >
        <HomeBanner />

        <TravelSection />

        <Divider
          w={["3.75rem", "5.6rem"]}
          h={0.5}
          bg="Dark.700"
          m="0 auto"
        />

        <Text
          as="h1"
          fontSize={["1.25rem", "2.25rem"]}
          fontWeight={500}
          align="center"
          mt={6}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>

        <Slides />
      </Flex>
    </Flex>
  );
}
