import React, { Fragment, memo } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Img, ImgContainer, Banner, Ptext } from "./styles";
import { useMediaQuery } from "@mui/material";
import { deviceSize } from "../../utils/viewportSizes";

const Carousel = ({ listOfProducts = [], loading, onLoading }) => {
  const MAX_WIDTH_TABLE_QUERY_BOOLEAN = useMediaQuery(deviceSize.tablet);

  return (
    <Fragment>
      {loading ? (
        onLoading()
      ) : (
        <Swiper
          slidesPerView={MAX_WIDTH_TABLE_QUERY_BOOLEAN ? 1 : 4}
          spaceBetween={MAX_WIDTH_TABLE_QUERY_BOOLEAN ? 0 : 2}
          slidesPerGroup={MAX_WIDTH_TABLE_QUERY_BOOLEAN ? 1 : 2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {listOfProducts.length > 0 &&
            listOfProducts
              .filter((product) => product.stock > 0)
              .map((currentProduct, index) => (
                <SwiperSlide key={index.toString()}>
                  <ImgContainer>
                    <Img
                      src={currentProduct.image}
                      alt={currentProduct.title}
                    />
                    <Banner>
                      <Ptext>
                        {currentProduct.stock <= 5
                          ? "Poco Stock"
                          : "Stock Disponible"}
                      </Ptext>
                    </Banner>
                  </ImgContainer>
                </SwiperSlide>
              ))}
        </Swiper>
      )}
    </Fragment>
  );
};
export default memo(Carousel);
