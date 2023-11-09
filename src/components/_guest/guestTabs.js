import { addClass, removeClass } from "../../modules/classAction";
export default function guestTabs() {
  const buttons = document.querySelectorAll("[data-guest-tab]");
  const content = document.querySelectorAll("[data-guest-info]");

  function handler(event) {
    event.preventDefault();
    buttons.forEach((el) => removeClass(el, "guest__toggle-item_active"));
    content.forEach((el) => removeClass(el, "guest__info-item_active"));
    addClass(this, "guest__toggle-item_active");
    content.forEach((el) => {
      if (+this.dataset.guestTab === +el.dataset.guestInfo) {
        addClass(el, "guest__info-item_active");
      }
    });
  }

  buttons.forEach((el) => {
    el.addEventListener("click", handler);
  });
}
