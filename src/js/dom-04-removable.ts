function computeTotal(
  inputsContainer: HTMLInputElement,
  resultComponent: HTMLOutputElement
) {
  //calculate total
  const total = [
    ...inputsContainer.querySelectorAll<HTMLInputElement>(
      ".cmp-input-container"
    ),
  ]
    .map((elem) => elem.querySelector<HTMLInputElement>(".cmp-input")) // create new array from elem (เเค่ช่อง input type=number)
    .reduce((carry, elem) => carry + elem.valueAsNumber, 0); //cal

  resultComponent.value = `${total}`;
}

function rebuildIndex(inputsContainer: HTMLInputElement) {
  // update no. of titel function
  const inputContainers = [
    ...inputsContainer.querySelectorAll(".cmp-input-container"), // เเต่ละ input box
  ];

  inputContainers.forEach((elem, i) => {
    // add input -- runเลข เพิ่ม
    [...elem.querySelectorAll(".cmp-input-no")].forEach((elem) => {
      elem.innerText = i + 1;
    });
  });

  [...inputsContainer.querySelectorAll(".cmd-remove-input")].forEach((elem) => {
    elem.disabled = !(inputContainers.length > 1); // disable when <=1
  });
}

function add(
  inputsContainer: HTMLInputElement,
  resultComponent: HTMLOutputElement,
  template: HTMLTemplateElement
) {
  // add input box function
  const fragment = template.content.cloneNode(true); // template

  inputsContainer.append(fragment);

  rebuildIndex(inputsContainer);
  computeTotal(inputsContainer, resultComponent);
}

function remove(
  inputsContainer: HTMLInputElement,
  resultComponent: HTMLOutputElement,
  inputContainer: HTMLInputElement
) {
  // remove input box function
  inputContainer.remove();

  rebuildIndex(inputsContainer);
  computeTotal(inputsContainer, resultComponent);
}

function assign(
  inputSection: HTMLInputElement,
  inputTemplate: HTMLTemplateElement
) {
  // event listener
  const inputsContainer = inputSection.querySelector(".cmp-inputs-container");
  const resultComponent = inputSection.querySelector(".cmp-result");

  inputSection.addEventListener("click", (ev) => {
    if (ev.target.matches(".cmd-add-input")) {
      // click input
      add(inputsContainer, resultComponent, inputTemplate);
    }
  });

  inputsContainer.addEventListener("change", (ev) => {
    if (ev.target.matches('input[type="number"]')) {
      // change number
      computeTotal(inputsContainer, resultComponent);
    }
  });

  inputsContainer.addEventListener("click", (ev) => {
    //click remove
    if (ev.target.matches(".cmd-remove-input")) {
      const inputContainer = ev.target.closest(".cmp-input-container");
      remove(inputsContainer, resultComponent, inputContainer);
    }
  });

  add(inputsContainer, resultComponent, inputTemplate); // default when reload
}

document.addEventListener("DOMContentLoaded", () => {
  const inputTemplate = document.querySelector("template#tmp-input");
  const inputSection = document.querySelector(".cmp-input-section");

  assign(inputSection, inputTemplate);
});
