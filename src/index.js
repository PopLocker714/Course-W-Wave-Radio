import "@fonts/MullerBold.woff";
import "@fonts/MullerBold.woff2";
import "@fonts/MullerLight.woff";
import "@fonts/MullerLight.woff2";
import "@fonts/MullerLightItalic.woff";
import "@fonts/MullerLightItalic.woff2";
import "@fonts/MullerMedium.woff";
import "@fonts/MullerMedium.woff2";
import "@fonts/MullerRegular.woff";
import "@fonts/MullerRegular.woff2";
import "@fonts/MullerRegularItalic.woff";
import "@fonts/MullerRegularItalic.woff2";

import "./styles/main.scss";

import Choices from "choices.js";
import Accordion from "accordion-js";
// import Swiper from 'swiper'
import Swiper, { Navigation, Pagination } from "swiper";
// import 'swiper/css';

import headerHtml from "./components/_header/header.html";
import heroHtml from "./components/_hero/hero.html";
import podcastHtml from "./components/_podcast/podcast.html";
import transmissionHtml from "./components/_transmission/transmission.html";
import guestHtml from "./components/_guest/guest.html";
import playlistHtml from "./components/_playlist/playlist.html";
import productHtml from "./components/_product/product.html";
import aboutusHtml from "./components/_aboutus/aboutus.html";
import footerHtml from "./components/_footer/footer.html";

import loadSection from "./modules/loadSection";
import BurgerMenu from "./components/burger/BurgerMenu";
import Panel from "./components/panel/Panel";
// import TabsToggle from './modules/TabsToggle'
import transmissionToggle from "./components/_transmission/transmissionToggle";
import guestTabs from "./components/_guest/guestTabs";
import playlistTabs from "./components/_playlist/playlistTabs";

import loadPodcastItems from "./components/_podcast/loadPodcastItems";

loadSection(headerHtml, "header", document.body);
loadSection(heroHtml, "section", document.body);
loadSection(podcastHtml, "section", document.body);
loadSection(transmissionHtml, "section", document.body);
loadSection(guestHtml, "section", document.body);
loadSection(playlistHtml, "section", document.body);
loadSection(productHtml, "section", document.body);
loadSection(aboutusHtml, "section", document.body);
loadSection(footerHtml, "footer", document.body);

// header
const burger = new BurgerMenu({
  element: document.getElementById("burger"),
  animDelay: 200,
  classStyleName: "active",
  isFirstElementAdd: true,
  onClick: burgerHandler,
});

const panel = new Panel({
  element: document.getElementById("panel"),
  animDelay: 200,
  classStyleName: "open",
  isFirstElementAdd: false,
  onClick: panelHandler,
});

function burgerHandler() {
  if (!burger.isOpen && !burger.isAction) {
    burger.open();
    if (panel.isOpen) panel.close();
  }
  if (burger.isOpen && !burger.isAction) {
    burger.close();
  }
}

function panelHandler() {
  if (!panel.isOpen && !panel.isAction) {
    panel.open();
  }
  if (panel.isOpen && !panel.isAction) {
    panel.close();
  }
}

const burgerLinks = document.querySelectorAll(".header__burger-nav-link");
burgerLinks.forEach((el) => el.addEventListener("click", () => burger.close()));

// podcast
const btnMore = document.getElementById("btn-more");
btnMore.addEventListener("click", loadPodcastItems);

// transmission
const choices = new Choices(document.getElementById("select"), {
  searchEnabled: false,
  itemSelectText: "",
  position: "bottom",
  shouldSort: false,
  placeholder: false,
});

transmissionToggle(
  document.getElementById("select"),
  document.querySelectorAll(".transmission__list"),
  "transmission__list_active"
);

// guest
new Accordion(".accordion-container", {
  duration: 200,
  openOnInit: [0],
});

guestTabs();

// playlist
new Swiper(".playlist__swiper", {
  modules: [Navigation, Pagination],
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

playlistTabs();

// product

new Swiper(".product__swiper", {
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
