import "./main.css";
import { Card } from "../card/card.js";
import data from "./data.json";

export function Main() {
  const html = String.raw;
  const markup = html`
    <main class="c-main">
      <h2 class="c-main__title">My Work</h2>
      <div class="c-main__body">
        ${data
          .map((project) => `<div class="c-main__card">${Card(project)}</div>`)
          .join("")}
      </div>
    </main>
  `;
  return markup;
}
