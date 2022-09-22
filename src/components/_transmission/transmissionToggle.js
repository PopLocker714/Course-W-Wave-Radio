import { addClass, removeClass } from "../../modules/classAction"
export default function transmissionToggle(transmissionsSelect, transmissionsCards, classActive) {

transmissionsSelect.addEventListener('change', event => {
  switch (event.detail.value) {
    case 'Дмитрий Гутенберг':
      choiceActive(transmissionsCards, 0, classActive)
      break
    case 'Татьяна Флеганова':
      choiceActive(transmissionsCards, 1, classActive)
      break
    case 'Анна Васильева':
      choiceActive(transmissionsCards, 2, classActive)
      break
    case 'Пётр Дмитриевский':
      choiceActive(transmissionsCards, 3, classActive)
      break
    default:
      choiceActive(transmissionsCards, 0, classActive)
      break
  }
})

}

function choiceActive(arr, target, className) {
  for (let i = 0; i < arr.length; i++) {
    removeClass(arr[i], className)
  }
  addClass(arr[target], className)
}
