// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import images
import sliderImg from '../../assets/image/slider.jpg';
import sliderImg2 from '../../assets/image/slider2.jpg';
import bannerImg from '../../assets/image/banner-image2.jpg';
import sliderImg3 from '../../assets/image/slider3.jpg';

function Sweeper() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      spaceBetween={30}
      centeredSlides={true}
      effect="fade"
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {/* Slides */}
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${sliderImg})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '100vh',
          }}
        ></div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${sliderImg2})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            height: '100vh',
          }}
        ></div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '100vh',
          }}
        ></div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${sliderImg3})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            height: '100vh',
          }}
        ></div>
      </SwiperSlide>

      {/* Overlay and Text */}
      <div className="overlay"></div>
      <div className="text_wrapper container">
        <span className="Services">
          We Provide Services <br /> and Solutions
        </span>
        <span className="Enterprise">To Enterprise</span>
      </div>

      {/* Pagination */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

export default Sweeper;
