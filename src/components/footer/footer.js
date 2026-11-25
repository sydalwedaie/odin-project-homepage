import "./footer.css";
import { Contact } from "../contact/contact.js";

const data = {
  address: "4321 Pretty Road, Cool Town, North Pole 1234",
  tell: "555-444-333",
  email: "contact@example.com",
};

export function Footer() {
  const html = String.raw;
  const markup = html`
    <footer class="c-footer">
      <div class="c-footer__contact-wrapper">${Contact(data)}</div>
      <div class="c-footer__image-wrapper">
        <picture class="c-footer__image">
          <source
            media="(width >= 800px)"
            srcset="https://placehold.co/400x350.png"
          />
          <img src="https://placehold.co/300x450.png" alt="" />
        </picture>
      </div>
    </footer>
  `;
  return markup;
}
