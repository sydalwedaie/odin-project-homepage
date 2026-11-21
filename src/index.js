import "./index.css";
import "./template.html";
import { Homepage } from "./components/homepage/homepage.js";

const bodyEl = document.querySelector("body");
bodyEl.innerHTML = Homepage();
