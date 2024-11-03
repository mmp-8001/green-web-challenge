import { useFetch } from "../plugin/helpers";
import { getCustomers } from "../api/getDomains";

export const makeCustomerCount = () => {
  $(document).ready(() => {
    useFetch(getCustomers, ({ counts }) => {
      let elements = "";
      for (let val of counts) {
        elements += `
        <div class="col-12 col-md-6 col-lg-3 py-3">
          <div class="bg-white customer-card d-flex justify-content-center align-items-center flex-column">
            <span class="count-up"><span class="number">${val.count}</span>+</span>
            <span>${val.title}</span>
          </div>
        </div>
          `;
      }

      $("#customer-count").html(elements);
    });
  });
};

export const placeholder = /* HTML */ `
  <section class="container py-4">
    <div id="customer-count" class="row">
      <div class="col-12 col-md-6 col-lg-3 py-3">
        <div
          class="bg-white count-placeholder customer-card d-flex justify-content-center align-items-center flex-column"
        >
          <div class="count-up skeleton-loader mb-2"></div>
          <span class="skeleton-loader"></span>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 py-3">
        <div
          class="bg-white count-placeholder customer-card d-flex justify-content-center align-items-center flex-column"
        >
          <div class="count-up skeleton-loader mb-2"></div>
          <span class="skeleton-loader"></span>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 py-3">
        <div
          class="bg-white count-placeholder customer-card d-flex justify-content-center align-items-center flex-column"
        >
          <div class="count-up skeleton-loader mb-2"></div>
          <span class="skeleton-loader"></span>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 py-3">
        <div
          class="bg-white count-placeholder customer-card d-flex justify-content-center align-items-center flex-column"
        >
          <div class="count-up skeleton-loader mb-2"></div>
          <span class="skeleton-loader"></span>
        </div>
      </div>
    </div>
  </section>
`;
