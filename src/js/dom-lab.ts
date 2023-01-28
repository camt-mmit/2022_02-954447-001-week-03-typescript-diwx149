import { assignInput as assignInput } from './lab.js';
import { assignSection as assignSection } from './lab.js';

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.querySelector('.cmp-section-section');
  const inputTemplate = document.querySelector('template#tmp-input');
  const sectionTemplate = document.querySelector('template#tmp-section');

  // assignInput(mainContainer, inputTemplate, sectionTemplate);
  assignSection(sectionTemplate, inputTemplate, mainContainer);
});
