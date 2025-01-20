import { operate } from "./operations.js";
import { OPERATORS, BUTTON_ACTIONS } from "./constants.js";

let num1, num2, operator;

let operatorPress = false;

let mainDisplay = document.querySelector("#main-display");
// let subDisplay = document.querySelector("#sub-display");

let calculator_buttons = document.querySelector("#calculator-buttons");
calculator_buttons.addEventListener("click", (e) => {
  if (mainDisplay.textContent === "0") mainDisplay.textContent = "";
  let text = mainDisplay.textContent;
  let buttonPress = e.target.id;

  switch (buttonPress) {
    case "equals":
      if (num1) num2 = text;
      else num2 = num1;
      text = operate(num1, num2, operator);
      operator = "";
      operatorPress = true;
      break;
    case "clear":
      text = "0";
      num1 = num2 = undefined;
      operator = "";
      operatorPress = false;
      break;
    case "sign":
      if (text.includes("-")) text = text.slice(1);
      else text = "-" + text;
      break;
    case "decimal":
      if (!text.includes(BUTTON_ACTIONS[buttonPress])) {
        text += BUTTON_ACTIONS[buttonPress] ?? "";
        operatorPress = false;
      }
      break;
    default:
      if (OPERATORS.includes(BUTTON_ACTIONS[buttonPress])) {
        operator = BUTTON_ACTIONS[buttonPress];
        num2 = undefined;
        if (num1 && num2) {
          text = operate(num1, num2, operator);
        } else {
          num1 = text;
          operatorPress = true;
        }
        // Clears the text when the user presses operators, equal signs, and decimal points.
        // Also, it will let you save the previous value
      } else if (operatorPress) {
        num1 = text;
        num2 = undefined;
        text = BUTTON_ACTIONS[buttonPress] ?? "";
        operatorPress = false;
      } else text += BUTTON_ACTIONS[buttonPress] ?? "";
      break;
  }

  mainDisplay.textContent = text;
});
