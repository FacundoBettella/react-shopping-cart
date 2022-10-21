import React, { Fragment, memo } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Img, ImgContainer, Banner, Ptext } from "./styles";
import { useMediaQuery } from "@mui/material";

const Carousel = ({ listOfProducts = [], loading, onLoading }) => {

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Fragment>
      {loading ? (
        onLoading()
      ) : (
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
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
            listOfProducts.filter(product => product.stock > 0).map((currentProduct, index) => (
              <SwiperSlide key={index.toString()}>
                <ImgContainer>
                  <Img
                    src={currentProduct.image}
                    alt={currentProduct.title}
                  />
                  <Banner><Ptext>{currentProduct.stock <= 5 ? "Poco Stock" : "Stock Disponible"}</Ptext></Banner>
                </ImgContainer>
                
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </Fragment>
  );
};
export default memo(Carousel);
