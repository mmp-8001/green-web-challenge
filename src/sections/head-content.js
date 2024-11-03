export default /* HTML */ `
  <section class="container">
    <h1 class="text-center my-5 font-weight-bold">با پشتیبانی حرفه ای نزدیک به دو دهه در کنار شما هستیم</h1>
    <div class="w-md-50 w-100 mx-auto">
      <h5 class="text-detail text-center my-4 font-iran">کسب و کار آنلاینتان را با ثبت یک دامنه شروع کنید</h5>
      <div class="position-relative dir-ltr mb-3">
        <button
          type="button"
          style="z-index: 10;right: 8px"
          class="btn text-primary position-absolute h-48 d-flex align-items-center justify-content-center translate-y-center w-48 btn-secondary"
        >
          <i class="icon-search" style="font-size: 20px"></i>
          <span class="sr-only">تغییر زبان</span>
        </button>
        <input
          type="text"
          style="padding-right: 62px"
          class="form-control dir-rtl text-lg-center pr-lg-0 text-right font-iran"
          placeholder="نام دامنه را برای ثبت یا انتقال وارد کنید"
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </div>
      <div>${require("../dynamic/domains").placeholder}</div>
    </div>
    <h3 class="text-center mt-4 text-primary font-weight-bold">
      <img class="ml-1" src="${require("../assets/images/discount.svg")}" width="24" height="24" alt="تصویر تخفیف" />
      <span>مشاهده پسوند های تخفیف دار</span>
    </h3>
    <img
      src="${require("../assets/images/head-bg.svg")}"
      width="1192"
      height="407"
      class="img-fluid "
      alt="تصویر سازمان"
    />
    <div class="py-5"></div>
  </section>
`;
