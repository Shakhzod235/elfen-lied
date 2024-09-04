export function mountComponent(ComponentClass, parent) {
  const component = new ComponentClass();
  const container = parent;
  component.mount(container);
}
export function createElement(tag, classNames) {
  const element = document.createElement(tag);
  if (classNames) {
    element.classList.add(classNames);
  }
  return element;
}
