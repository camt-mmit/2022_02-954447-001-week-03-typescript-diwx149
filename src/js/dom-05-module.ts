import { assign as assignInput } from './input.js'; // import from module

document.addEventListener('DOMContentLoaded', () => {
  // same
  const inputTemplate = document.querySelector('template#tmp-input');
  const inputSection = document.querySelector('.cmp-input-section');

  assignInput(inputSection, inputTemplate);
});
