import { Header } from "../components/Header";
import { mountComponent } from "../utils/utils";

export class Home {
  constructor() {
    this.element = document.createElement("div");
    this.render();
  }
  render() {
    mountComponent(Header, this.element);
  }
  mount(parent) {
    parent.appendChild(this.element);
  }
}
