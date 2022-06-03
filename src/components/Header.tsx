import { Flex, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";

import { FiChevronLeft } from "react-icons/fi";
import { FormEvent } from "react";
import { useRouter } from "next/router";

export function Header() {
  const iconSizeWideVersion = useBreakpointValue({
    sm: "1rem",
    md: "2rem",
    lg: "2rem"
  })

  const router = useRouter();

  function handleReturnHome(e: FormEvent) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <Flex
      position="relative"
      as="header"
      w="100%"
      align="center"
      justify="center"
      h={["3.125rem", "3.125rem", "6.25rem"]}
    >
      {router.asPath === "/" ? null : (
        <IconButton
          variant="unstyled"
          aria-label="Redirect"
          colorScheme="pink"
          icon={<FiChevronLeft fontSize={iconSizeWideVersion} fontWeight="bold" />}
          position="absolute"
          left="10%"
          onClick={handleReturnHome}
          _focus={{
            boxShadow: '0 0 1px 2px rgba(255, 186, 8, .65), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        />
      )}
      <Image
        src="/logo.png"
        alt="logo"
        h={["1.25rem", "1.6rem", "2.87rem"]}
        w={["6rem", "8rem", "11.5rem"]}
      />
    </Flex>
  );
}
