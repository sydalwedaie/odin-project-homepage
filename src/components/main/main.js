import "./main.css";

export function Main() {
  const html = String.raw;
  const markup = html`
    <main class="c-main">
      <h2 class="c-main__title">My Work</h2>
      <div class="c-main__body">
        <div class="c-main__card">card-1</div>
        <div class="c-main__card">card-2</div>
        <div class="c-main__card">card-3</div>
        <div class="c-main__card">card-4</div>
        <div class="c-main__card">card-5</div>
        <div class="c-main__card">card-6</div>
      </div>
    </main>
  `;
  return markup;
}
