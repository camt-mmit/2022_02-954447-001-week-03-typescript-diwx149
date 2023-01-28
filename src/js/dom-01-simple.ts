// run script when dom เสร็จ
document.addEventListener("DOMContentLoaded", () => {
  //ดึง input ออกมาจาก input box มาใส่ใน arrays
  const inputs = [
    ...document.querySelectorAll<HTMLInputElement>(
      '.cmp-inputs-container input[type="number"]'
    ), //แปลง node list เป็น arrays
  ];
  inputs.forEach((elem) => {
    //แต่ละตัวใน input เข้า elem function
    elem.addEventListener("change", () => {
      // เมื่อ content change
      const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
      const outputComponent =
        document.querySelector<HTMLOutputElement>("output.cmp-result");
      if (outputComponent == null) {
        throw new Error("Camn not find 'output.cmp-result' in DOM tree");
      }
      outputComponent.value = `${total}`;
    });
  });
});
