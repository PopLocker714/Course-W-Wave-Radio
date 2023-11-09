import { addClass, removeClass } from "./classAction";

export default class ToggleContent {
  constructor(options) {
    this.element = options.element;
    this.animDelay = options.animDelay;
    this.classStyleName = options.classStyleName;
    this.isFirstElementAdd = options.isFirstElementAdd;
    this.isOpen = false;
    this.isAction = false;
  }

  open() {
    addClass(this.element, this.classStyleName);
    if (this.isFirstElementAdd)
      addClass(this.element.firstElementChild, this.classStyleName);
    this.isAction = true;
    setTimeout(() => {
      this.isOpen = true;
      this.isAction = false;
    }, this.animDelay);
  }

  close() {
    removeClass(this.element, this.classStyleName);
    if (this.isFirstElementAdd)
      removeClass(this.element.firstElementChild, this.classStyleName);
    this.isAction = true;
    setTimeout(() => {
      this.isOpen = false;
      this.isAction = false;
    }, this.animDelay);
  }
}
