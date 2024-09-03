import "./style.css";
import { Home } from "./src/pages/home";

const appElement = document.querySelector("#app");

const home = new Home();
home.mount(appElement);
