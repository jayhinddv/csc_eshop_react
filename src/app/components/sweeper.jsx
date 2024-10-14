// Import images
import sliderImg from '../../assets/image/slider.jpg';
import sliderImg2 from '../../assets/image/slider2.jpg';
import bannerImg from '../../assets/image/banner-image2.jpg';
import sliderImg3 from '../../assets/image/slider3.jpg';

function Sweeper() {
  return (
    <>
      <div className="swiper-wrapper">
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(${sliderImg})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(${sliderImg2})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(${sliderImg3})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="overlay"></div>
        <div className="text_wrapper container">
          <span className="Services">
            We Provide Services <br />
            and Solutions
          </span>
          <span className="Enterprise">To Enterprise</span>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </>
  );
}

export default Sweeper;
