import "./about.css";
import { Social } from "../social/social.js";
import heroL1x from "../common/hero-landscape@1x.jpg";
import heroL2x from "../common/hero-landscape@2x.jpg";
import heroP1x from "../common/hero-portrait@1x.jpg";
import heroP2x from "../common/hero-portrait@2x.jpg";

export function About() {
  const html = String.raw;
  const markup = html`
    <div class="c-about">
      <div class="c-about__hero">
        <h1 class="c-about__name">Sayed Ali</h1>
        <picture class="c-about__image">
          <source
            media="(width >= 500px)"
            srcset="${heroL1x} 1x, ${heroL2x} 2x"
          />
          <source
            media="(width < 500px)"
            srcset="${heroP1x} 1x, ${heroP2x} 2x"
          />
          <img srcset="${heroL2x} 2x" src="${heroL1x}" alt="Hero image" />
        </picture>
      </div>
      <div class="c-about__body">
        <h2 class="c-about__title">About me</h2>
        <p class="c-about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aliquam magnam distinctio dolore optio explicabo, amet nostrum
          incidunt maiores earum doloremque! Ullam, voluptates inventore a
          libero impedit necessitatibus modi totam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt porro a esse velit recusandae
          eos maxime, neque nemo quia maiores eum exercitationem ducimus,
          repellat earum.
        </p>
        <div class="c-about__social">${Social()}</div>
      </div>
    </div>
  `;
  return markup;
}
