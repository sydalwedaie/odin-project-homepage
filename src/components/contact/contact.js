import "./contact.css";
import iconTell from "./icon-tell.svg";
import iconEmail from "./icon-email.svg";
import { Social } from "../social/social.js";

export function Contact(data) {
  const html = String.raw;
  const markup = html`
    <div class="c-contact">
      <h2 class="c-contact__title">Contact</h2>
      <div class="c-contact__text">
        Reach out to schedule a one-on-one over a coffee!
      </div>
      <div class="c-contact__address">${data.address}</div>
      <div class="c-contact__tell">
        <img src="${iconTell}" alt="" class="c-contact__icon" />
        <span class="c-contact__tell-num">${data.tell}</span>
      </div>
      <div class="c-contact__email">
        <img src="${iconEmail}" alt="" class="c-contact__icon" />
        <span class="c-contact__email-address">${data.email}</span>
      </div>
      <div class="c-contact__social">${Social()}</div>
    </div>
  `;
  return markup;
}
