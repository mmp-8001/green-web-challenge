import Swiper from "swiper";
import "swiper/css";
import { staticDynamic } from "./dynamic/domains";
import { makeCustomerCount } from "./dynamic/customers-count";
import { makeCustomerComment } from "./dynamic/customers-comment";

window.jQuery = $;
window.$ = $;
window.Swiper = Swiper;

require("bootstrap");

staticDynamic();
makeCustomerCount();
makeCustomerComment();
