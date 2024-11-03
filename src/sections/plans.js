export default /* HTML */ `
  <div class="plan-bg">
    <div class="p-3"></div>
    <section class="container ">
      <div class="row">
        <div class="col-12">
          <h2 class="font-weight-bold text-center">به دنبال میزبانی حرفه ای و مطمئن هستید؟</h2>
          <h5 class="text-center font-weight-light">
            با سرویس های میزبانی ایران سرور با خیال راحت به توسعه کسب و کارتان بپردازید
          </h5>
        </div>
      </div>

      <div class="row align-items-center py-5">
        <div class="col-lg-4 col-12">
          <div class="plan-card text-center align-items-center ml-lg-3 d-flex flex-column space-y-5">
            <img src="${require("../assets/images/virtual_server.svg")}" width="55" height="55" alt="" />
            <div>
              <h1 class="m-0 text-primary font-weight-bold">سرور اختصاصی</h1>
              <p class="pt-lg-4 pt-2 mb-0 text-desc">DEDICATED SERVER</p>
            </div>
            <div class="">
              <h3 class="font-weight-bold">منابع اختصاصی، حداکثر قدرت</h3>
              <p class="d-flex font-iran items pb-0 pt-3 flex-column space-y-1">
                <span>بدون محدودیت در دسترسی </span>
                <span>نصب نرم افزارهای خاص</span>
              </p>
            </div>
            <button type="button" class="btn btn-secondary text-primary font-weight-semi-bold px-4 h-40">
              مشاهده پلن ها
            </button>
          </div>
        </div>
        <div class="col-lg-4 py-4 col-12">
          <div class="plan-card scale-up text-center align-items-center d-flex flex-column space-y-5">
            <img src="${require("../assets/images/shared_hosting.svg")}" width="55" height="55" alt="" />
            <div class="text-warning">
              <h1 class="m-0 font-weight-bold">هاست اشتراکی</h1>
              <p class="pt-lg-4 pt-2 mb-0">SHARED HOSTING</p>
            </div>
            <div class="">
              <h3 class="font-weight-bold">چابکی، سادگی و پایداری</h3>
              <p class="d-flex font-iran items pb-0 pt-3 flex-column space-y-1">
                <span> نصب رایگان سیستم مدیریت سایت</span>
                <span>برای اطمینان بیشتر RAID سیستم</span>
                <span>کنترل‌پنل مدیریت هاست</span>
              </p>
            </div>
            <button type="button" class="btn btn-primary px-4 h-40">مشاهده پلن ها</button>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="plan-card text-center align-items-center mr-lg-3 d-flex flex-column space-y-5">
            <img src="${require("../assets/images/virtual_server.svg")}" width="55" height="55" alt="" />
            <div>
              <h1 class="m-0 text-primary font-weight-bold">سرور مجازی</h1>
              <p class="pt-lg-4 pt-2 mb-0 text-desc">VPS</p>
            </div>
            <div class="">
              <h3 class="font-weight-bold">سریع، قابل سفارشی سازی</h3>
              <p class="d-flex font-iran items pb-0 pt-3 flex-column space-y-1">
                <span>منابع اختصاصی </span>
                <span>امکان افزایش منابع</span>
              </p>
            </div>
            <button type="button" class="btn btn-secondary text-primary font-weight-semi-bold px-4 h-40">
              مشاهده پلن ها
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="p-2"></div>
  </div>
`;
