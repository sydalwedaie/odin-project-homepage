import "./card.css";
import iconGitHub from "./icon-gh.svg";
import iconExternal from "./icon-external.svg";

export function Card({ imgUrl, projectName, projectDescription }) {
  const html = String.raw;
  const markup = html`
    <article class="c-card">
      <div class="c-card__image-wrapper">
        <img
          src="${imgUrl}"
          alt="${projectName}"
          class="c-card__image"
          loading="lazy"
        />
      </div>
      <div class="c-card__info-wrapper">
        <h3 class="c-card__title">${projectName}</h3>
        <div class="c-card__links">
          <a href="#" class="c-card__link">
            <img src="${iconGitHub}" alt="" class="c-card__icon" />
          </a>
          <a href="#" class="c-card__link">
            <img src="${iconExternal}" alt="" class="c-card__icon" />
          </a>
        </div>
        <div class="c-card__description">${projectDescription}</div>
      </div>
    </article>
  `;
  return markup;
}
