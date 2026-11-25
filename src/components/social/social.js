import "./social.css";
import iconGh from "./icon-gh.svg";
import iconLinkedin from "./icon-linkedin.svg";
import iconReddit from "./icon-reddit.svg";

export function Social() {
  const html = String.raw;
  const markup = html`
    <div class="c-social">
      <div class="c-social__item">
        <div class="c-social__link">
          <img src="${iconGh}" alt="" class="c-social__icon" />
        </div>
      </div>
      <div class="c-social__item">
        <div class="c-social__link">
          <img src="${iconLinkedin}" alt="" class="c-social__icon" />
        </div>
      </div>
      <div class="c-social__item">
        <div class="c-social__link">
          <img src="${iconReddit}" alt="" class="c-social__icon" />
        </div>
      </div>
    </div>
  `;
  return markup;
}
