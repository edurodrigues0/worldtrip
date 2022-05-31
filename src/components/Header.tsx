import { Flex, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";

import { FiChevronLeft } from "react-icons/fi";
import { FormEvent } from "react";
import { useRouter } from "next/router";

export function Header() {
  const iconSizeWideVersion = useBreakpointValue({
    base: "3.5rem",
    lg: "2rem"
  })

  const router = useRouter();

  function handleReturnHome(e: FormEvent) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <Flex position="relative" as="header" w="100%" align="center" justify="center" h={["10rem","6.25rem"]}>
      {router.asPath === "/" ? null : (
        <IconButton
          variant="unstyled"
          aria-label="Redirect"
          colorScheme="pink"
          icon={<FiChevronLeft fontSize={iconSizeWideVersion} fontWeight="bold" />}
          fontSize="2rem"
          position="absolute"
          left="10%"
          onClick={handleReturnHome}
        />
      )}
      <Image src="/logo.png" alt="logo" h={["4.5rem", "2.87rem"]} w={["16rem", "11.5rem"]}/>
    </Flex>
  );
}
