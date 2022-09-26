import React, { Fragment } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Img, ImgContainer } from "./styles";


const Carousel = ({ listOfProducts = [], loading, onLoading }) => {
  return (
    <Fragment>
        {loading ? (
          onLoading()
          ) : (
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {listOfProducts.length > 0 &&
              listOfProducts.map((currentProduct, index) => (
                <SwiperSlide key={index.toString()}>
                  <ImgContainer>
                    <Img
                      src={require(`../../assets/${currentProduct.title}.jpg`)}
                      alt={currentProduct.title}
                    />
                  </ImgContainer>
                </SwiperSlide>
              ))}
          </Swiper>
      )}
    </Fragment>
  );
};
export default Carousel;
