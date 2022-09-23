import React, { useEffect } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { assetsUtils } from "../../utils/assetsUtil";
import notFound from "../../assets/not found.jpg";

const Carousel = ({ listOfProducts = [] }) => {
  const findProductImage = (productTitle) => {
    const foundProductImage = assetsUtils.find(
      (element) => element.name.toLowerCase() === productTitle.toLowerCase()
    );
    if (foundProductImage !== undefined) {
      return <img src={foundProductImage.src} alt={findProductImage.name} />;
    } else return <img src={notFound} alt="not found" />;
  };

  useEffect(() => {}, [listOfProducts]);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      slidesPerGroup={5}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {listOfProducts.length > 0 ? (
        listOfProducts.map((currentProduct) => (
          <SwiperSlide>
            {findProductImage(currentProduct.title)}
            {currentProduct.title}
          </SwiperSlide>
        ))
      ) : (
        <p>Loading</p>
      )}
    </Swiper>
  );
};
export default Carousel;
