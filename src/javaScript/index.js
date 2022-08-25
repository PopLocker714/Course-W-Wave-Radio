
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

import loadSection from "./loadSections"

import headerHtml from '../styles/components/_header/header.html'
// import logoHtml from '../styles/components/logo/logo.html'

import logo from '../assets/images/logo/logo-black'

import '../styles/main.scss'

loadSection(headerHtml, 'header', document.body)
// loadSection(logoHtml, 'picture', document.querySelector('.header__container-top'))