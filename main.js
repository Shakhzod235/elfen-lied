import "./style.css";
import { Home } from "./src/pages/Home";
import { mountComponent } from "./src/utils/utils";

const appElement = document.querySelector("#app");

mountComponent(Home, appElement);
