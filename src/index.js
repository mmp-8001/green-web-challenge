import Swiper from "swiper";
import "swiper/css";
import { staticDynamic } from "./dynamic/domains";

window.jQuery = $;
window.$ = $;
window.Swiper = Swiper;

require("bootstrap");

staticDynamic();
