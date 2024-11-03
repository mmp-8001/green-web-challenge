import { Autoplay, Manipulation } from "swiper/modules";
import { useFetch } from "../plugin/helpers";
import { getCustomers } from "../api/getDomains";

export const makeCustomerComment = () => {
  $(document).ready(() => {
    const swiper = new Swiper("#comments-swiper", {
      // Optional parameters
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      breakpoints: {
        992: {
          slidesPerView: 2
        }
      },
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 3000,
      modules: [Autoplay, Manipulation]
    });
    useFetch(getCustomers, ({ comments }) => {
      swiper.removeAllSlides();
      comments.forEach((value, index) => {
        swiper.addSlide(
          index,
          /* HTML */ `
            <div class="swiper-slide">
              <div class="position-relative comment-card">
                <div class="comment-section font-iran font-weight-light">
                  <p class="text-pre-line">${value.text}</p>
                </div>
                <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
                  />
                </svg>
              </div>
              <div class="d-flex comment-info pt-3 align-items-center">
                <div class="image mx-3"></div>
                <span class="name">${value.name}</span>
                <span class="icon-circle mx-2"></span>
                <span class="role">${value.role}</span>
              </div>
            </div>
          `
        );
      });
    });
  });
};

export const placeholder = /* HTML */ `
  <div class="container">
    <div id="comments-swiper" class="swiper position-relative marquee-slides not">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section h-100 font-iran font-weight-light">
              <p class="w-100 d-flex flex-column h-100 justify-content-around">
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-50">&nbsp</span>
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
          <div class="d-flex comment-info pt-3 align-items-center">
            <div class="image mx-3"></div>
            <span class="name skeleton-loader w-25">&nbsp</span>
            <span class="icon-circle mx-2"></span>
            <span class="role skeleton-loader w-40">&nbsp</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section h-100 font-iran font-weight-light">
              <p class="w-100 d-flex flex-column h-100 justify-content-around">
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-50">&nbsp</span>
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
          <div class="d-flex comment-info pt-3 align-items-center">
            <div class="image mx-3"></div>
            <span class="name skeleton-loader w-25">&nbsp</span>
            <span class="icon-circle mx-2"></span>
            <span class="role skeleton-loader w-40">&nbsp</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section h-100 font-iran font-weight-light">
              <p class="w-100 d-flex flex-column h-100 justify-content-around">
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-50">&nbsp</span>
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
          <div class="d-flex comment-info pt-3 align-items-center">
            <div class="image mx-3"></div>
            <span class="name skeleton-loader w-25">&nbsp</span>
            <span class="icon-circle mx-2"></span>
            <span class="role skeleton-loader w-40">&nbsp</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section h-100 font-iran font-weight-light">
              <p class="w-100 d-flex flex-column h-100 justify-content-around">
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-50">&nbsp</span>
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
          <div class="d-flex comment-info pt-3 align-items-center">
            <div class="image mx-3"></div>
            <span class="name skeleton-loader w-25">&nbsp</span>
            <span class="icon-circle mx-2"></span>
            <span class="role skeleton-loader w-40">&nbsp</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section h-100 font-iran font-weight-light">
              <p class="w-100 d-flex flex-column h-100 justify-content-around">
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-100">&nbsp</span>
                <span class="skeleton-loader w-50">&nbsp</span>
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
          <div class="d-flex comment-info pt-3 align-items-center">
            <div class="image mx-3"></div>
            <span class="name skeleton-loader w-25">&nbsp</span>
            <span class="icon-circle mx-2"></span>
            <span class="role skeleton-loader w-40">&nbsp</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
