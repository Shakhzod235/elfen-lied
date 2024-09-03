export class Home {
  constructor() {
    this.element = document.createElement("div");
    this.render();
  }
  render() {
    this.element.innerHTML = `
      <div>
        <h1>Home</h1>
      </div>
    `;
  }
  mount(parent) {
    parent.appendChild(this.element);
  }
}
