import "./social.css";
import iconGh from "./icon-gh.svg";
import iconLinkedin from "./icon-linkedin.svg";
import iconReddit from "./icon-reddit.svg";

const links = {
  gh: "https://github.com/sydalwedaie",
  linkedin: "https://www.linkedin.com/in/sydalwedaie/",
  reddit: "https://www.reddit.com/user/Gold-Watercress-6101/",
};

export function Social() {
  const html = String.raw;
  const markup = html`
    <div class="c-social">
      <div class="c-social__item">
        <a class="c-social__link" href="${links.gh}">
          <img src="${iconGh}" alt="" class="c-social__icon" />
        </a>
      </div>
      <div class="c-social__item">
        <a class="c-social__link" href="${links.linkedin}">
          <img src="${iconLinkedin}" alt="" class="c-social__icon" />
        </a>
      </div>
      <div class="c-social__item">
        <a class="c-social__link" href="${links.reddit}">
          <img src="${iconReddit}" alt="" class="c-social__icon" />
        </a>
      </div>
    </div>
  `;
  return markup;
}
