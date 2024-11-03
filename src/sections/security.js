export default /* HTML */ `
  <div class="plan-bg">
    <section class="container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="d-flex h-100 justify-content-center flex-column">
            <div class="d-flex mb-lg-5 align-items-center">
              <img
                class="d-none d-lg-block"
                src="${require("../assets/images/shield.svg")}"
                width="40"
                height="40"
                alt=""
              />
              <div class="d-flex flex-column pr-lg-2">
                <h2 class="font-weight-bold text-center mb-0 text-lg-right pb-1">نگران امنیت وب‌سایت‌تان باشید!</h2>
                <h5 class="text-center font-weight-light mb-lg-0 mb-3 pt-1">
                  ایران سرور با ابزارهای روزآمد؛ سیاست‌های امنیتی استاندارد؛ سخت‌افزارهای امنیتی برتر؛ حداکثر امنیت را
                  برای شما به ارمغان می‌آورد.
                </h5>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-6 pb-3">
                <div class="d-flex security-card align-items-center">
                  <i class="icon-tick text-info ml-2"></i>
                  <span>سرویس های Anti DDos سخت افزاری و نرم افزاری </span>
                </div>
              </div>
              <div class="col-12 col-lg-6 pb-3">
                <div class="d-flex security-card flex-nowrap align-items-center">
                  <i class="icon-tick text-info ml-2"></i>
                  <span>لایسنس های امنیتی اورجینال شامل SSL و آنتی شل </span>
                </div>
              </div>
              <div class="col-12 col-lg-6 pb-3 pb-lg-0 pt-lg-3">
                <div class="d-flex security-card align-items-center">
                  <i class="icon-tick text-info ml-2"></i>
                  <span>کانفیگ های امنیتی برای تشخیص و جلوگیری از حملات </span>
                </div>
              </div>
              <div class="col-12 col-lg-6 pt-lg-3">
                <div class="d-flex security-card align-items-center">
                  <i class="icon-tick text-info ml-2"></i>
                  <span>مشــــاوره جـهت مدیریت ریسک و امنــیت سرورها </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 d-none d-lg-block">
          <img src="${require("../assets/images/security.svg")}" width="447" class="img-fluid" height="410" alt="" />
        </div>
      </div>
    </section>
  </div>
`;
