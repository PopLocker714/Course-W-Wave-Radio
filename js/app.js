// accordion ju
$("#accordion").accordion({
  // active: false,
  active: 0,
  collapsible: true,


  icons: {
    "header": false,
    "activeHeader": false
  }
})

// Playlists Initialize Swiper

var swiperPlaylists = new Swiper(".playlists__tab__swiper__item", {
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

})

// Product Initialize Swiper

var swiperProduct = new Swiper(".product__swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },

})