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

// Initialize Swiper

var swiper = new Swiper(".playlists__tab__swiper__item", {
  loop: true,
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