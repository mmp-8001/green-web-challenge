export default /* HTML */ `
  <div class="customer-bg ">
    <div class="py-lg-5 py-3"></div>
    <div class="row">
      <div class="col-12">
        <h2 class="font-weight-bold text-center">مورد اعتماد مشتریان‌مان هستیم</h2>
        <h5 class="text-center font-weight-light">
          با سرویس های میزبانی ایران سرور با خیال راحت به توسعه کسب و کارتان بپردازید.
        </h5>
      </div>
    </div>
    ${require("../dynamic/customers-count").placeholder} ${require("../dynamic/customers-comment").placeholder}
    <div class="row pb-3 pt-5">
      <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
        <img src="${require("../assets/images/customer-1.png")}" alt="" />
      </div>
      <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
        <img src="${require("../assets/images/customer-2.png")}" alt="" />
      </div>
      <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
        <img src="${require("../assets/images/customer-3.png")}" alt="" />
      </div>
      <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
        <img src="${require("../assets/images/customer-4.png")}" alt="" />
      </div>
      <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
        <img src="${require("../assets/images/customer-5.png")}" alt="" />
      </div>
      <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
        <img src="${require("../assets/images/customer-6.png")}" alt="" />
      </div>
    </div>
    <div class="collapse" id="collapse-customers">
      <div class="row">
        <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
          <img src="${require("../assets/images/customer-1.png")}" alt="" />
        </div>
        <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
          <img src="${require("../assets/images/customer-2.png")}" alt="" />
        </div>
        <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
          <img src="${require("../assets/images/customer-3.png")}" alt="" />
        </div>
        <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
          <img src="${require("../assets/images/customer-4.png")}" alt="" />
        </div>
        <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
          <img src="${require("../assets/images/customer-5.png")}" alt="" />
        </div>
        <div class="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
          <img src="${require("../assets/images/customer-6.png")}" alt="" />
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12 d-flex justify-content-center">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#collapse-customers"
          aria-expanded="false"
          aria-controls="collapse-customers"
          class="btn text-primary bg-transparent h-40 d-flex align-items-center justify-content-center w-40 btn-secondary"
        >
          <svg
            width="20"
            height="20"
            style="overflow: visible"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.11816 8.64258L8.00018 13.8965L13.8821 8.64258"
              stroke="#A3ADC0"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="falling-arrow"
            />

            <path
              d="M2.11816 1.64258L8.00018 6.89648L13.8821 1.64258"
              stroke="#C6CDDA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="falling-arrow"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="py-5"></div>
  </div>
`;
