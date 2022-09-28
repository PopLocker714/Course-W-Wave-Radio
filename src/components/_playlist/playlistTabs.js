import { addClass, removeClass } from "../../modules/classAction"
export default function playlistTabs() {
  const buttonsLebels = document.querySelectorAll('.playlist__genre-label')
  const buttons = document.querySelectorAll('.playlist__genre-bnt')
  const sliders = document.querySelectorAll('.playlist__swiper')

  buttonsLebels.forEach(el => el.addEventListener('change', handler))
  buttons.forEach(el => el.addEventListener('click', handler))

  function handler() {
    if (this.classList.contains('playlist__genre-label')) {
      clear()
      addClass(this, 'playlist__genre-label_active')
    } else {
      clear()
      addClass(this, 'playlist__genre-bnt_active')
    }
    
    sliders.forEach(el => {
      removeClass(el, 'playlist__swiper_active')
      if (+this.dataset.targetNumber === +el.dataset.number) {
        addClass(el, 'playlist__swiper_active')
      }
    })
  }

  function clear() {
    buttonsLebels.forEach(el => removeClass(el, 'playlist__genre-label_active'))
    buttons.forEach(el => removeClass(el, 'playlist__genre-bnt_active'))
  }
}