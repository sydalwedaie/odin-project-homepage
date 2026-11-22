import "./homepage.css";
import { Header } from "../header/header.js";
import { Main } from "../main/main.js";
import { Footer } from "../footer/footer.js";

export function Homepage() {
  const html = String.raw;
  const markup = html`
    <div class="c-homepage">
      <div class="c-homepage__header">${Header()}</div>
      <div class="c-homepage__main">${Main()}</div>
      <div class="c-homepage__footer">${Footer()}</div>
    </div>
  `;
  return markup;
}
