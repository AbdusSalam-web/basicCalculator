const buttonEl = document.querySelectorAll("button");
const inputFieldEl = document.querySelector("#result");
for (let i = 0; i < buttonEl.length; i++) {
  const element = buttonEl[i];
  element.addEventListener("click", () => {
    const buttonValue = buttonEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}
let clearResult = () => {
  inputFieldEl.value = "";
};
let calculateResult = () => {
  inputFieldEl.value = eval(inputFieldEl.value);
};
let appendValue = (buttonValue) => {
 let input= inputFieldEl.value += buttonValue;
};
