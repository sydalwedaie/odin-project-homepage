import "./about.css";
import { Social } from "../social/social.js";

export function About() {
  const html = String.raw;
  const markup = html`
    <div class="c-about">
      <div class="c-about__hero">
        <h1 class="c-about__name">Sayed Ali</h1>
        <picture class="c-about__image">
          <source
            media="(width >= 500px)"
            srcset="https://placehold.co/400x450.png"
          />
          <img src="https://placehold.co/300x450.png" alt="" />
        </picture>
      </div>
      <div class="c-about__body">
        <h2 class="c-about__title">About me</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam
        magnam distinctio dolore optio explicabo, amet nostrum incidunt maiores
        earum doloremque! Ullam, voluptates inventore a libero impedit
        necessitatibus modi totam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Deserunt porro a esse velit recusandae eos maxime,
        neque nemo quia maiores eum exercitationem ducimus, repellat earum.
        <div class="c-about__social">${Social()}</div>
      </div>
    </div>
  `;
  return markup;
}
