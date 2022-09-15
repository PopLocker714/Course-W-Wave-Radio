import '@fonts/MullerBold.woff'
import '@fonts/MullerBold.woff2'
import '@fonts/MullerLight.woff'
import '@fonts/MullerLight.woff2'
import '@fonts/MullerLightItalic.woff'
import '@fonts/MullerLightItalic.woff2'
import '@fonts/MullerMedium.woff'
import '@fonts/MullerMedium.woff2'
import '@fonts/MullerRegular.woff'
import '@fonts/MullerRegular.woff2'
import '@fonts/MullerRegularItalic.woff'
import '@fonts/MullerRegularItalic.woff2'

import './styles/main.scss'

import headerHtml from './components/_header/header.html'
import heroHtml from './components/_hero/hero.html'
import podcastHtml from './components/_podcast/podcast.html'

import loadSection from './modules/loadSection'
import BurgerMenu from './components/burger/BurgerMenu'
import Panel from './components/panel/Panel'

import loadPodcastItems from './components/_podcast/loadPodcastItems'

loadSection(headerHtml, 'header', document.body)
loadSection(heroHtml, 'section', document.body)
loadSection(podcastHtml, 'section', document.body)

// header
const burger = new BurgerMenu({
  element: document.getElementById('burger'),
  animDilay: 200,
  classStyleName: 'active',
  isFirstElementAdd: true,
  onClick: burgerHandler,
})

const panel = new Panel({
  element: document.getElementById('panel'),
  animDilay: 200,
  classStyleName: 'open',
  isFirstElementAdd: false,
  onClick: panelHandler,
})

function burgerHandler() {
  if ( !burger.isOpen && !burger.isAction ) {
    burger.open()
    if (panel.isOpen) panel.close()
  }
  if ( burger.isOpen && !burger.isAction ) {
    burger.close()
  }
}

function panelHandler() {
  if ( !panel.isOpen && !panel.isAction ) {
    panel.open()
  }
  if ( panel.isOpen && !panel.isAction ) {
    panel.close()
  }
}

const burgerLinks = document.querySelectorAll('.header__burger-nav-link')
burgerLinks.forEach(el => el.addEventListener('click', () => burger.close()))

// podcast
const btnMore = document.getElementById('btn-more')
btnMore.addEventListener('click', loadPodcastItems)