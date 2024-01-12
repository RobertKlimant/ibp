// import 'swiper/css';

// import Swiper from 'swiper';

import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade];

  const gallery_settings = {
    modules: swiperModules,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
    },
  };
  const blog_testimonial_settings = {
    spaceBetween: 24,
    slidesPerView: 3,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.03,

        spaceBetween: 12,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.03,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 992px
      991: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  };

  const swipers: NodeListOf<HTMLElement> = document.querySelectorAll('.swiper');
  swipers.forEach((swiperEl: HTMLElement) => {
    const attributeValue = swiperEl.getAttribute('swiper-option');

    switch (attributeValue) {
      case 'gallery':
        new Swiper(swiperEl, gallery_settings);
        break;
      case 'testimonial':
        new Swiper(swiperEl, blog_testimonial_settings);
        break;
      case 'blog':
        new Swiper(swiperEl, blog_testimonial_settings);
        break;
      default:
        break;
    }
  });
};
