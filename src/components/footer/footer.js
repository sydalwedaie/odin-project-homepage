import "./footer.css";

export function Footer() {
  const html = String.raw;
  const markup = html`
    <footer class="c-footer">
      <div class="c-footer__contact-wrapper">Contact Me</div>
      <div class="c-footer__image-wrapper">
        <img
          src="https://placehold.co/500x300.png"
          alt=""
          class="c-footer__image"
        />
      </div>
    </footer>
  `;
  return markup;
}
