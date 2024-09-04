import "./Header.css";
import { createElement } from "../utils/utils";
import { getIconPath } from "../utils/iconPaths";

export class Header {
  constructor() {
    this.element = this.render();
  }
  render() {
    const header = createElement("header", "header");
    header.innerHTML = `
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">
            <a href="#" class="logo">Elfen lied</a>
          </div>
          <div class="header__catalog">
            <a href="#catalog" class="catalog__link">
              <img src="${getIconPath(
                "catalog"
              )}" alt="icon" class="catalog__icon"></img>
              Каталог
            </a>
          </div>
          <nav class="header__nav">
            <ul class="nav__list">
              <li class="nav__item"><a href="#" class="nav__link">Блог</a></li>
              <li class="nav__item"><a href="#" class="nav__link">Контакты</a></li>
            </ul>
          </nav>
          <div class="header__search">
            <img src="${getIconPath(
              "search"
            )}" alt="search" class="search__icon">
            <span class="search__text">Поиск</span>
          </div>
          <div class="header__icons">
            <a href="#" class="header__icon-link">
              <img src="${getIconPath("favorite")}" alt="favorite">
            </a>
            <a href="#" class="header__icon-link">
              <img src="${getIconPath("profile")}" alt="profile">
            </a>
            <a href="#" class="header__icon-link">
              <img src="${getIconPath("basket")}" alt="basket">
            </a>
          </div>
        </div>
      </div>
    `;
    return header;
  }
  mount(parent) {
    parent.appendChild(this.element);
  }
}
