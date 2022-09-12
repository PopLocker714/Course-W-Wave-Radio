export default function loadSection (importSection, tagNameElement, container) {
  const el = new DOMParser().parseFromString(importSection, "text/html").getElementsByTagName(tagNameElement)[0]
  container.appendChild(el)
}