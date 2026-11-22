import "./header.css";

export function Header() {
  const html = String.raw;
  const markup = html`
    <header class="c-header">
      <div class="c-header__about">header about</div>
    </header>
  `;
  return markup;
}
