import { operate } from "./operations.js";
import { BUTTON_ACTIONS } from "./constants.js";

const OPERATORS = "/*-+%";
let num1, num2, operator;
let operatorClick = false;

let display = document.querySelector(".display");

let calculator_buttons = document.querySelector("#calculator-buttons");
calculator_buttons.addEventListener("click", (e) => {
  let text = display.textContent;

  if (e.target.id === "equals") {
    if (num1) num2 = text;
    else num2 = num1;
    display.textContent = operate(num1, num2, operator);
  } else if (OPERATORS.includes(BUTTON_ACTIONS[e.target.id])) {
    operator = BUTTON_ACTIONS[e.target.id];
    num1 = text;
    operatorClick = true;
  } else if (e.target.id === "clear") {
    display.textContent = "0";
  } else if (e.target.id === "sign") {
    if (text.includes("-")) display.textContent = text.slice(1);
    else display.textContent = "-" + text;
  } else {
    if (operatorClick) {
      display.textContent = BUTTON_ACTIONS[e.target.id] ?? "";
      operatorClick = false;
    } else display.textContent += BUTTON_ACTIONS[e.target.id] ?? "";
  }

  // display.textContent = text;
});
