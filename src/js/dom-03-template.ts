function calculateTotal(
  container: HTMLElement,
  resultComponent: HTMLOutputElement
) {
  //แยก cal ออกมา
  const inputs = [
    ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
  ];
  const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
  resultComponent.value = `${total}`;
}

function addinput3(
  container: HTMLElement,
  resultComponent: HTMLOutputElement,
  template: HTMLTemplateElement
) {
  const fragment = template.content.cloneNode(true); //ดึง template
  const title = fragment.querySelector<HTMLOutputElement>(
    ".cmp-input-title"
  ) as unknown as HTMLOutputElement;
  const input = fragment.querySelector<HTMLInputElement>(
    'input[type="number"]'
  ) as HTMLInputElement;

  container.append(fragment);

  const nextN = container.querySelectorAll<HTMLInputElement>(
    'input[Type="number"]'
  ).length; // find next number
  title.innerText = `Number ${nextN}`;

  input.addEventListener("change", () => {
    // cal sum
    calculateTotal(container, resultComponent);
  });
}
//ดึง input number ออกมา
document.addEventListener("DOMContentLoaded", () => {
  // run script when dom เสร็จ
  const inputsContainer = document.querySelector<HTMLElement>(
    ".cmp-inputs-container"
  );
  const resultComponent: HTMLOutputElement =
    document.querySelector<HTMLOutputElement>("output.cmp-result");
  const template: HTMLTemplateElement =
    document.querySelector<HTMLTemplateElement>("template#tmp-input"); // template

  document
    .querySelector<HTMLButtonElement>(".cmd-add-input")
    .addEventListener("click", () => {
      addinput3(inputsContainer, resultComponent, template);
    });
  addinput3(inputsContainer, resultComponent, template);
});
