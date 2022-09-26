import { addClass, removeClass } from "../../modules/classAction"
export default function guestTabs() {
  const btns = document.querySelectorAll('[data-guest-tab]')
  const content = document.querySelectorAll('[data-guest-info]')
  // console.log(content)
  btns.forEach(el => {
    el.addEventListener('click', heandler)
    function heandler(event) {
      event.preventDefault()
      btns.forEach(el => removeClass(el, 'guest__toggle-item_active'))
      content.forEach(el => removeClass(el, 'guest__info-item_active'))
      addClass(this, 'guest__toggle-item_active')
      content.forEach(el => {
        if(+this.dataset.guestTab === +el.dataset.guestInfo) {
          addClass(el, 'guest__info-item_active')
        }
      })
    }
  })
}