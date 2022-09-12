import { addClass, removeClass } from "./classAction"

export default class ToggleContent {
  constructor(options) {
    this.element = options.element
    this.animDilay = options.animDilay
    this.classStyleName = options.classStyleName 
    this.isOpen = false
    this.isAction = false
  }

  open() {
    addClass(this.element, this.classStyleName)
    this.isAction = true
    setTimeout(() => {
      this.isOpen = true
      this.isAction = false
    }, this.animDilay)
  }

  close() {
    removeClass(this.element, this.classStyleName)
    this.isAction = true
    setTimeout(() => {
      this.isOpen = false
      this.isAction = false
    }, this.animDilay)
  }
}