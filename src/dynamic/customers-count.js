import { formatPrice, useFetch } from "../plugin/helpers";
import { getDomains } from "../api/getDomains";

export const makeCustomerCount = () => {};

export const placeholder = /* HTML */ `
  <section class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 py-3">
        <div class="bg-white customer-card d-flex justify-content-center align-items-center flex-column">
          <span class="count-up"><span class="number">1800</span>+</span>
          <span>مشتری از سراسر ایران </span>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 py-3">
        <div class="bg-white customer-card d-flex justify-content-center align-items-center flex-column">
          <div class="count-up"><span class="number">1800</span><span>+</span></div>
          <span>مشتری از سراسر ایران </span>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 py-3">
        <div class="bg-white customer-card d-flex justify-content-center align-items-center flex-column">
          <span class="count-up"><span class="number">1800</span>+</span>
          <span>مشتری از سراسر ایران </span>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 py-3">
        <div class="bg-white customer-card d-flex justify-content-center align-items-center flex-column">
          <span class="count-up"><span class="number">1800</span>+</span>
          <span>مشتری از سراسر ایران </span>
        </div>
      </div>
    </div>
  </section>
`;
