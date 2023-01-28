function addinput2(container: HTMLElement) {
  const resultComponent =
    document.querySelector<HTMLOutputElement>("output.cmp-result");
  if (resultComponent == null) {
    throw new Error("Camn not find 'output.cmp-result' in DOM tree");
  }
  //function for add input box , count next title and cal
  const inputContainer = document.createElement("div"); //ตัวแปรสำหรับ input box แต่ละอัน
  inputContainer.classList.add("cmp-input-container");

  const label = document.createElement("label");
  inputContainer.append(label); //ยัด label ใส่ input container

  const title = document.createElement("b"); // ชื่อ input
  const input = document.createElement("input"); //ตัว input
  input.type = "number";
  input.defaultValue = `${0}`;
  input.required = true;

  label.append(title);
  label.append(input);
  //สร้าง input box เสร็จ
  container.append(inputContainer);
  const nextN = container.querySelectorAll('input[Type="number"]').length; //หาจำนวน input
  title.innerText = `Number ${nextN}`;

  input.addEventListener("change", () => {
    //คำนวณผลรวม
    const inputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];
    const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);

    resultComponent.value = `${total}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // run script when dom เสร็จ
  const inputsContainer = document.querySelector<HTMLElement>(
    ".cmp-inputs-container"
  );
  // const resultComponent =
  //   document.querySelector<HTMLElement>("output.cmp-result");
  const addInputButton =
    document.querySelector<HTMLButtonElement>(".cmd-add-input");

  addInputButton?.addEventListener("click", () => {
    addinput2(inputsContainer ?? document.createElement("div"));
  });
  addinput2(inputsContainer ?? document.createElement("div")); // for the default
});
