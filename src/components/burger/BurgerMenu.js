import ToggleContent from "../../modules/ToggleContent"
export default class BurgerMenu extends ToggleContent {
  constructor(options) {
    super(options)
    this.element.firstElementChild.addEventListener('click', options.onClick)
  }
}