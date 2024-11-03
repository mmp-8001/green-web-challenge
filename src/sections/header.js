// init
const logo = require("../assets/images/logo.svg");
const links = [
  { name: "سرور اختصاصی" },
  { name: "سرور مجازی" },
  { name: "هاست" },
  { name: "ثبت دامنه" },
  { name: "خدمات ابری" },
  { name: "دیگر خدمات" },
  { name: "ارتباط با ما" },
  { name: "پایگاه دانش" }
];

// create navbar links
function createLinks() {
  return links
    .map(
      link => /* HTML */ `
        <li class="nav-item dropdown font-weight-semi-bold">
          <a
            class="nav-link w-100 dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>${link.name}</span>
            <i class="icon-angle-down mr-auto mr-lg-0" style="font-size: 24px;color: #A3ADC0"></i>
          </a>
          <div class="dropdown-menu dir-rtl text-right" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">رندوم</a>
            <a class="dropdown-item" href="#">رندوم</a>
            <a class="dropdown-item" href="#">رندوم</a>
          </div>
        </li>
      `
    )
    .join("");
}

export default /* HTML */ `
  <section class="bg-light fixed-top navbar-shadow">
    <header class="container">
      <nav class="navbar d-flex align-items-center justify-content-start  px-0 navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler p-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-lg-0 mr-2" href="/" aria-label="خانه">
          <img src="${logo}" width="103" height="19" alt="لوگو ایران سرور" />
        </a>
        <div class="flex-grow-1 d-lg-none"></div>

        <div class="d-flex order-1 order-lg-2 align-items-center space-x-3">
          <button
            type="button"
            class="btn text-primary h-40 d-flex align-items-center justify-content-center w-40 btn-secondary"
          >
            <i class="icon-en" style="font-size: 20px"></i>
            <span class="sr-only">تغییر زبان</span>
          </button>
          <a
            href="tel:+985131775"
            type="button"
            class="btn text-primary h-40 d-flex align-items-center justify-content-center w-40 btn-secondary"
          >
            <i class="icon-call" style="font-size: 20px"></i>
            <span class="sr-only">(شماره تماس: 05131775) ارتباط با ما</span>
          </a>
          <button type="button" class="btn btn-primary px-lg-4 px-2 whitespace-nowrap h-40">ورود | ثبت نام</button>
        </div>
        <div class="collapse order-2 order-lg-1 flex-grow-1 flex-wrap navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav my-4 my-lg-0 pr-0 pr-lg-3">
            ${createLinks()}
          </ul>
        </div>
      </nav>
    </header>
  </section>
  <div style="height: 80px"></div>
`;
