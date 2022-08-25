import loadSection from "./loadSections";

import headerHtml from '../html/components/header.html'
import logoHtml from '../html/components/logo.html'

import logo from '../assets/images/logo/logo-black'

import '@fonts/MullerBold.woff'
import '@fonts/MullerBold.woff2'
import '@fonts/MullerLight.woff'
import '@fonts/MullerLight.woff2'


import '../styles/main.scss'

loadSection(headerHtml, 'header', document.body)
loadSection(logoHtml, 'picture', document.getElementById('header'))