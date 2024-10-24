import Swiper from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"

const reviewsSwiper = new Swiper(".reviewsSwiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".nextReview",
    prevEl: ".prevReview",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
})
