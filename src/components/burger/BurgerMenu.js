import ToggleContent from "../../modules/ToggleContent"
export default class BurgerMenu extends ToggleContent {
  constructor(options) {
    super(options)
    this.element.addEventListener('click', options.onClick)
  }
}

