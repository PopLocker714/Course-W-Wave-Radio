let isFirstClick = false
export default function loadPodcastItems() {
  const newElements = document.querySelectorAll('.podcast__item')
  const list = document.querySelector('.podcast__list')
  const isMobile = window.innerWidth < 580
  if (!isFirstClick && isMobile) {
    newElements[2].classList.remove('podcast__item_mobile_hide')
    newElements[3].classList.remove('podcast__item_mobile_hide')
    newElements[2].scrollIntoView()
    isFirstClick = true
  } else {
    const firstEl = newElements[0].cloneNode(true)
    const secondEl = newElements[1].cloneNode(true)
    list.append(firstEl)
    list.append(secondEl)
    firstEl.scrollIntoView()
  }
}
