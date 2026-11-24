import "./header.css";
import { About } from "../about/about.js";

export function Header() {
  const html = String.raw;
  const markup = html`
    <header class="c-header">
      <div class="c-header__about">${About()}</div>
    </header>
  `;
  return markup;
}
