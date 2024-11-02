// init
const logo = require("../assets/images/logo.svg");
const links = [
  { name: "سرور اختصاصی" },
  { name: "سرور مجازی" },
  { name: "هاست" },
  { name: "ثبت دامنه" },
  { name: "خدمات ابری" },
  // { name: "دیگر خدمات" },
  // { name: "ارتباط با ما" },
  { name: "پایگاه دانش" }
];

// create navbar links
function createLinks() {
  return links
    .map(
      link => /* HTML */ `
        <li class="nav-item dropdown font-weight-semi-bold">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ${link.name}
            <i class="icon-angle-down" style="font-size: 24px;color: #A3ADC0"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      `
    )
    .join("");
}

export default /* HTML */ `
  <section class="bg-light navbar-shadow">
    <header class="container">
      <nav class="navbar sticky-top  navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
          <img src="${logo}" class="img-fluid" alt="..." />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            ${createLinks()}
          </ul>
        </div>

        <div class="d-flex align-items-center space-x-3">
          <button
            type="button"
            class="btn text-primary h-40 d-flex align-items-center justify-content-center w-40 btn-secondary"
          >
            <i class="icon-en" style="font-size: 20px"></i>
            <span class="sr-only">تغییر زبان</span>
          </button>
          <button
            type="button"
            class="btn text-primary h-40 d-flex align-items-center justify-content-center w-40 btn-secondary"
          >
            <i class="icon-call" style="font-size: 20px"></i>
            <span class="sr-only">ارتباط با ما</span>
          </button>
          <button type="button" class="btn btn-primary px-4 h-40">ورود | ثبت نام</button>
        </div>
      </nav>
    </header>
  </section>
`;