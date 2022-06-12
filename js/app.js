const root = document.querySelector(':root')
const rootStyle = getComputedStyle(root)
const AMIMATION_SPEED = +rootStyle.getPropertyValue('--animation').replace('ms', '')

const HEADER_PANEL_BTN = document.getElementById('header-btn-panel')
const HEADER_PANEL_BTNS = document.getElementById('header-btns-panel')
const HEADER_BURGER_BTN = document.getElementById('burger')
const HEADER_BURGER_MENU = document.getElementById('burger-menu')
const PODCASTS_BTN = document.getElementById('podcsts-btn')
const TRANSMISSIONS_SELECT = document.getElementById('select')
const TRANSMISSIONS_CARDS = document.querySelectorAll('.transmissions__cards')
const ACCORDION_TABS = document.querySelectorAll('.accordion__tab__item')
const PRODACTION_ITEMS = document.querySelectorAll('.prodaction__item')

// !HEADER PANEL
let closing_panel = false
HEADER_PANEL_BTN.addEventListener('click', function () {
  if (closing_panel) {
    removeClass(this, 'active')
    removeClass(HEADER_PANEL_BTNS, 'active')
    setTimeout(() => {
      closing_panel = false
    }, AMIMATION_SPEED)
  } else {
    addClass(this, 'active')
    addClass(HEADER_PANEL_BTNS, 'active')
    setTimeout(() => {
      closing_panel = true
    }, AMIMATION_SPEED)
  }
})

// !HEADER BURGER
let closing_burger = false
HEADER_BURGER_BTN.addEventListener('click', function () {
  if (closing_burger) {
    removeClass(this, 'active')
    removeClass(HEADER_BURGER_MENU, 'active')
    setTimeout(() => {
      closing_burger = false
    }, AMIMATION_SPEED)
  } else {
    addClass(this, 'active')
    addClass(HEADER_BURGER_MENU, 'active')
    setTimeout(() => {
      closing_burger = true
    }, AMIMATION_SPEED)
  }
})

// !PODCASTS
PODCASTS_BTN.addEventListener('click', showPodcastsItems)
function showPodcastsItems() {
  const hideItems = document.querySelectorAll('.playlist_hide')
  if (hideItems.length !== 0) {
    for (let i = 0; i < hideItems.length; i++) {
      removeClass(hideItems[i], 'playlist_hide')
    }
    PODCASTS_BTN.removeEventListener('click', showPodcastsItems)
  }
}

// !TRANSMISSIONS
// select toggle
TRANSMISSIONS_SELECT.addEventListener('change', event => {
  switch (event.detail.value) {
    case 'Дмитрий Гутенберг':
      choiceActive(TRANSMISSIONS_CARDS, 0, 'active')
      break
    case 'Татьяна Флеганова':
      choiceActive(TRANSMISSIONS_CARDS, 1, 'active')
      break
    case 'Анна Васильева':
      choiceActive(TRANSMISSIONS_CARDS, 2, 'active')
      break
    case 'Пётр Дмитриевский':
      choiceActive(TRANSMISSIONS_CARDS, 3, 'active')
      break
    default:
      choiceActive(TRANSMISSIONS_CARDS, 0, 'active')
      break
  }
})

// !GUEST
// buttns toggle

// ACCORDION_TABS
ACCORDION_TABS.forEach(el => el.addEventListener('click', accordionTabsHandler))
function accordionTabsHandler() {
  ACCORDION_TABS.forEach(el => removeClass(el, 'active'))
  addClass(this, 'active')

  PRODACTION_ITEMS.forEach(el => removeClass(el, 'active'))
  PRODACTION_ITEMS.forEach(el => {
    if(+el.dataset.prodactionId === +this.dataset.accordionId) {
      addClass(el, 'active')
    }
  })
}



// functions
function choiceActive(arr, target, className) {
  for (let i = 0; i < arr.length; i++) {
    removeClass(arr[i], className)
  }
  addClass(arr[target], className)
}

function addClass(el, targetClass) {
  el.classList.add(targetClass)
}

function removeClass(el, targetClass) {
  el.classList.remove(targetClass)
}


updateAPI()
function updateAPI() {
  const choices = new Choices(TRANSMISSIONS_SELECT, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
    placeholder: false,
    // renderChoiceLimit: 4,
  })
  // accordion ju
  $("#accordion").accordion({
    active: 0,
    collapsible: true,

    icons: {
      "header": false,
      "activeHeader": false
    }
  })
}




// Playlists Initialize Swiper

// var swiperPlaylists = new Swiper(".playlists__tab__swiper__item", {
//   cssMode: true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// })

// Product Initialize Swiper

// var swiperProduct = new Swiper(".product__swiper", {
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// })