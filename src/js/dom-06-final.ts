import { assign as assignInput } from "./input.js";

document.addEventListener("DOMContentLoaded", () => {
  const inputTemplate =
    document.querySelector<HTMLTemplateElement>("template#tmp-input");
  const inputSection =
    document.querySelector<HTMLElement>(".cmp-input-section");

  assignInput(inputSection, inputTemplate);
});
