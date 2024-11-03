import { Autoplay, Manipulation } from "swiper/modules";

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
        },
        576: {
          slidesPerView: 2.5
        }
      },
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 3000,
      modules: [Autoplay, Manipulation]
    });
    swiper.disable();
  });
};

export const placeholder = /* HTML */ `
  <div class="container">
    <div id="comments-swiper" class="swiper position-relative marquee-slides">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section font-iran font-weight-light">
              <p>
                ایران سرور یکی از بهترین راهکارها برای کمک کردن به کسب و کار های اینترنتی هست و از وقتی که ما سایت های
                خودمون رو به سرور های ایران سرور منتقل کردیم دغدغه ها و ...مشکلاتی که هر کسب و کار آنلاینی داره
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section font-iran font-weight-light">
              <p>
                ایران سرور یکی از بهترین راهکارها برای کمک کردن به کسب و کار های اینترنتی هست و از وقتی که ما سایت های
                خودمون رو به سرور های ایران سرور منتقل کردیم دغدغه ها و ...مشکلاتی که هر کسب و کار آنلاینی داره
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section font-iran font-weight-light">
              <p>
                ایران سرور یکی از بهترین راهکارها برای کمک کردن به کسب و کار های اینترنتی هست و از وقتی که ما سایت های
                خودمون رو به سرور های ایران سرور منتقل کردیم دغدغه ها و ...مشکلاتی که هر کسب و کار آنلاینی داره
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section font-iran font-weight-light">
              <p>
                ایران سرور یکی از بهترین راهکارها برای کمک کردن به کسب و کار های اینترنتی هست و از وقتی که ما سایت های
                خودمون رو به سرور های ایران سرور منتقل کردیم دغدغه ها و ...مشکلاتی که هر کسب و کار آنلاینی داره
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="position-relative comment-card">
            <div class="comment-section font-iran font-weight-light">
              <p>
                ایران سرور یکی از بهترین راهکارها برای کمک کردن به کسب و کار های اینترنتی هست و از وقتی که ما سایت های
                خودمون رو به سرور های ایران سرور منتقل کردیم دغدغه ها و ...مشکلاتی که هر کسب و کار آنلاینی داره
              </p>
            </div>
            <svg class="arrow" width="30" height="14" viewBox="0 0 30 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6132 12.2226C16.6442 14.2811 13.3558 14.2811 11.3868 12.2226L1.1542e-06 0.318183L30 0.318186L18.6132 12.2226Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
