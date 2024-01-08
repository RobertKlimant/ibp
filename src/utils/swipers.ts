import 'swiper/css';

import Swiper from 'swiper';

export const swipers = () => {
  const gallery_settings = {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
    },
  };

  const swiper_gallery = document.querySelector('[swiper-option="gallery"]') as HTMLElement;
  new Swiper(swiper_gallery, gallery_settings);

  const swiper_services = document.querySelector('[swiper-option="service"]') as HTMLElement;
  new Swiper(swiper_services, gallery_settings);

  const swiper_testimonial = document.querySelector('[swiper-option="testimonial"]') as HTMLElement;
  new Swiper(swiper_testimonial, {
    spaceBetween: 24,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    loop: true,
  });

  const swiper_blog = document.querySelector('[swiper-option="blog"]') as HTMLElement;
  new Swiper(swiper_blog, {
    spaceBetween: 24,
    slidesPerView: 3.1,
  });
};
