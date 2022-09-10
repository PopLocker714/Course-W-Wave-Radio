import { addClass, removeClass } from "./functions"


export default class BurgerMenu {
  constructor (options) {
    this.burger = options.burger
    this.onClick = options.onClick
  }

  init() {
    console.log(this.burger)
    this.burger.addEventListener('click', this.onClick)
  }

  open() {
    addClass(this.burger, 'active')
  }

  close() {
    removeClass(this.burger, 'active')
  }

}


