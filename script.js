// import {
//   morseTable,
//   textToMorse,
//   morseToText,
// } from "./morse-code-converter.js";

const morseTable = [
  { char: "A", code: ".-" },
  { char: "B", code: "-..." },
  { char: "C", code: "-.-." },
  { char: "D", code: "-.." },
  { char: "E", code: "." },
  { char: "F", code: "..-." },
  { char: "G", code: "--." },
  { char: "H", code: "...." },
  { char: "I", code: ".." },
  { char: "J", code: ".---" },
  { char: "K", code: "-.-" },
  { char: "L", code: ".-.." },
  { char: "M", code: "--" },
  { char: "N", code: "-." },
  { char: "O", code: "---" },
  { char: "P", code: ".--." },
  { char: "Q", code: "--.-" },
  { char: "R", code: ".-." },
  { char: "S", code: "..." },
  { char: "T", code: "-" },
  { char: "U", code: "..-" },
  { char: "V", code: "...-" },
  { char: "W", code: ".--" },
  { char: "X", code: "-..-" },
  { char: "Y", code: "-.--" },
  { char: "Z", code: "--.." },
  { char: "0", code: "-" },
  { char: "1", code: ".-" },
  { char: "2", code: "..-" },
  { char: "3", code: "...-" },
  { char: "4", code: "....-" },
  { char: "5", code: "....." },
  { char: "6", code: "-...." },
  { char: "7", code: "-..." },
  { char: "8", code: "-.." },
  { char: "9", code: "-." },
  { char: ".", code: ".-.-.-" },
  { char: ",", code: "-..-" },
  { char: "?", code: "..-.." },
  { char: "=", code: "-...-" },
  { char: " ", code: " " },
];

const textToMorse = (text) =>
  text
    .split("")
    .map((char) => {
      const entry = morseTable.find(
        (morse) => morse.char.toLowerCase() === char.toLowerCase()
      );
      return entry ? entry.code : "";
    })
    .join(" ");

const morseToText = (morse) => {
  const words = morse.split(/\s{2,}/g); // Fill array with words when there's more than 2 spaces
  return words
    .map((word) =>
      word
        .split(" ")
        .map((code) => {
          const entry = morseTable.find((morse) => morse.code === code);
          return entry ? entry.char : "";
        })
        .join("")
    )
    .join(" ");
};

const text = document.querySelector("#input");
const out = document.querySelector("#output");
let convButton = document.querySelector(".convert");
const playButton = document.querySelector(".play");

const handleClick = () => {
  const morse = textToMorse(text.value);
  console.log(morse);
  out.value = morse;
};

text.addEventListener("keyup", handleClick);
convButton.addEventListener("click", handleClick);
