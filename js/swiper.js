const myhomeSwiper = new Swiper(".myhome-swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".myhome-swiper-button-next",
    prevEl: ".myhome-swiper-button-prev",
  },
  spaceBetween: 10,
})

const ourproductSwiper = new Swiper(".ourproduct-swiper", {
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: ".ourproduct-swiper-button-next",
    prevEl: ".ourproduct-swiper-button-prev",
  },
  spaceBetween: 10,

  breakpoints: {
    20: {
      slidesPerView: 1.5,
    },

    670: {
      slidesPerView: 4,
    },
    1360: {
      slidesPerView: 5,
    },
  },
})

const variantSwiper = new Swiper(".variant-swiper", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 10,

  breakpoints: {
    20: {
      slidesPerView: 1.5,
    },

    670: {
      slidesPerView: 4,
    },
    1360: {
      slidesPerView: 5,
    },
  },
})

const whyweSwiper = new Swiper(".whywe-swiper", {
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".whywe-swiper-button-next",
    prevEl: ".whywe-swiper-button-prev",
  },
  spaceBetween: 10,

  breakpoints: {
    20: {
      slidesPerView: 1.5,
    },

    670: {
      slidesPerView: 3,
    },
    1360: {
      slidesPerView: 3,
    },
  },
})
