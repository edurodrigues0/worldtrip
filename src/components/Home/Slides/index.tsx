import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Link, Text } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./styles.module.css"
import { useContinent } from "../../../context/ContinentContext";

export function Slides() {
  const {continents, selectedContinent} = useContinent()

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation={true}
      pagination={{ clickable: true}}
      className={styles.mySwiper}
    >
      {continents.map((continent) => {
        return (
          <SwiperSlide 
            onClick={() => selectedContinent(continent.id)}
            key={continent.id}
          >
            <Link
              height="100%"
              width="100%"
              color="Light.200"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              bgImage={continent.slideImage}
              bgRepeat="round"
              _hover={{ textDecoration: 'none'}}
              href={`/continent/${continent.slug}`}
            >
              <Text fontSize="3rem" fontWeight="bold">
                {continent.name}
              </Text>
              <Text fontSize="1.5rem" fontWeight="bold">
                {continent.continentPhrase}
              </Text>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
