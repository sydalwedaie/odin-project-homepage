import "./footer.css";
import { Contact } from "../contact/contact.js";
import footerL1x from "./footer-landscape@1x.jpg";
import footerL2x from "./footer-landscape@2x.jpg";
import footerP1x from "./footer-portrait@1x.jpg";
import footerP2x from "./footer-portrait@2x.jpg";

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
            media="(width >= 550px)"
            srcset="${footerL1x} 1x, ${footerL2x} 2x"
          />
          <source
            media="(width < 550px)"
            srcset="${footerP1x} 1x, ${footerP2x} 2x"
          />
          <img srcset="${footerL2x} 2x" src="${footerL1x}" alt="Footer image" />
        </picture>
      </div>
    </footer>
  `;
  return markup;
}
