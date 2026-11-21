import "./homepage.css";

export function Homepage() {
  const html = String.raw;
  const markup = html`
    <div class="c-homepage">
      <header class="c-homepage__header"></header>
      <main class="c-homepage__main"></main>
      <footer class="c-homepage__footer"></footer>
    </div>
  `;
  return markup;
}
