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
  </div>
`;
