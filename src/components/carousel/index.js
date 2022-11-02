import React, { Fragment, memo } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Img, ImgContainer, Banner, Ptext } from "./styles";
import useResponsiveSize from "../../hooks/useResponsiveSize";

const Carousel = ({ listOfProducts = [], loading, onLoading }) => {
  const [deviceSizeState] = useResponsiveSize();

  return (
    <Fragment>
      {loading ? (
        onLoading()
      ) : (
        <Swiper
          slidesPerView={deviceSizeState ? 1 : 4}
          slidesPerGroup={deviceSizeState ? 1 : 4}
          spaceBetween={deviceSizeState ? 0 : 30}
          loop={true}
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
                <SwiperSlide
                  key={currentProduct.id}
                  style={{ margin: "0px 20px" }}
                >
                  <ImgContainer key={`${currentProduct.id}-${index}`}>
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
