import { addClass, removeClass } from "./classAction"
export default class TabsToggle {
  constructor(options) {
    this.buttons = options.buttons
    this.contents = options.contents
    this.classActive = options.classActive
    this.activeItem = options.activeItem
  }

  init() {

    addClass(this.contents[this.activeItem], this.classActive)
    // console.log(this.buttons)
    // console.log(this.buttons)
    this.buttons.forEach(el => {
      console.log(el)
      el.addEventListener('click', function() {
        console.log(this)
      }

    )})

    function handler() {
      console.log(this)
    }
    

    // console.log(this.contents)
  }
}