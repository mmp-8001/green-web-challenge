import { Autoplay, FreeMode, Manipulation } from "swiper/modules";
import { formatPrice, useFetch } from "../plugin/helpers";
import { getDomains } from "../api/getDomains";

export const staticDynamic = () => {
  $(document).ready(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      loop: true,
      freeMode: true,
      centeredSlides: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: {
        992: {
          slidesPerView: 4.5
        },
        576: {
          slidesPerView: 2.5
        }
      },
      slidesPerView: 1.5,
      spaceBetween: 0,
      speed: 6000,
      modules: [FreeMode, Autoplay, Manipulation]
    });

    useFetch(getDomains, domains => {
      swiper.removeAllSlides();
      domains.forEach((value, index) => {
        swiper.addSlide(
          index,
          /* HTML */ `
            <div class="swiper-slide dir-ltr d-flex justify-content-center">
              <span class="font-weight-bold pr-1">${value.title}</span>
              <span>${formatPrice(value.price)}</span>
            </div>
          `
        );
      });
    });
  });
};

// placeholder for domains
export const placeholder = /* HTML */ `
  <div class="bg-white d-flex align-items-center">
    <div class="whitespace-nowrap space-x-3 d-flex align-items-center whitespace-nowrap ">
      <img src="${require("../assets/images/fire.svg")}" width="13" height="16" alt="" />
      <span class="font-weight-bold">داغ‌ترین پسوندها</span>
    </div>
    <div class="swiper w-100 mr-5 position-relative marquee-slides">
      <div class="swiper-wrapper divide-x">
        <div class="swiper-slide d-flex justify-content-center">
          <div class="domain-placeholder skeleton-loader"></div>
          <span class="sr-only">دامنه داغ</span>
        </div>
        <div class="swiper-slide d-flex justify-content-center">
          <div class="domain-placeholder skeleton-loader"></div>
          <span class="sr-only">دامنه داغ</span>
        </div>
        <div class="swiper-slide d-flex justify-content-center">
          <div class="domain-placeholder skeleton-loader"></div>
          <span class="sr-only">دامنه داغ</span>
        </div>
        <div class="swiper-slide d-flex justify-content-center">
          <div class="domain-placeholder skeleton-loader"></div>
          <span class="sr-only">دامنه داغ</span>
        </div>
        <div class="swiper-slide d-flex justify-content-center">
          <div class="domain-placeholder skeleton-loader"></div>
          <span class="sr-only">دامنه داغ</span>
        </div>
        <div class="swiper-slide d-flex justify-content-center">
          <div class="domain-placeholder skeleton-loader"></div>
          <span class="sr-only">دامنه داغ</span>
        </div>
      </div>
    </div>
  </div>
`;
