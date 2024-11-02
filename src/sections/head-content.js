export default /* HTML */ `
  <section class="container">
    <h1 class="text-center my-5 font-weight-bold">با پشتیبانی حرفه ای نزدیک به دو دهه در کنار شما هستیم</h1>
    <div class="w-md-75 w-100 mx-auto">
      <h2 class="text-detail text-center my-4 font-iran">کسب و کار آنلاینتان را با ثبت یک دامنه شروع کنید</h2>
      <div class="input-group dir-ltr mb-3">
        <input
          type="text"
          class="form-control dir-rtl text-center font-iran"
          placeholder="نام دامنه را برای ثبت یا انتقال وارد کنید"
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </div>
      <div>${require("../dynamic/domains").placeholder}</div>
    </div>
    <h3 class="text-center my-3 text-primary font-weight-bold">مشاهده پسوند های تخفیف دار</h3>
    <img
      src="${require("../assets/images/head-bg.svg")}"
      width="1192"
      height="407"
      class="img-fluid"
      alt="تصویر سازمان"
    />
  </section>
`;
