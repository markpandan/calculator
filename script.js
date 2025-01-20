// import { add, subtract, multiply, divide } from "./operations";
import { BUTTON_ACTIONS } from "./constants.js";

let display = document.querySelector(".display");
let calculator_buttons = document.querySelector("#calculator-buttons");
calculator_buttons.addEventListener("click", (e) => {
  display.textContent += BUTTON_ACTIONS[e.target.id] ?? "";
});
