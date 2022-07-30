const root = document.querySelector(':root')
const rootStyle = getComputedStyle(root)
const AMIMATION_SPEED = +rootStyle.getPropertyValue('--animation').replace('ms', '')


const headerPanelBtn = document.getElementById('header-btn-panel')
const headerPanelBtns = document.getElementById('header-btns-panel')
const headerBurgerBtn = document.getElementById('burger')
const headerBurgerMenu = document.getElementById('burger-menu')
const podcastsBtn = document.getElementById('podcsts-btn')
const transmissionsSelect = document.getElementById('select')
const transmissionsCards = document.querySelectorAll('.transmissions__cards')
const accordionTabs = document.querySelectorAll('.accordion__tab__item')
const prodactionItems = document.querySelectorAll('.guest__info__item')

// !HEADER PANEL
let closingPanel = false
headerPanelBtn.addEventListener('click', function () {
  if (closingPanel) {
    removeClass(this, 'active')
    removeClass(headerPanelBtns, 'active')
    setTimeout(() => {
      closingPanel = false
    }, AMIMATION_SPEED)
  } else {
    addClass(this, 'active')
    addClass(headerPanelBtns, 'active')
    setTimeout(() => {
      closingPanel = true
    }, AMIMATION_SPEED)
  }
})

// !HEADER BURGER
let closing_burger = false
headerBurgerBtn.addEventListener('click', function () {
  if (closing_burger) {
    removeClass(this, 'active')
    removeClass(headerBurgerMenu, 'active')
    setTimeout(() => {
      closing_burger = false
    }, AMIMATION_SPEED)
  } else {
    addClass(this, 'active')
    addClass(headerBurgerMenu, 'active')
    setTimeout(() => {
      closing_burger = true
    }, AMIMATION_SPEED)
  }
})

// !PODCASTS
podcastsBtn.addEventListener('click', showPodcastsItems)
function showPodcastsItems() {
  const hideItems = document.querySelectorAll('.podcasts__cards__group-hide')
  if (hideItems.length !== 0) {
    for (let i = 0; i < hideItems.length; i++) {
      removeClass(hideItems[i], 'podcasts__cards__group-hide')
    }
    podcastsBtn.removeEventListener('click', showPodcastsItems)
  }
}

// !TRANSMISSIONS
// select toggle
transmissionsSelect.addEventListener('change', event => {
  switch (event.detail.value) {
    case 'Дмитрий Гутенберг':
      choiceActive(transmissionsCards, 0, 'active')
      break
    case 'Татьяна Флеганова':
      choiceActive(transmissionsCards, 1, 'active')
      break
    case 'Анна Васильева':
      choiceActive(transmissionsCards, 2, 'active')
      break
    case 'Пётр Дмитриевский':
      choiceActive(transmissionsCards, 3, 'active')
      break
    default:
      choiceActive(transmissionsCards, 0, 'active')
      break
  }
})

// !GUEST
// buttns toggle

// accordionTabs
accordionTabs.forEach(el => el.addEventListener('click', accordionTabsHandler))
function accordionTabsHandler() {
  accordionTabs.forEach(el => removeClass(el, 'active'))
  addClass(this, 'active')

  prodactionItems.forEach(el => removeClass(el, 'active'))
  prodactionItems.forEach(el => {
    if(+el.dataset.prodactionId === +this.dataset.accordionId) {
      addClass(el, 'active')
    }
  })
}

updateAPI()
function updateAPI() {
  const choices = new Choices(transmissionsSelect, {
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

// !PLAYLISTS
window.addEventListener('resize', checkSreenSize, false)
// Playlists Initialize Swiper
const swiperItem = Array.from(document.querySelectorAll('.playlists__tab__swiper__item'))
const arrSlidersPlaylists = swiperItem.map(el => {
  return new Swiper(el, {
    cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  })
})


const playlistsTabs = Array.from(document.querySelectorAll('.playlists__tab__item'))
const playlistsTabsMobile = Array.from(document.querySelectorAll('.playlists__tab__genre'))

playlistsTabs.forEach(el => el.addEventListener('click', playlistsTabsHandler))
playlistsTabsMobile.forEach(el => el.addEventListener('click', playlistsTabsHandler))
function playlistsTabsHandler() {
  const item = this

  playlistsTabs.forEach(el => removeClass(el, 'active'))
  playlistsTabsMobile.forEach(el => removeClass(el, 'active'))
  arrSlidersPlaylists.forEach(el => {
    removeClass(el.el, 'active')
    if(+item.dataset.targetNumber === +el.el.dataset.number) {
      addClass(item, 'active')
      addClass(el.el, 'active')
    }
  })
}

// !Product Initialize Swiper
var swiperProduct = new Swiper(".product__swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

function checkSreenSize() {
  if (innerWidth < 1249) {
    arrSlidersPlaylists.forEach(el => el.navigation.destroy())
  } else {
    arrSlidersPlaylists.forEach(el => el.navigation.init())
  }
  if (innerWidth < 1000) {
    swiperProduct.pagination.destroy()
  } else {
    swiperProduct.pagination.init()
  }

  if(innerWidth < 580) {
    // accordion ju
    $("#accordion").accordion({
      active: 1,
    })
  }
}
checkSreenSize()

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

// var a,w=document.createTreeWalker(document,NodeFilter.SHOW_TEXT);while(a=w.nextNode()){if(a.textContent.trim().length)a.textContent='Одиннадцатиклассница пошла посмотреть на достопримечательность, она шла долго, несколько строчек, пока не пришла'}