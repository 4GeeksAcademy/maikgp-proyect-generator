/* eslint-disable */
import "bootstrap";
import "./style.css";

// listado de opciones de excusas //

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateExcuse(who, action, what, when) {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];
  console.log("Text");

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}
const randomExcuse = generateExcuse(who, action, what, when);
const selectorhtml = document.getElementById("excuse");
selectorhtml.textContent = randomExcuse;

document.getElementById("generateExcuseBtn").addEventListener("click", () => {
  location.reload();
});
